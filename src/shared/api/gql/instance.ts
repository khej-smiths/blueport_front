import { ClientError, GraphQLClient } from "graphql-request";


function getAccessToken() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
}

export const graphql = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_ENDPOINT ?? "", {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    }
  }
);

export async function instance<TResult, TVariables extends object = object>(
  query:  any,
  variables?: TVariables
): Promise<TResult> {
  try {
    const queryString = typeof query === "object" && "value" in query ? query.value : query;
    return await graphql.request(queryString, variables ?? {});
  } catch (error: any) {
    if (error instanceof ClientError) {
      throw error.response
    }
    throw {
      type: "SERVER_ERROR",
      message: "요청을 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요",
      error
    }
  }
}
