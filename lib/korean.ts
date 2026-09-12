// 받침 유무에 따라 조사를 선택합니다 (예: 를/을, 와/과, 가/이).
// 업체명이 바뀌어도 문법이 깨지지 않도록 하기 위한 최소 유틸리티입니다.
export function josa(word: string, withBatchim: string, withoutBatchim: string): string {
  const lastChar = word.charCodeAt(word.length - 1);
  if (lastChar < 0xac00 || lastChar > 0xd7a3) return withoutBatchim; // 한글이 아니면 기본값
  const hasBatchim = (lastChar - 0xac00) % 28 !== 0;
  return hasBatchim ? withBatchim : withoutBatchim;
}
