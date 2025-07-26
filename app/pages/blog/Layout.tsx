import { GNB } from "@/widgets";
import { QUERIES, QUERY_KEY } from "@/shared";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router";

export async function loader({
  params: { domain },
  request,
}: {
  params: { domain: string };
  request: Request;
}) {
  const accessToken =
    request.headers.get("Authorization")?.split(" ")[1] ?? null;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.blog.readBlog(domain),
    queryFn: () => QUERIES.readBlog(accessToken, { domain }),
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default function BlogLayout() {
  return (
    <section className="flex min-h-dvh flex-col gap-5">
      <GNB />
      <Outlet />
    </section>
  );
}
