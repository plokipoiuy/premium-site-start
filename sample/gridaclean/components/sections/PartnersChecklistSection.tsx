import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "@/sample/gridaclean/lib/data/checklist";
import { partnerCompanies } from "@/sample/gridaclean/lib/data/partners";
import { SectionHeading } from "@/sample/gridaclean/components/ui/SectionHeading";
import { Reveal } from "@/sample/gridaclean/components/ui/Reveal";
import { siteConfigGridaclean as siteConfig } from "@/sample/gridaclean/lib/siteConfig";
import { josa } from "@/lib/korean";

export function PartnersChecklistSection() {
  return (
    <section id="partners" className="section-padding bg-ivory">
      <div className="container-content">
        <SectionHeading eyebrow="INFO" title="청소 전 체크리스트 & 협력 파트너" />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:items-stretch">
          {/* 체크리스트 */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft lg:p-8">
              <h3 className="text-lg font-bold text-text-charcoal">입주청소 전 준비사항</h3>
              <ul className="mt-5 flex flex-1 flex-col gap-4">
                {checklistItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-grida-blue" aria-hidden="true" />
                    <span className="text-sm leading-[1.7] text-text-body lg:text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* 협력 파트너 */}
          <Reveal delay={0.1} className="order-first h-full lg:order-none">
            <div className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft lg:p-8">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-charcoal">
                  {siteConfig.businessName}
                  {josa(siteConfig.businessName, "과", "와")} 함께한 파트너
                </h3>
                <span className="rounded-full bg-grida-accent-light px-2.5 py-1 text-xs font-bold text-grida-accent">
                  샘플
                </span>
              </div>
              <div className="group relative mt-4 flex flex-1 min-h-[120px] items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max animate-marquee-x items-center gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                  {[...partnerCompanies, ...partnerCompanies].map((partner, i) => (
                    <span
                      key={`${partner.id}-${i}`}
                      className="shrink-0 whitespace-nowrap text-base font-semibold text-text-muted lg:text-lg"
                    >
                      {partner.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          * 위 협력업체는 홈페이지 디자인 확인을 위한 샘플입니다.
        </p>
      </div>
    </section>
  );
}
