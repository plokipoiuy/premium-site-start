(() => {
  "use strict";

  const STORAGE_KEY = "billboard-board-state-v1";

  const COMPARE_ITEMS = [
    { key: "hero", label: "히어로" },
    { key: "typo", label: "타이포그래피" },
    { key: "color", label: "컬러 / 톤" },
    { key: "layout", label: "레이아웃 / 여백" },
    { key: "motion", label: "모션" },
    { key: "cta", label: "CTA / 전환" },
  ];

  const COMPLEXITY_LABEL = { simple: "간단", medium: "보통", complex: "복잡" };

  function defaultState() {
    const rows = {};
    COMPARE_ITEMS.forEach((item) => { rows[item.key] = { ref: "", target: "" }; });
    return {
      diagnosis: { content: "" },
      compare: { refUrl: "", targetUrl: "", rows, summary: "" },
      planning: { goal: "", audience: "", tone: "", requirements: "" },
      siteInfo: { name: "", tagline: "", brandColor: "#00e5d8", photos: [] },
      pages: [],
      quote: {
        baseFee: 800000,
        unitPrices: { simple: 150000, medium: 300000, complex: 500000 },
        vatIncluded: false,
      },
      draft1: { url: "", notes: "", image: null },
      draft2: { url: "", notes: "", image: null },
      handover: {
        domain: "", hosting: "", adminUrl: "", adminId: "", adminPassword: "",
        otherAccounts: "", usage: "", showPassword: false,
      },
    };
  }

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const saved = JSON.parse(raw);
      const base = defaultState();
      return deepMerge(base, saved);
    } catch (e) {
      return defaultState();
    }
  }

  function deepMerge(base, saved) {
    if (typeof saved !== "object" || saved === null || Array.isArray(saved)) {
      return saved === undefined ? base : saved;
    }
    const out = { ...base };
    Object.keys(base).forEach((k) => {
      out[k] = deepMerge(base[k], saved[k]);
    });
    return out;
  }

  function saveState() {
    try {
      const toSave = JSON.parse(JSON.stringify(state));
      toSave.siteInfo.photos = []; // photos are session-only, skipped to avoid quota issues
      toSave.draft1.image = null;
      toSave.draft2.image = null;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      /* storage unavailable or full - fail silently, keep working in-memory */
    }
  }

  function getPath(obj, path) {
    return path.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
  }

  function setPath(obj, path, value) {
    const keys = path.split(".");
    let cur = obj;
    for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
    cur[keys[keys.length - 1]] = value;
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function todayStr() {
    return new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
  }

  function won(n) {
    return (Number(n) || 0).toLocaleString("ko-KR") + "원";
  }

  /* ---------- Nav / tabs ---------- */

  function initNav() {
    document.querySelectorAll(".nav-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.section;
        document.querySelectorAll(".nav-item").forEach((b) => b.classList.toggle("active", b === btn));
        document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.dataset.section === key));
      });
    });
  }

  /* ---------- Generic [data-model] binding (static fields) ---------- */

  function fillStaticInputs() {
    document.querySelectorAll("[data-model]").forEach((el) => {
      const path = el.dataset.model;
      const val = getPath(state, path);
      if (el.type === "checkbox") el.checked = !!val;
      else el.value = val ?? "";
    });
  }

  function initGenericInputListener() {
    document.addEventListener("input", (e) => {
      const el = e.target;
      if (!el.matches("[data-model]")) return;
      const path = el.dataset.model;
      let value;
      if (el.type === "checkbox") value = el.checked;
      else if (el.type === "number") value = el.value === "" ? 0 : Number(el.value);
      else value = el.value;
      setPath(state, path, value);
      saveState();
      renderPreviews();
    });
  }

  /* ---------- Compare rows (03-02) ---------- */

  function initCompareRows() {
    const root = document.getElementById("compareRows");
    root.innerHTML = COMPARE_ITEMS.map((item) => `
      <div class="compare-row">
        <div class="compare-row-title">${escapeHtml(item.label)}</div>
        <div class="field-row">
          <label class="field">
            <span class="field-label">참고 사이트</span>
            <textarea data-model="compare.rows.${item.key}.ref" rows="2"></textarea>
          </label>
          <label class="field">
            <span class="field-label">본 사이트</span>
            <textarea data-model="compare.rows.${item.key}.target" rows="2"></textarea>
          </label>
        </div>
      </div>
    `).join("");
    fillStaticInputs();
  }

  /* ---------- Photo upload (04) ---------- */

  function initPhotoUpload() {
    const input = document.getElementById("photoInput");
    input.addEventListener("change", () => {
      const files = Array.from(input.files || []);
      let pending = files.length;
      if (!pending) return;
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          state.siteInfo.photos.push({ name: file.name, dataUrl: reader.result });
          pending -= 1;
          if (pending === 0) {
            input.value = "";
            renderPhotoGrid();
            renderPreviews();
          }
        };
        reader.readAsDataURL(file);
      });
    });
  }

  function renderPhotoGrid() {
    const grid = document.getElementById("photoGrid");
    grid.innerHTML = state.siteInfo.photos.map((p, i) => `
      <div class="photo-thumb">
        <img src="${p.dataUrl}" alt="${escapeHtml(p.name)}" />
        <button type="button" data-remove-photo="${i}" title="삭제">✕</button>
      </div>
    `).join("");
  }

  function initPhotoRemove() {
    document.getElementById("photoGrid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-remove-photo]");
      if (!btn) return;
      const idx = Number(btn.dataset.removePhoto);
      state.siteInfo.photos.splice(idx, 1);
      renderPhotoGrid();
      renderPreviews();
    });
  }

  /* ---------- Draft previews (07, 08) ---------- */

  function renderDraftImageThumb(draftKey) {
    const container = document.getElementById(`${draftKey}ImagePreview`);
    const img = state[draftKey].image;
    container.innerHTML = img
      ? `<div class="draft-image-thumb"><img src="${img.dataUrl}" alt="${escapeHtml(img.name)}" /><button type="button" data-remove-draft-image="${draftKey}" title="삭제">✕</button></div>`
      : "";
  }

  function initDraftImageUpload(draftKey) {
    const input = document.getElementById(`${draftKey}Image`);
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        state[draftKey].image = { name: file.name, dataUrl: reader.result };
        input.value = "";
        renderDraftImageThumb(draftKey);
        renderPreviews();
      };
      reader.readAsDataURL(file);
    });

    document.getElementById(`${draftKey}ImagePreview`).addEventListener("click", (e) => {
      if (!e.target.closest(`[data-remove-draft-image="${draftKey}"]`)) return;
      state[draftKey].image = null;
      renderDraftImageThumb(draftKey);
      renderPreviews();
    });

    renderDraftImageThumb(draftKey);
  }

  function isEmbeddableUrl(url) {
    return /^https?:\/\/.+/i.test(url.trim());
  }

  function renderDraftPreview(draftKey) {
    const d = state[draftKey];
    const hasAny = d.url || d.notes || d.image;
    if (!hasAny) return emptyMsg("URL이나 스크린샷을 등록하면 여기에 표시됩니다.");

    let visual = "";
    if (d.url && isEmbeddableUrl(d.url)) {
      visual = `
        <div class="preview-iframe-wrap">
          <iframe src="${escapeHtml(d.url)}" loading="lazy" referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
        </div>
        <p class="preview-iframe-note">일부 사이트는 보안 설정 때문에 여기서 열리지 않을 수 있어요. 그럴 땐 스크린샷을 업로드하세요.</p>
      `;
    } else if (d.image) {
      visual = `<img class="draft-shot" src="${d.image.dataUrl}" alt="시안 스크린샷" />`;
    }

    return `
      <h2>${draftKey === "draft1" ? "시안1" : "시안2"}</h2>
      <div class="doc-date">${escapeHtml(d.url) || "URL 미입력"}</div>
      ${visual}
      ${d.notes ? block("메모", d.notes) : ""}
    `;
  }

  function draftPrintHtml(draftKey) {
    const d = state[draftKey];
    const imgHtml = d.image ? `<img class="draft-shot" src="${d.image.dataUrl}" alt="시안 스크린샷" style="max-width:100%;" />` : "";
    return `
      <h2>${draftKey === "draft1" ? "시안1 미리보기" : "시안2 미리보기"}</h2>
      <div class="doc-date">${todayStr()} 기준</div>
      ${block("URL", d.url)}
      ${imgHtml}
      ${d.notes ? block("메모", d.notes) : ""}
    `;
  }

  /* ---------- Handover info (09) ---------- */

  function initPasswordToggle() {
    const btn = document.getElementById("togglePasswordBtn");
    const input = document.getElementById("adminPasswordInput");
    btn.addEventListener("click", () => {
      state.handover.showPassword = !state.handover.showPassword;
      input.type = state.handover.showPassword ? "text" : "password";
      btn.textContent = state.handover.showPassword ? "숨기기" : "표시";
      renderPreviews();
    });
  }

  function renderHandoverPreview() {
    const h = state.handover;
    const hasAny = h.domain || h.hosting || h.adminUrl || h.adminId || h.adminPassword || h.otherAccounts || h.usage;
    if (!hasAny) return emptyMsg("도메인, 호스팅, 관리자 계정 정보를 입력해보세요.");
    const passDisplay = h.showPassword ? (h.adminPassword || "—") : (h.adminPassword ? "•".repeat(Math.min(h.adminPassword.length, 12)) : "—");
    return docShell("인수인계 정보", [
      block("도메인", h.domain),
      block("호스팅 업체 / 플랜", h.hosting),
      block("관리자 로그인 URL", h.adminUrl),
      block("관리자 아이디", h.adminId),
      `<div class="preview-block"><h3>관리자 비밀번호</h3><p>${escapeHtml(passDisplay)}</p></div>`,
      block("기타 계정 정보", h.otherAccounts),
      block("사용 방법 / 안내", h.usage),
    ].join(""));
  }

  function handoverPrintHtml() {
    const h = state.handover;
    return docShell("인수인계 정보", [
      block("도메인", h.domain),
      block("호스팅 업체 / 플랜", h.hosting),
      block("관리자 로그인 URL", h.adminUrl),
      block("관리자 아이디", h.adminId),
      block("관리자 비밀번호", h.adminPassword),
      block("기타 계정 정보", h.otherAccounts),
      block("사용 방법 / 안내", h.usage),
    ].join(""));
  }

  /* ---------- Page list (05) ---------- */

  let pageIdCounter = 1;

  function newPage() {
    return { id: "p" + pageIdCounter++, name: "", desc: "", complexity: "medium" };
  }

  function renderPageList() {
    const root = document.getElementById("pageList");
    if (!state.pages.length) {
      root.innerHTML = `<p class="empty" style="color:var(--text-muted);font-size:14px;">추가된 페이지가 없습니다. 아래 버튼으로 추가하세요.</p>`;
      return;
    }
    root.innerHTML = state.pages.map((pg, i) => `
      <div class="page-card" data-page-id="${pg.id}">
        <button type="button" class="page-card-remove" data-remove-page="${pg.id}">삭제</button>
        <div class="field-row">
          <label class="field">
            <span class="field-label">페이지 ${i + 1} 이름</span>
            <input type="text" data-page-field="name" placeholder="예) 서비스 소개" value="${escapeHtml(pg.name)}" />
          </label>
          <label class="field">
            <span class="field-label">복잡도</span>
            <select data-page-field="complexity">
              <option value="simple" ${pg.complexity === "simple" ? "selected" : ""}>간단</option>
              <option value="medium" ${pg.complexity === "medium" ? "selected" : ""}>보통</option>
              <option value="complex" ${pg.complexity === "complex" ? "selected" : ""}>복잡</option>
            </select>
          </label>
        </div>
        <label class="field">
          <span class="field-label">상세 내용</span>
          <textarea data-page-field="desc" rows="2" placeholder="구성 요소, 필요한 기능 등">${escapeHtml(pg.desc)}</textarea>
        </label>
      </div>
    `).join("");
  }

  function initPageList() {
    renderPageList();

    document.getElementById("addPageBtn").addEventListener("click", () => {
      state.pages.push(newPage());
      saveState();
      renderPageList();
      renderPreviews();
    });

    document.getElementById("pageList").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-remove-page]");
      if (!btn) return;
      const id = btn.dataset.removePage;
      state.pages = state.pages.filter((p) => p.id !== id);
      saveState();
      renderPageList();
      renderPreviews();
    });

    document.getElementById("pageList").addEventListener("input", (e) => {
      const el = e.target.closest("[data-page-field]");
      if (!el) return;
      const card = e.target.closest("[data-page-id]");
      const id = card.dataset.pageId;
      const page = state.pages.find((p) => p.id === id);
      if (!page) return;
      page[el.dataset.pageField] = el.value;
      saveState();
      renderPreviews();
    });
  }

  /* ---------- Preview rendering ---------- */

  function block(label, text) {
    return `<div class="preview-block"><h3>${escapeHtml(label)}</h3><p>${escapeHtml(text) || "—"}</p></div>`;
  }

  function docShell(title, inner) {
    return `<h2>${escapeHtml(title)}</h2><div class="doc-date">${todayStr()} 기준</div>${inner}`;
  }

  function emptyMsg(text) {
    return `<p class="empty">${escapeHtml(text)}</p>`;
  }

  function renderDiagnosisPreview() {
    const c = state.diagnosis.content.trim();
    if (!c) return emptyMsg("아직 입력한 내용이 없습니다. 왼쪽에 진단 내용을 입력해보세요.");
    return docShell("웹사이트 문제점 진단 리포트", block("진단 내용", state.diagnosis.content));
  }

  function renderComparePreview() {
    const { refUrl, targetUrl, rows, summary } = state.compare;
    const hasAny = refUrl || targetUrl || summary || COMPARE_ITEMS.some((i) => rows[i.key].ref || rows[i.key].target);
    if (!hasAny) return emptyMsg("URL과 비교 메모를 입력하면 여기에 정리됩니다.");

    const tableRows = COMPARE_ITEMS.map((item) => `
      <tr>
        <th>${escapeHtml(item.label)}</th>
        <td>${escapeHtml(rows[item.key].ref) || "—"}</td>
        <td>${escapeHtml(rows[item.key].target) || "—"}</td>
      </tr>
    `).join("");

    return docShell("비교 분석 리포트", `
      <div class="preview-block">
        <h3>대상 URL</h3>
        <p>참고: ${escapeHtml(refUrl) || "—"}\n본 사이트: ${escapeHtml(targetUrl) || "—"}</p>
      </div>
      <div class="preview-block">
        <h3>항목별 비교</h3>
        <table class="compare-table">
          <thead><tr><th></th><th>참고 사이트</th><th>본 사이트</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
      ${block("종합 의견", summary)}
    `);
  }

  function renderPlanningPreview() {
    const p = state.planning;
    const hasAny = p.goal || p.audience || p.tone || p.requirements;
    if (!hasAny) return emptyMsg("프로젝트 목표, 타겟, 톤앤매너, 요구사항을 입력해보세요.");
    return docShell("기획 요약 리포트", [
      block("프로젝트 목표", p.goal),
      block("타겟 고객", p.audience),
      block("톤앤매너", p.tone),
      block("핵심 요구사항", p.requirements),
    ].join(""));
  }

  function renderSiteInfoPreview() {
    const s = state.siteInfo;
    const hasAny = s.name || s.tagline || s.photos.length;
    if (!hasAny) return emptyMsg("사이트명, 슬로건, 참고 사진을 입력해보세요.");
    const photoHtml = s.photos.length
      ? `<div class="preview-photo-grid">${s.photos.map((p) => `<img src="${p.dataUrl}" alt="${escapeHtml(p.name)}" />`).join("")}</div>`
      : "";
    return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:2px;">
        <span style="width:14px;height:14px;border-radius:50%;background:${escapeHtml(s.brandColor)};display:inline-block;"></span>
        <h2 style="margin:0;">${escapeHtml(s.name) || "사이트명 미입력"}</h2>
      </div>
      <div class="doc-date">${escapeHtml(s.tagline) || "슬로건 미입력"}</div>
      ${photoHtml}
    `;
  }

  function renderPagesPreview() {
    if (!state.pages.length) return emptyMsg("페이지를 추가하면 여기에 목록이 표시됩니다.");
    const items = state.pages.map((pg, i) => `
      <div class="preview-block">
        <h3>${i + 1}. ${escapeHtml(pg.name) || "이름 없는 페이지"} · ${COMPLEXITY_LABEL[pg.complexity]}</h3>
        <p>${escapeHtml(pg.desc) || "—"}</p>
      </div>
    `).join("");
    return docShell("제작 페이지 목록", items);
  }

  function computeQuote() {
    const { baseFee, unitPrices, vatIncluded } = state.quote;
    const pageRows = state.pages.map((pg) => ({
      name: pg.name || "이름 없는 페이지",
      complexity: pg.complexity,
      price: unitPrices[pg.complexity] || 0,
    }));
    const pagesTotal = pageRows.reduce((sum, r) => sum + r.price, 0);
    const subtotal = Number(baseFee || 0) + pagesTotal;
    const total = vatIncluded ? Math.round(subtotal * 1.1) : subtotal;
    return { pageRows, subtotal, total, vatIncluded };
  }

  function renderQuotePreview() {
    const { pageRows, subtotal, total, vatIncluded } = computeQuote();
    const rowsHtml = pageRows.map((r) => `
      <tr>
        <td>${escapeHtml(r.name)} <span style="color:var(--text-muted);">(${COMPLEXITY_LABEL[r.complexity]})</span></td>
        <td class="num">${won(r.price)}</td>
      </tr>
    `).join("");

    return `
      <h2>${escapeHtml(state.siteInfo.name) || "프로젝트"} 견적서</h2>
      <div class="doc-date">${todayStr()} 발행</div>
      <table class="quote-table">
        <thead><tr><th>항목</th><th class="num">금액</th></tr></thead>
        <tbody>
          <tr><td>기본 기획 / 디자인비</td><td class="num">${won(state.quote.baseFee)}</td></tr>
          ${rowsHtml}
          ${vatIncluded ? `<tr><td>부가세(10%) 포함</td><td class="num">—</td></tr>` : ""}
          <tr class="quote-total-row"><td>합계${vatIncluded ? " (VAT 포함)" : " (VAT 별도)"}</td><td class="num">${won(total)}</td></tr>
        </tbody>
      </table>
    `;
  }

  function renderPreviews() {
    document.querySelector('[data-preview="diagnosis"]').innerHTML = renderDiagnosisPreview();
    document.querySelector('[data-preview="compare"]').innerHTML = renderComparePreview();
    document.querySelector('[data-preview="planning"]').innerHTML = renderPlanningPreview();
    document.querySelector('[data-preview="siteinfo"]').innerHTML = renderSiteInfoPreview();
    document.querySelector('[data-preview="pages"]').innerHTML = renderPagesPreview();
    document.querySelector('[data-preview="quote"]').innerHTML = renderQuotePreview();
    document.querySelector('[data-preview="draft1"]').innerHTML = renderDraftPreview("draft1");
    document.querySelector('[data-preview="draft2"]').innerHTML = renderDraftPreview("draft2");
    document.querySelector('[data-preview="handover"]').innerHTML = renderHandoverPreview();
  }

  const PRINT_HTML_OVERRIDES = {
    draft1: () => draftPrintHtml("draft1"),
    draft2: () => draftPrintHtml("draft2"),
    handover: () => handoverPrintHtml(),
  };

  /* ---------- PDF export (browser print) ---------- */

  function initPdfButtons() {
    document.querySelectorAll(".pdf-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.pdf;
        const title = btn.dataset.title;
        const printRoot = document.getElementById("print-root");
        const brand = escapeHtml(state.siteInfo.name) || "전광판";
        const contentHtml = PRINT_HTML_OVERRIDES[key]
          ? PRINT_HTML_OVERRIDES[key]()
          : document.querySelector(`[data-preview="${key}"]`).innerHTML;

        printRoot.innerHTML = `
          <div class="doc">
            <div class="doc-header">
              <span class="doc-brand">${brand}</span>
              <span>${escapeHtml(title)}</span>
            </div>
            ${contentHtml}
          </div>
        `;

        document.body.classList.add("printing");
        window.print();
      });
    });

    window.addEventListener("afterprint", () => {
      document.body.classList.remove("printing");
      document.getElementById("print-root").innerHTML = "";
    });
  }

  /* ---------- Reset ---------- */

  function initReset() {
    document.getElementById("resetAllBtn").addEventListener("click", () => {
      if (!confirm("입력한 모든 내용을 삭제할까요? 이 작업은 되돌릴 수 없습니다.")) return;
      localStorage.removeItem(STORAGE_KEY);
      state = defaultState();
      fillStaticInputs();
      initCompareRows();
      renderPhotoGrid();
      renderPageList();
      renderDraftImageThumb("draft1");
      renderDraftImageThumb("draft2");
      document.getElementById("adminPasswordInput").type = "password";
      document.getElementById("togglePasswordBtn").textContent = "표시";
      renderPreviews();
    });
  }

  /* ---------- Init ---------- */

  function init() {
    initNav();
    fillStaticInputs();
    initGenericInputListener();
    initCompareRows();
    initPhotoUpload();
    initPhotoRemove();
    renderPhotoGrid();
    initPageList();
    initDraftImageUpload("draft1");
    initDraftImageUpload("draft2");
    initPasswordToggle();
    initPdfButtons();
    initReset();
    renderPreviews();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
