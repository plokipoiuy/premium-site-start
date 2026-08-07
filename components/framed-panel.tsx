import type { ReactNode } from "react";

const tick = "absolute w-4 h-4 border-ink/50";

export function FramedPanel({
  gradient,
  label,
  sublabel,
  className = "",
  children,
}: {
  gradient: string;
  label: string;
  sublabel?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative border border-ink/15 bg-surface p-2 ${className}`}>
      <span className={`${tick} top-1 left-1 border-t border-l`} />
      <span className={`${tick} top-1 right-1 border-t border-r`} />
      <span className={`${tick} bottom-1 left-1 border-b border-l`} />
      <span className={`${tick} bottom-1 right-1 border-b border-r`} />

      <div
        className="flex aspect-[4/3] w-full items-center justify-center"
        style={{ backgroundImage: gradient }}
      >
        <div className="text-center">
          <p className="font-hand text-4xl text-white drop-shadow-sm md:text-6xl">
            {label}
          </p>
          {sublabel ? (
            <p className="mt-2 font-mono text-xs tracking-widest text-white/80">
              {sublabel}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
