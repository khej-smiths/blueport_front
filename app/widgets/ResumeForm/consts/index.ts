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
