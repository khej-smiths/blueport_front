import { ClientError, GraphQLClient } from "graphql-request";

import { useAuthStore } from "@/shared/stores/auth";

export const graphql = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_ENDPOINT ?? "", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  }
);

export async function instance<TResult, TVariables extends object = object>(
  query:  any,
  variables?: TVariables
): Promise<TResult> {
  const { accessToken } = useAuthStore.getState();

  if (accessToken) {
    graphql.setHeader("Authorization", `Bearer ${accessToken}`);
  }

  try {
    const queryString = typeof query === "object" && "value" in query ? query.value : query;
    return await graphql.request(queryString, variables ?? {});
  } catch (error: any) {
    if (error instanceof ClientError) {

      if (error.response.status === 401) {
        // TODO: refresh token으로 access token 토큰 재발급
      }

      throw error.response
    }
    
    throw {
      type: "SERVER_ERROR",
      message: "요청을 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요",
      error
    }
  }
}
