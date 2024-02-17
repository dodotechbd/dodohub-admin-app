import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/ui/drawer";
import { useMediaQuery } from "@hooks";
import { DialogContentProps } from "@radix-ui/react-dialog";
import React from "react";
type Props = {
  children: React.ReactNode;
  title: string;
  menu: React.ReactNode;
  contentProps?: DialogContentProps;
  open: boolean;
  onChange: (open: boolean) => void;
};
export const Modal = ({
  menu,
  title,
  children,
  contentProps,
  open,
  onChange,
}: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onChange}>
        <DialogTrigger asChild>
          <div>{menu}</div>
        </DialogTrigger>
        <DialogContent {...contentProps}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={onChange}>
      <DrawerTrigger asChild>
        <div>{menu}</div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
