import { ImageIcon } from "lucide-react";

type PlaceholderImageProps = {
  alt: string;
  className?: string;
  variant?: "sage" | "blush" | "ivory";
};

const variantStyles: Record<NonNullable<PlaceholderImageProps["variant"]>, string> = {
  sage: "from-sage-green/35 to-deep-green/15",
  blush: "from-blush-pink to-sage-green/20",
  ivory: "from-sage-green/20 to-ivory",
};

// 실제 사진이 준비되기 전까지 사용하는 시각적 placeholder.
// alt 텍스트는 실제 이미지 교체 시 그대로 유지해 접근성을 보존한다.
export function PlaceholderImage({ alt, className = "", variant = "sage" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br ${variantStyles[variant]} ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-deep-green/40" strokeWidth={1.5} aria-hidden="true" />
      <span className="px-4 text-center text-xs font-medium text-deep-green/50">샘플 이미지</span>
    </div>
  );
}
