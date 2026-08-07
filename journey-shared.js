(() => {
  "use strict";

  // Full list of step IDs per stage — shared source of truth for hub-page progress.
  const JOURNEY_MANIFEST = {
    a: ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14"],
    b: ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"],
    c: ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10"],
    d: ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12"],
  };
  window.JOURNEY_MANIFEST = JOURNEY_MANIFEST;

  const STATES = ["todo", "doing", "done"];
  const STATE_TITLE = {
    todo: "미완료 — 클릭하면 진행중으로",
    doing: "진행중 — 클릭하면 완료로",
    done: "완료 — 클릭하면 미완료로",
  };

  function statusKey(id) { return "journey-status-" + id; }
  function notesKey(id) { return "journey-notes-" + id; }

  function getStatus(id) {
    return localStorage.getItem(statusKey(id)) || "todo";
  }

  function applyState(btn, state) {
    btn.dataset.state = state;
    btn.title = STATE_TITLE[state] || "";
    const step = btn.closest(".step");
    if (step) step.dataset.state = state;
  }

  function initStatusButtons(onChange) {
    document.querySelectorAll("[data-status-for]").forEach((btn) => {
      const id = btn.dataset.statusFor;
      applyState(btn, getStatus(id));
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const cur = btn.dataset.state || "todo";
        const next = STATES[(STATES.indexOf(cur) + 1) % STATES.length];
        localStorage.setItem(statusKey(id), next);
        applyState(btn, next);
        if (onChange) onChange();
      });
    });
  }

  function initNotes() {
    document.querySelectorAll("[data-notes-for]").forEach((el) => {
      const key = notesKey(el.dataset.notesFor);
      el.value = localStorage.getItem(key) || "";
      el.addEventListener("input", () => {
        try { localStorage.setItem(key, el.value); } catch (e) { /* storage full - ignore */ }
      });
      el.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  function initAccordion() {
    document.querySelectorAll(".step-head").forEach((head) => {
      head.addEventListener("click", () => {
        const step = head.closest(".step");
        const isOpen = step.classList.toggle("open");
        head.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* unsupported - ignore */ }
    document.body.removeChild(ta);
  }

  function initCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const block = btn.closest(".copy-block");
        const codeEl = block.querySelector("pre");
        const text = codeEl ? codeEl.innerText : "";
        const done = () => {
          const orig = btn.dataset.origLabel || btn.textContent;
          btn.dataset.origLabel = orig;
          btn.textContent = "복사됨!";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = orig;
            btn.classList.remove("copied");
          }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(() => { fallbackCopy(text); done(); });
        } else {
          fallbackCopy(text);
          done();
        }
      });
    });
  }

  function computeProgress(ids) {
    let done = 0, doing = 0;
    ids.forEach((id) => {
      const s = getStatus(id);
      if (s === "done") done++;
      else if (s === "doing") doing++;
    });
    const total = ids.length;
    const pct = total ? Math.round(((done + doing * 0.5) / total) * 100) : 0;
    return { done, doing, todo: total - done - doing, total, pct };
  }
  window.JourneyProgress = { computeProgress, getStatus };

  function renderPageProgress() {
    const bar = document.getElementById("pageProgressFill");
    const label = document.getElementById("pageProgressLabel");
    if (!bar || !label) return;
    const ids = Array.from(document.querySelectorAll("[data-status-for]")).map((el) => el.dataset.statusFor);
    const { done, total, pct } = computeProgress(ids);
    bar.style.width = pct + "%";
    label.textContent = `${done} / ${total} 완료`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initAccordion();
    initCopyButtons();
    initNotes();
    initStatusButtons(renderPageProgress);
    renderPageProgress();
  });
})();
