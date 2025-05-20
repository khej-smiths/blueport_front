import { TypedDocumentString } from "./graphql";

function getAccessToken() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
}

function setAccessToken(token: string) {
  if (typeof window !== "undefined") localStorage.setItem("token", token);
}

async function refreshAccessToken() {
  const response = await fetch("/api/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Refresh token expired");

  const data = await response.json();

  setAccessToken(data.token);

  return data.token;
}

export async function instance<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  let token = getAccessToken();

  let response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/graphql-response+json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    credentials: "include",
  });

  if (response.status === 401) {
    try {
      token = await refreshAccessToken();
      response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/graphql-response+json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({ query, variables }),
        credentials: "include",
      });
    } catch (error) {
      console.error(error);

      if (typeof window !== "undefined") localStorage.removeItem("token");

      throw new Error("로그인 세션이 만료되었습니다. 다시 로그인 해주세요.");
    }
  }

  if (!response.ok) {
    throw new Error("응답을 받을 수 없습니다. 나중에 다시 시도해 주세요");
  }

  return response.json() as TResult;
}
