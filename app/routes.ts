import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("pages/home/index.tsx"),
  route("/login", "pages/login/index.tsx"),
  route("/editor", "pages/editor/index.tsx"),
  layout("pages/blog/Layout.tsx", [
    route("/:domain", "pages/blog/main/index.tsx"),
    route("/:domain/:postId", "pages/blog/post/index.tsx"),
    route("/resume/:ownerId", "pages/blog/resume/index.tsx"),
  ]),
  layout("pages/manage/Layout.tsx", [
    route("/manage/blog", "pages/manage/blog/index.tsx"),
    route("/manage/resume", "pages/manage/resume/index.tsx"),
    route("/manage/user", "pages/manage/user/index.tsx"),
  ]),
] satisfies RouteConfig;
