import { useCallback, useEffect, useRef } from "react";

import { DEFAULT_DEBOUNCE_WAIT } from "../constant/debounce";

interface DebounceOptions {
  wait?: number; // 디바운스 대기 시간 설정
  maxWait?: number; // 최대 대기 시간 설정
  leading?: boolean; // 첫 번째 호출 시 즉시 실행 여부
  trailing?: boolean; // 마지막 호출 시 실행 여부
}

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  options: DebounceOptions = {}
) {
  const {
    wait = DEFAULT_DEBOUNCE_WAIT,
    maxWait,
    leading = true,
    trailing = false,
  } = options;

  const timeoutRef = useRef<NodeJS.Timeout>(undefined);
  const maxTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const lastCallRef = useRef<number>(0);
  const lastArgsRef = useRef<any[]>(undefined);
  const isWaitingRef = useRef<boolean>(false);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
    }
  }, []);

  const executeCallback = useCallback(
    (...args: Parameters<T>) => {
      cleanup();
      lastCallRef.current = Date.now();
      callback(...args);
      isWaitingRef.current = false;
    },
    [callback, cleanup]
  );

  useEffect(() => {
    return () => {
      cleanup();
      isWaitingRef.current = false;
    };
  }, [cleanup]);

  const debounceFn = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      lastArgsRef.current = args;

      if (leading && !timeoutRef.current) {
        isWaitingRef.current = true;
        executeCallback(...args);

        if (!trailing) {
          timeoutRef.current = setTimeout(() => {
            isWaitingRef.current = false;
            timeoutRef.current = undefined;
          }, wait);
          return;
        }
      }

      cleanup();

      if (maxWait) {
        const sinceLastCall = now - lastCallRef.current;
        if (sinceLastCall >= maxWait) {
          executeCallback(...args);
          return;
        }

        maxTimeoutRef.current = setTimeout(() => {
          if (trailing && lastArgsRef.current) {
            executeCallback(...(lastArgsRef.current as Parameters<T>));
          }
        }, maxWait);
      }

      timeoutRef.current = setTimeout(() => {
        if (trailing && lastArgsRef.current) {
          executeCallback(...(lastArgsRef.current as Parameters<T>));
        }
        isWaitingRef.current = false;
        timeoutRef.current = undefined;
      }, wait);

      isWaitingRef.current = true;
    },
    [wait, maxWait, leading, trailing, executeCallback, cleanup]
  );

  const cancel = useCallback(() => {
    cleanup();
    lastArgsRef.current = undefined;
    isWaitingRef.current = false;
  }, [cleanup]);

  const flush = useCallback(() => {
    cleanup();
    if (lastArgsRef.current) {
      executeCallback(...(lastArgsRef.current as Parameters<T>));
    }
    isWaitingRef.current = false;
  }, [cleanup, executeCallback]);

  return {
    debounceFn,
    cancel,
    flush,
  };
}
