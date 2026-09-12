import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/siteConfig";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-xs font-semibold uppercase tracking-wide text-text-muted">{label}</span>
      <span className="mt-1 block text-sm font-semibold text-text-charcoal">{value}</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-divider bg-white pb-24 pt-14 lg:pb-14">
      <div className="container-content flex flex-col gap-8">
        <Logo />

        <div className="rounded-card border border-divider bg-ivory p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="flex flex-col gap-4">
              <InfoRow label="상호명" value={siteConfig.businessName} />
              <InfoRow label="사업자등록번호" value={siteConfig.businessRegNo} />
              <InfoRow label="대표전화" value={siteConfig.representativePhone} />
              <InfoRow label="서비스 지역" value={siteConfig.serviceAreas.join(", ")} />
            </div>
            <div className="flex flex-col gap-4">
              <InfoRow label="대표자" value={siteConfig.representativeName} />
              <InfoRow label="주소" value={siteConfig.address} />
              <InfoRow label="이메일" value={siteConfig.email} />
              <InfoRow label="공식 홈페이지" value={siteConfig.officialWebsite} />
            </div>
          </div>
          <p className="mt-6 text-xs leading-[1.7] text-text-muted">
            ※ 위 정보 중 일부는 홈페이지 디자인 확인을 위한 샘플이며, 실제 제작 시 확인된 업체 정보로
            교체됩니다.
          </p>
        </div>

        <p className="text-xs leading-[1.8] text-text-muted">
          © {new Date().getFullYear()} {siteConfig.businessNameEnglish}. 본 사이트의 작업사례는 데모용
          샘플이며 실제 데이터가 아닙니다.
        </p>
      </div>
    </footer>
  );
}
