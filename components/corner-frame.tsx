const cornerBase = "absolute w-6 h-6 md:w-8 md:h-8 border-ink/70";

export function CornerFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 p-3 md:p-5"
    >
      <div className="relative h-full w-full">
        <span className={`${cornerBase} top-0 left-0 border-t border-l`} />
        <span className={`${cornerBase} top-0 right-0 border-t border-r`} />
        <span className={`${cornerBase} bottom-0 left-0 border-b border-l`} />
        <span className={`${cornerBase} bottom-0 right-0 border-b border-r`} />
      </div>
    </div>
  );
}
