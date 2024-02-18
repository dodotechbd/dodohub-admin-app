import { Dialog, DialogContent, DialogTrigger } from "@components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@components/ui/drawer";
import { useMediaQuery } from "@hooks";
import { cn } from "@lib/utils";
import { DialogContentProps } from "@radix-ui/react-dialog";
import React from "react";
type Props = {
  children: React.ReactNode;
  menu: React.ReactNode;
  contentProps?: DialogContentProps;
  open: boolean;
  onChange: (open: boolean) => void;
  widthClass?: string;
  drawer?: boolean;
};
export const Modal = ({
  menu,
  children,
  contentProps,
  open,
  onChange,
  widthClass = "w-1/2",
  drawer,
}: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop && !drawer) {
    return (
      <Dialog open={open} onOpenChange={onChange}>
        <DialogTrigger asChild>
          <div>{menu}</div>
        </DialogTrigger>
        <DialogContent {...contentProps}>{children}</DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer
      open={open}
      onOpenChange={onChange}
      direction={isDesktop ? "right" : "bottom"}
    >
      <DrawerTrigger asChild>
        <div>{menu}</div>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/10 backdrop-blur-[1px]" />
        <DrawerContent
          className={cn(
            isDesktop
              ? "bg-white rounded-t-none rounded-l-2xl h-full fixed right-0 left-auto " +
                  widthClass
              : ""
          )}
        >
          {!isDesktop && (
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
          )}
          <div>{children}</div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};
