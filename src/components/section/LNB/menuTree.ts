import route from "@/constant/route";

interface MenuTree {
  title: string;
  path: string;
}

const menuTree: MenuTree[] = [
  {
    title: "About",
    path: route.MANAGE_ABOUT,
  },
  {
    title: "Resume",
    path: route.MANAGE_RESUME,
  },
];

export default menuTree;
