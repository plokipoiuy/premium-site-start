import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-coral-pink">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[30px] font-extrabold leading-[1.25] tracking-tight text-text-charcoal lg:text-[44px]">
        {title}
      </h2>
      {description && <p className="text-base leading-[1.7] text-text-body lg:text-lg">{description}</p>}
    </Reveal>
  );
}
