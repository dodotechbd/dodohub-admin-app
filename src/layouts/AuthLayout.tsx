import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
