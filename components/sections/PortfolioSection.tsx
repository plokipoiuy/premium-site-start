"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Ruler, Users2, Clock } from "lucide-react";
import { featuredCase, portfolioCases } from "@/lib/data/portfolio";
import { PortfolioCase, PortfolioCategory } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CompareSlider } from "@/components/portfolio/CompareSlider";
import { Modal } from "@/components/ui/Modal";

const categories: PortfolioCategory[] = ["전체", "주방", "욕실", "창틀", "거실·바닥", "베란다"];

function InfoRow({ icon: Icon, label }: { icon: typeof MapPin; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-text-body">
      <Icon size={16} className="shrink-0 text-sage-green" aria-hidden="true" />
      {label}
    </div>
  );
}

export function PortfolioSection() {
  const [category, setCategory] = useState<PortfolioCategory>("전체");
  const [activeCase, setActiveCase] = useState<PortfolioCase | null>(null);

  const filtered = useMemo(
    () => (category === "전체" ? portfolioCases : portfolioCases.filter((c) => c.category === category)),
    [category]
  );

  return (
    <section id="portfolio" className="section-padding bg-ivory">
      <div className="container-content">
        <SectionHeading eyebrow="PORTFOLIO" title="설명보다 확실한 청소 전후의 차이" />

        <div className="mt-10 flex gap-2 overflow-x-auto scrollbar-thin pb-1 lg:mt-12 lg:flex-wrap lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-deep-green ${
                category === cat
                  ? "bg-deep-green text-white"
                  : "bg-white text-text-body hover:bg-deep-green/8"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 대표 사례 */}
        <Reveal className="mt-10 lg:mt-14">
          <div className="grid gap-8 rounded-card bg-white p-5 shadow-card lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:p-8">
            <CompareSlider
              beforeAlt={
                featuredCase.beforeImage
                  ? `${featuredCase.title} - 청소 전 거실 모습`
                  : `${featuredCase.title} - 청소 전 (샘플 이미지)`
              }
              afterAlt={
                featuredCase.afterImage
                  ? `${featuredCase.title} - 청소 후 정돈된 거실 모습`
                  : `${featuredCase.title} - 청소 후 (샘플 이미지)`
              }
              beforeImage={featuredCase.beforeImage}
              afterImage={featuredCase.afterImage}
            />
            <div className="flex flex-col justify-center gap-5">
              <div>
                <span className="rounded-full bg-blush-pink px-3 py-1 text-xs font-bold text-coral-pink">
                  대표 사례 · 샘플 데이터
                </span>
                <h3 className="mt-3 text-2xl font-bold text-text-charcoal">{featuredCase.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <InfoRow icon={MapPin} label={featuredCase.region} />
                <InfoRow icon={Ruler} label={featuredCase.pyeong} />
                <InfoRow icon={Users2} label={featuredCase.crew} />
                <InfoRow icon={Clock} label={featuredCase.duration} />
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-text-charcoal">주요 작업 범위</p>
                <ul className="flex flex-col gap-1.5">
                  {featuredCase.scope.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-text-body">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-deep-green" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 추가 포트폴리오 카드 */}
        <div className="mt-10 grid grid-cols-1 gap-5 overflow-x-hidden sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActiveCase(item)}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: (i % 3) * 0.1 }}
              className="group overflow-hidden rounded-card bg-white text-left shadow-soft transition-shadow hover:shadow-card focus-visible:outline-deep-green"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage
                    alt={`${item.title} 전후 비교 (샘플 이미지)`}
                    variant="sage"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-coral-pink">
                  {item.category}
                </span>
                <h3 className="mt-1 text-base font-bold text-text-charcoal">{item.title}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  {item.region} · {item.pyeong}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal isOpen={!!activeCase} onClose={() => setActiveCase(null)} title={activeCase?.title ?? ""}>
        {activeCase && (
          <div className="flex flex-col gap-6">
            {activeCase.beforeImage && activeCase.afterImage ? (
              <CompareSlider
                beforeAlt={`${activeCase.title} - 청소 전`}
                afterAlt={`${activeCase.title} - 청소 후`}
                beforeImage={activeCase.beforeImage}
                afterImage={activeCase.afterImage}
              />
            ) : activeCase.image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card lg:aspect-[16/10]">
                <Image src={activeCase.image} alt={activeCase.title} fill sizes="100vw" className="object-cover" />
              </div>
            ) : (
              <CompareSlider
                beforeAlt={`${activeCase.title} - 청소 전 (샘플 이미지)`}
                afterAlt={`${activeCase.title} - 청소 후 (샘플 이미지)`}
              />
            )}
            <div className="grid grid-cols-2 gap-3">
              <InfoRow icon={MapPin} label={activeCase.region} />
              <InfoRow icon={Ruler} label={activeCase.pyeong} />
              <InfoRow icon={Users2} label={activeCase.crew} />
              <InfoRow icon={Clock} label={activeCase.duration} />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-text-charcoal">주요 작업 범위</p>
              <ul className="flex flex-col gap-1.5">
                {activeCase.scope.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-text-body">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-deep-green" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-text-muted">* 본 작업 정보는 실제 데이터 연동 전까지 사용하는 샘플입니다.</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
