import { ClientError, GraphQLClient } from "graphql-request";

import { useAuthStore } from "@/shared/stores/auth";
import { useNavigate } from "react-router";
import { ROUTE } from "../../constant/route";

export const graphql = new GraphQLClient(
  import.meta.env.VITE_PUBLIC_API_ENDPOINT ?? "",
  {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }
);

export async function instance<TResult, TVariables extends object = object>(
  query: any,
  variables?: TVariables
): Promise<TResult> {
  const { accessToken, logout } = useAuthStore.getState();
  const navigate = useNavigate();

  if (accessToken) {
    graphql.setHeader("Authorization", `Bearer ${accessToken}`);
  }

  try {
    const queryString =
      typeof query === "object" && "value" in query ? query.value : query;
    return await graphql.request(queryString, variables ?? {});
  } catch (error: any) {
    if (error instanceof ClientError) {
      if (
        error.response &&
        error.response.errors &&
        error.response.errors.length > 0
      ) {
        // 첫 번째 에러의 code 추출
        const code = error.response.errors[0].extensions?.code;
        
        console.log("에러 코드:", code);
        // code 값으로 분기 처리
        if (code && (code as string).includes("ERR_EXPIRED_TOKEN")) {
          // 토큰 만료 처리
          logout();
          navigate(ROUTE.LOGIN);
        }
      }
    }

    throw {
      type: "SERVER_ERROR",
      message:
        "요청을 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요",
      error,
    };
  }
}
