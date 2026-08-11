import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { DepartmentGrid } from "@/components/departments/department-grid";
import { StaffSearch } from "@/components/departments/staff-search";

export const metadata: Metadata = {
  title: "진료안내 | 한빛대학교병원",
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="MEDICAL CARE"
        title="진료안내"
        breadcrumb="진료안내"
        description="45개 진료과, 950여 명의 전문 의료진이 정확한 진단과 최선의 치료를 제공합니다."
      />
      <DepartmentGrid />
      <StaffSearch />
    </>
  );
}
