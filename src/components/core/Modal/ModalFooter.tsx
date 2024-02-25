import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: Props) => {
  return <div className="p-4 pb-2  flex gap-3 justify-end">{children}</div>;
};
