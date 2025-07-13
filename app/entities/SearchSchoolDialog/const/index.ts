import { SchoolType, SelectOption } from "@/shared";

export const selectOptions: SelectOption<SchoolType>[] = [
  { value: "elem_list", label: "초등학교" },
  { value: "midd_list", label: "중학교" },
  { value: "high_list", label: "고등학교" },
  { value: "univ_list", label: "대학교" },
  { value: "seet_list", label: "특수학교" },
  { value: "alte_list", label: "기타" },
];
