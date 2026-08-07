import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Guide } from "@/components/appointment/guide";
import { ReservationForm } from "@/components/appointment/reservation-form";

export const metadata: Metadata = {
  title: "진료예약 | 한빛대학교병원",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="APPOINTMENT"
        title="진료예약"
        breadcrumb="진료예약"
        description="온라인으로 간편하게 진료를 예약하세요. 응급 상황에는 응급실(02-3410-0119)로 바로 연락해 주세요."
      />
      <Guide />
      <ReservationForm />
    </>
  );
}
