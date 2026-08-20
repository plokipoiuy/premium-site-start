import { ShieldCheck, ReceiptText, Wrench, Users, ClipboardCheck, Hammer } from "lucide-react";
import { trustPoints } from "@/lib/data/trust";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [ShieldCheck, ReceiptText, Wrench, Users, ClipboardCheck, Hammer];

export function TrustSection() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container-content">
        <SectionHeading title="그린하우스를 선택하는 분명한 이유" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {trustPoints.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point.id} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-card bg-white p-7 shadow-soft lg:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-green/8 text-deep-green">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-text-charcoal">{point.title}</h3>
                  <p className="text-sm leading-[1.7] text-text-body lg:text-base">{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
