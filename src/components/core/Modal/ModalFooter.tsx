import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: Props) => {
  return <div className="pt-4 md:pt-2 flex gap-3 justify-end">{children}</div>;
};