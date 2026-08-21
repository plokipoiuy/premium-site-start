import { Quote, Star } from "lucide-react";
import { sampleReview } from "@/lib/data/testimonials";
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

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl lg:mt-16">
          <div className="relative rounded-card border border-divider bg-ivory p-8 text-center lg:p-10">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral-pink px-3 py-1 text-xs font-bold text-white">
              샘플 미리보기
            </span>
            <Quote size={24} className="mx-auto text-sage-green" aria-hidden="true" />
            <div className="mt-4 flex justify-center gap-0.5">
              {Array.from({ length: sampleReview.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-coral-pink text-coral-pink" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-4 text-base leading-[1.7] text-text-charcoal lg:text-lg">
              &ldquo;{sampleReview.content}&rdquo;
            </p>
            <p className="mt-4 text-sm text-text-muted">
              {sampleReview.maskedName} · {sampleReview.serviceType}
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-text-muted">
            * 위 후기는 실제 후기 등록 전, 디자인 확인을 위한 샘플입니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
