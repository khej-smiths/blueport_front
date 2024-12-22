import { ReactNode } from "react";
import Image from "next/image";
import Office from "@/assets/images/office.jpg";

export default function LoginContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-row">
      <div className="w-1/2 flex flex-col justify-between p-8">{children}</div>
      <Image
        src={Office}
        alt="login-image"
        className="w-1/2 object-cover"
        priority
      />
    </div>
  );
}
