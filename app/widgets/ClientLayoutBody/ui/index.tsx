import { Plus } from "lucide-react";

import { EditorDemoDialog } from "@/entities";
import { FloatingButton } from "@/features";
import {
  AlertDialog,
  AlertDialogTrigger,
  ROUTE,
  useAuthStore,
  useResponsive,
} from "@/shared";

import { Footer } from "../../Footer";
import { useLocation, useNavigate } from "react-router";

export function ClientLayoutBody() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const disableButtonPageList = ["/editor", "/login"];

  const isEditor = location.pathname.includes("/editor");
  const isDisableButtonPage = disableButtonPageList.includes(location.pathname);
  const isMobileLogin = location.pathname.includes("/login") && isMobile;
  const isMobileManage = location.pathname.includes("/manage") && isMobile;

  const { accessToken } = useAuthStore();

  return (
    <>
      {!isEditor && !isMobileLogin && <Footer />}
      {!isDisableButtonPage && (
        <>
          {accessToken ? (
            <FloatingButton
              position={`bottom-10 right-10 ${isMobileManage ? "bottom-16" : ""}`}
              icon={<Plus className="h-6 w-6" />}
              onClick={() => {
                navigate(ROUTE.EDITOR);
              }}
            />
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                {/* 내가 직접 만든 트리거를 사용할 때에는 반드시 asChild를 사용해야 한다 */}
                <FloatingButton
                  position="bottom-10 right-10"
                  icon={<Plus className="h-6 w-6" />}
                />
              </AlertDialogTrigger>
              <EditorDemoDialog />
            </AlertDialog>
          )}
        </>
      )}
    </>
  );
}
