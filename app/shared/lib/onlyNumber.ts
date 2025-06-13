import { ChangeEvent } from "react";

export function onlyNumber(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  onChange: (...event: any[]) => void,
  decimal?: boolean
) {
  const value = e.target.value;

  // 소수점이 허용된 경우, 소수점 두 개 이상 입력 방지
  if (decimal && value.split(".").length > 2) return;

  const regex = decimal ? /^(\d+|\d+\.\d*)$/ : /^\d+$/;
  if (regex.test(value) || value === "") {
    return onChange(value);
  }
}