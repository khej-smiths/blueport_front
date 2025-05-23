import { MenuTree } from "@/entities";
import { ROUTE } from "@/shared";

export const menuTree: MenuTree[] = [
  {
    title: "사용자 설정",
    path: ROUTE.MANAGE_USER,
  },
  {
    title: "블로그 설정",
    path: ROUTE.MANAGE_ABOUT,
  },
  {
    title: "이력서",
    path: ROUTE.MANAGE_RESUME,
  },
];
