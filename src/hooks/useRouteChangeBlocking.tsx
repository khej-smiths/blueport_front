"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

/** 기록용으로만 남긴 코드
 *
 * 페이지 이탈, 뒤로가기, 새로고침 방지용 코드
 *
 * Next.js 14 버전에서 popstate 이슈가 있어 사용할 수 없으나
 *
 * 추후 React로 구현 시 참고할만한 코드라 남겨둠 실제로 사용하지는 않고있는 코드
 */
export default function useRouteChangeBlocking(doc: string) {
  const [isFirstClicked, setIsFirstClicked] = useState(false);
  const router = useRouter();

  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (doc !== "") {
        e.preventDefault();
        e.returnValue = "";
      }
    },
    [doc]
  );

  const handlePopState = useCallback(
    (e: PopStateEvent) => {
      if (doc !== "") {
        e.preventDefault();
        window.history.pushState(null, "", window.location.href);
      } else {
        router.back();
      }
    },
    [doc, router]
  );

  // strict 모드일 경우, 두번 로드되어서 처음 로드되었을 때에만 등록한다.
  useEffect(() => {
    if (!isFirstClicked) {
      setIsFirstClicked(true);
      // history에 현재 페이지 등록
      history.pushState(null, "", location.href);
    }
  }, [isFirstClicked]);

  useEffect(() => {
    const originalPush = router.push;
    const newPush = (href: string, options?: NavigateOptions): void => {
      if (doc !== "") {
        originalPush(href, options);
        return;
      }
    };
    router.push = newPush;

    return () => {
      router.push = originalPush;
    };
  }, [doc, router]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleBeforeUnload, handlePopState]);
}
