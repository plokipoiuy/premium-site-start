import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const bizLine = [siteConfig.address, siteConfig.businessRegNo && `사업자등록번호 ${siteConfig.businessRegNo}`]
    .filter(Boolean)
    .join(" · ");
  const contactLine = [
    siteConfig.representativeName && `대표 ${siteConfig.representativeName}`,
    siteConfig.phoneDisplay && `고객센터 ${siteConfig.phoneDisplay}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <footer className="border-t border-divider bg-white pb-24 pt-14 lg:pb-14">
      <div className="container-content flex flex-col gap-8">
        <Logo />
        {(bizLine || contactLine) && (
          <div className="grid gap-2 text-sm leading-[1.8] text-text-muted lg:grid-cols-2">
            {bizLine && <p>{bizLine}</p>}
            {contactLine && <p>{contactLine}</p>}
          </div>
        )}
        <p className="text-xs leading-[1.8] text-text-muted">
          © {new Date().getFullYear()} {siteConfig.businessNameEnglish}. 본 사이트의 작업사례는 데모용
          샘플이며 실제 데이터가 아닙니다.
        </p>
      </div>
    </footer>
  );
}
