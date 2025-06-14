import { ReactNode } from "react";

import Office from "../assets/office.jpg";

export function LoginContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-row">
      <div className="flex w-1/2 flex-col justify-between p-8">{children}</div>
      <img
        src={Office}
        alt="login-image"
        className="max-h-dvh w-1/2 object-cover"
      />
    </div>
  );
}
