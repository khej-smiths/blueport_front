import route from "@/constant/route";

interface MenuTree {
  title: string;
  path: string;
}

const menuTree: MenuTree[] = [
  {
    title: "블로그 설정",
    path: route.MANAGE_ABOUT,
  },
  {
    title: "이력서",
    path: route.MANAGE_RESUME,
  },
];

export default menuTree;
