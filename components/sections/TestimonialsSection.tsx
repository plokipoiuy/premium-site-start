import { Quote, Star } from "lucide-react";
import { sampleReviews } from "@/lib/data/testimonials";
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
          {sampleReviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 0.1}>
              <div className="relative flex h-full flex-col items-center gap-4 rounded-card border border-divider bg-ivory p-8 text-center">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral-pink px-3 py-1 text-xs font-bold text-white">
                  샘플
                </span>
                <Quote size={22} className="mt-2 text-sage-green" aria-hidden="true" />
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} className="fill-coral-pink text-coral-pink" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-[1.7] text-text-charcoal">&ldquo;{review.content}&rdquo;</p>
                <p className="mt-auto text-xs text-text-muted">
                  {review.maskedName} · {review.serviceType}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          * 위 후기 3건은 실제 후기 등록 전, 디자인 확인을 위한 샘플입니다.
        </p>
      </div>
    </section>
  );
}
