import { useMediaQuery } from "react-responsive";

export function useResponsive() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return { isMobile };
}
