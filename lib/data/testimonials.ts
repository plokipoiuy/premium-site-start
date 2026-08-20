import { Testimonial } from "@/lib/types";

// 실제 고객 후기가 등록되기 전까지는 허위 후기를 만들지 않고 placeholder로 표시합니다.
export const testimonials: Testimonial[] = [
  { id: "testimonial-1", isPlaceholder: true },
  { id: "testimonial-2", isPlaceholder: true },
  { id: "testimonial-3", isPlaceholder: true },
];
