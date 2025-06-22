/**
 * 필요한 경우에만 호출하여 메모리 사용량을 최적화할 수 있습니다.
 */

export const getMonthOptions = (startMonth = 1) =>
  Array.from({ length: 12 }).map((_, index) => ({
    value: `${startMonth + index}`,
    label: `${startMonth + index}월`,
  }));

/**
 * 필요한 경우에만 호출하여 메모리 사용량을 최적화할 수 있습니다.
 */

export const getYearOptions = (
  startYear = 1970,
  endYear = new Date().getFullYear()
) => {
  return Array.from({ length: endYear - startYear + 1 }).map((_, index) => ({
    value: `${startYear + index}`,
    label: `${startYear + index}년`,
  }));
};

export const getStandardGradeOptions = () => {
  return [
    { value: "4.0", label: "4.0" },
    { value: "4.3", label: "4.3" },
    { value: "4.5", label: "4.5" },
    { value: "5.0", label: "5.0" },
    { value: "7.0", label: "7.0" },
    { value: "100", label: "100" },
  ];
};
