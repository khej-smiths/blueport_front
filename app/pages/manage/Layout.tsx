import { ROUTE, useAuthStore, useResponsive } from "@/shared";
import { LNB, ManageGNB } from "@/widgets";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function ManageLayout() {
  const { isMobile } = useResponsive();
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTE.LOGIN);
    }
  }, [accessToken, navigate]);

  return (
    <div className="relative flex flex-col">
      <ManageGNB />
      <div className="flex min-h-dvh bg-gray-100">
        {!isMobile && <LNB />}
        <Outlet />
      </div>
    </div>
  );
}
