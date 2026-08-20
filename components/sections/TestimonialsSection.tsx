import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-coral-pink">
            REVIEWS
          </span>
          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.25] tracking-tight text-text-charcoal lg:text-[44px]">
            고객후기
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-card border border-dashed border-divider bg-ivory p-8 text-center">
                <Quote size={22} className="text-sage-green" aria-hidden="true" />
                <p className="text-sm leading-[1.7] text-text-muted">
                  실제 고객 후기가 등록되면 이 영역에 표시됩니다.
                  <br />
                  아직 등록된 후기가 없습니다.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
