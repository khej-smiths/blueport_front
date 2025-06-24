/** yyyy.MM 형식으로 들어오는 날짜를 Date 타입으로 변환 */
export function stringDateToFromDate(date: string) {
  const [year, month] = date.split(".").map(Number);
  return new Date(year, month - 1, 1, 0, 0, 0, 0);
}
