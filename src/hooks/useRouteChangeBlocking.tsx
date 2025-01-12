import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function useRouteChangeBlocking() {
  const router = useRouter();
  const isInitialMount = useRef(false);
  const handleBeforeUnload = useCallback((e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  }, []);

  const handlePopState = useCallback(() => {
    window.history.pushState(null, "", window.location.href);
  }, []);

  useEffect(() => {
    if (!isInitialMount.current) {
      window.history.pushState(null, "", window.location.href);
      isInitialMount.current = true;
    }
  }, []);

  useEffect(() => {
    const originalPush = router.push;
    const newPush = (
      href: string,
      options?: NavigateOptions | undefined
    ): void => {
      originalPush(href, options);
      return;
    };
    router.push = newPush;

    return () => {
      router.push = originalPush;
    };
  }, [router]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleBeforeUnload, handlePopState]);
}
