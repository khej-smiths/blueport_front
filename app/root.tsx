import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type LinksFunction,
} from "react-router";

import "./app.css";
import { Button, QueryProvider, ROUTE, Toaster } from "./shared";
import { ClientLayoutBody } from "./widgets";
import { Pre } from "./shared/ui/Pre";
import { Code } from "./shared/ui/Code";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryProvider>
      <Outlet />
      <ClientLayoutBody />
      <Toaster />
    </QueryProvider>
  );
}

export function ErrorBoundary({ error }: any) {
  let message = "Error!";
  let details = "서버와 연결할 수 없습니다 잠시 후 다시 시도해주세요";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error!";
    details =
      error.status === 404 ? "요청하신 페이지를 찾을 수 없습니다" : details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    message = "Error!";
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-primary text-center text-9xl font-bold">
          {message}
        </h1>
        <p className="text-2xl font-thin">{details}</p>
        <Link to={ROUTE.HOME}>
          <Button>홈 화면으로 돌아가기</Button>
        </Link>
      </div>
      {stack && (
        <Pre>
          <Code>{stack}</Code>
        </Pre>
      )}
    </main>
  );
}
