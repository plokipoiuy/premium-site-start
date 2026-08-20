"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";

type FormValues = {
  name: string;
  phone: string;
  region: string;
  housingType: string;
  size: string;
  serviceType: string;
  desiredDate: string;
  message: string;
  agree: boolean;
};

const initialValues: FormValues = {
  name: "",
  phone: "",
  region: "",
  housingType: "",
  size: "",
  serviceType: "",
  desiredDate: "",
  message: "",
  agree: false,
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const inputClass =
  "w-full rounded-xl border border-divider bg-white px-4 py-3 text-sm text-text-charcoal placeholder:text-text-muted focus-visible:outline-deep-green";
const labelClass = "mb-1.5 block text-sm font-semibold text-text-charcoal";
const errorClass = "mt-1.5 text-xs font-medium text-coral-pink";

export function QuoteFormModal() {
  const { isOpen, close } = useQuoteModal();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "이름을 입력해 주세요.";
    if (!/^0\d{1,2}-?\d{3,4}-?\d{4}$/.test(values.phone.trim())) {
      next.phone = "올바른 연락처 형식으로 입력해 주세요. (예: 010-1234-5678)";
    }
    if (!values.region.trim()) next.region = "청소를 원하시는 지역을 입력해 주세요.";
    if (!values.housingType) next.housingType = "주거 유형을 선택해 주세요.";
    if (!values.size.trim() || Number(values.size) <= 0) next.size = "평수를 정확히 입력해 주세요.";
    if (!values.serviceType) next.serviceType = "청소 종류를 선택해 주세요.";
    if (!values.desiredDate) next.desiredDate = "희망 날짜를 선택해 주세요.";
    if (!values.agree) next.agree = "개인정보 수집 및 이용에 동의해 주세요.";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // 데모 버전: 실제 서버 전송 없이 프론트엔드에서만 완료 화면을 보여줍니다.
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    close();
    setTimeout(() => {
      setIsSubmitted(false);
      setValues(initialValues);
      setErrors({});
    }, 250);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={isSubmitted ? "신청이 접수되었습니다" : "1분 간편 견적 받기"}>
      {isSubmitted ? (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <CheckCircle2 size={44} className="text-deep-green" aria-hidden="true" />
          <p className="text-base font-semibold text-text-charcoal">
            {values.name || "고객"}님, 견적 신청이 접수되었습니다.
          </p>
          <p className="max-w-sm text-sm leading-[1.7] text-text-body">
            남겨주신 연락처로 담당자가 확인 후 안내해 드립니다. 이 화면은 데모용이며, 실제로 정보가
            서버에 전송되지 않았습니다.
          </p>
          <Button onClick={handleClose} className="mt-2">
            닫기
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <p className="text-xs leading-[1.6] text-text-muted">
            * 본 양식은 프론트엔드 데모입니다. 입력하신 정보는 서버로 전송되지 않으며, 개인정보
            처리방침이 준비된 이후 실제 접수 기능이 연동될 예정입니다.
          </p>

          <div>
            <label htmlFor="q-name" className={labelClass}>
              이름 <span className="text-coral-pink">*</span>
            </label>
            <input
              id="q-name"
              type="text"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "q-name-error" : undefined}
              className={inputClass}
              placeholder="이름을 입력해 주세요"
            />
            {errors.name && <p id="q-name-error" className={errorClass}>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="q-phone" className={labelClass}>
              연락처 <span className="text-coral-pink">*</span>
            </label>
            <input
              id="q-phone"
              type="tel"
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "q-phone-error" : undefined}
              className={inputClass}
              placeholder="010-1234-5678"
            />
            {errors.phone && <p id="q-phone-error" className={errorClass}>{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="q-region" className={labelClass}>
              청소 지역 <span className="text-coral-pink">*</span>
            </label>
            <input
              id="q-region"
              type="text"
              value={values.region}
              onChange={(e) => setField("region", e.target.value)}
              aria-invalid={!!errors.region}
              aria-describedby={errors.region ? "q-region-error" : undefined}
              className={inputClass}
              placeholder="예: 강남구 논현동"
            />
            {errors.region && <p id="q-region-error" className={errorClass}>{errors.region}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-housing" className={labelClass}>
                주거 유형 <span className="text-coral-pink">*</span>
              </label>
              <select
                id="q-housing"
                value={values.housingType}
                onChange={(e) => setField("housingType", e.target.value)}
                aria-invalid={!!errors.housingType}
                className={inputClass}
              >
                <option value="">선택해 주세요</option>
                <option value="아파트">아파트</option>
                <option value="오피스텔">오피스텔</option>
                <option value="빌라·연립">빌라·연립</option>
                <option value="기타">기타</option>
              </select>
              {errors.housingType && <p className={errorClass}>{errors.housingType}</p>}
            </div>

            <div>
              <label htmlFor="q-size" className={labelClass}>
                평수 <span className="text-coral-pink">*</span>
              </label>
              <input
                id="q-size"
                type="number"
                min={1}
                value={values.size}
                onChange={(e) => setField("size", e.target.value)}
                aria-invalid={!!errors.size}
                className={inputClass}
                placeholder="예: 32"
              />
              {errors.size && <p className={errorClass}>{errors.size}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-service" className={labelClass}>
                청소 종류 <span className="text-coral-pink">*</span>
              </label>
              <select
                id="q-service"
                value={values.serviceType}
                onChange={(e) => setField("serviceType", e.target.value)}
                aria-invalid={!!errors.serviceType}
                className={inputClass}
              >
                <option value="">선택해 주세요</option>
                <option value="입주청소">입주청소</option>
                <option value="이사청소">이사청소</option>
                <option value="거주청소">거주청소</option>
                <option value="부분·집중청소">부분·집중청소</option>
              </select>
              {errors.serviceType && <p className={errorClass}>{errors.serviceType}</p>}
            </div>

            <div>
              <label htmlFor="q-date" className={labelClass}>
                희망 날짜 <span className="text-coral-pink">*</span>
              </label>
              <input
                id="q-date"
                type="date"
                value={values.desiredDate}
                onChange={(e) => setField("desiredDate", e.target.value)}
                aria-invalid={!!errors.desiredDate}
                className={inputClass}
              />
              {errors.desiredDate && <p className={errorClass}>{errors.desiredDate}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="q-message" className={labelClass}>
              문의 내용
            </label>
            <textarea
              id="q-message"
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="추가로 전달하고 싶은 내용이 있다면 남겨주세요"
            />
          </div>

          <div>
            <label className="flex items-start gap-2.5 text-sm text-text-body">
              <input
                type="checkbox"
                checked={values.agree}
                onChange={(e) => setField("agree", e.target.checked)}
                aria-invalid={!!errors.agree}
                className="mt-0.5 h-4 w-4 shrink-0 accent-deep-green"
              />
              <span>
                (필수) 견적 상담을 위한 개인정보 수집 및 이용에 동의합니다. 수집 항목: 이름, 연락처,
                청소 지역 등. 개인정보 처리방침은 준비 중입니다.
              </span>
            </label>
            {errors.agree && <p className={errorClass}>{errors.agree}</p>}
          </div>

          <Button type="submit" size="lg" className="mt-1 w-full">
            견적 신청하기
          </Button>
        </form>
      )}
    </Modal>
  );
}
