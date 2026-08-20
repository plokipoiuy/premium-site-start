import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-white pb-24 pt-14 lg:pb-14">
      <div className="container-content flex flex-col gap-8">
        <Logo />
        <div className="grid gap-2 text-sm leading-[1.8] text-text-muted lg:grid-cols-2">
          <p>서울 강남구 논현로 (샘플 주소) · 사업자등록번호 000-00-00000 (샘플)</p>
          <p>대표 홍길동 (샘플) · 고객센터 02-1234-5678 (샘플)</p>
        </div>
        <p className="text-xs leading-[1.8] text-text-muted">
          © 2026 GREEN HOUSE. 본 사이트의 사업자 정보, 연락처, 접수현황, 작업사례는 데모용 샘플이며 실제
          데이터가 아닙니다.
        </p>
      </div>
    </footer>
  );
}
