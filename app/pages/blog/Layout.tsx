import { GNB } from "@/widgets";
import { QUERIES, QUERY_KEY } from "@/shared";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router";

export async function loader({
  params: { domain },
}: {
  params: { domain: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.blog.readBlog(domain),
    queryFn: () => QUERIES.readBlog({ domain }),
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
