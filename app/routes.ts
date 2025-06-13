import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/index.tsx"),
  route("/login", "pages/login/index.tsx"),
  route("/editor", "pages/editor/index.tsx"),
  route("/:domain", "pages/blog/index.tsx"),
  route("/:domain/:postId", "pages/post/index.tsx"),
  route("/manage/blog", "pages/manage/blog/index.tsx"),
  route("/manage/resume", "pages/manage/resume/index.tsx"),
  route("/manage/user", "pages/manage/user/index.tsx"),
] satisfies RouteConfig;
