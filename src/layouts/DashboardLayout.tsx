"use client";
import {
  BarChartBig,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MessagesSquare,
  Package,
  Settings,
  Star,
  Users,
  Wallet,
  Warehouse,
} from "lucide-react";
import * as React from "react";

import { UserMenu } from "@components/dashboard";
import { ILink, Nav } from "@components/dashboard/nav";
import { Icons } from "@components/theme";
import { Button } from "@components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@components/ui/drawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@components/ui/resizable";
import { Separator } from "@components/ui/separator";
import { TooltipProvider } from "@components/ui/tooltip";
import { useMediaQuery } from "@hooks";
import { cn } from "@lib/utils";
import { useRouter } from "next/router";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { route } = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const links: ILink[] = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      icon: Warehouse,
    },
    {
      title: "Orders",
      icon: Package,
    },
    {
      title: "Customers",
      icon: Users,
    },
    {
      title: "Analytics",
      icon: BarChartBig,
    },
    {
      title: "Rviews",
      icon: Star,
    },
    {
      title: "Transactions",
      icon: Wallet,
    },
  ];

  const getTitle = () =>
    links.find((link) => `/${link.title.toLowerCase()}` === route)?.title ||
    "Not Found";

  const SideBar = () => {
    return (
      <>
        <div
          className={cn(
            "flex h-[52px] items-center justify-center text-lg font-medium uppercase",
            isCollapsed ? "h-[52px]" : "px-2"
          )}
        >
          <Icons.logo type="white" />
          {!isCollapsed && "DodoHub Admin"}
        </div>
        <Separator />
        <Nav isCollapsed={isCollapsed} links={links} />
        <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Support/Helpdesk",
              icon: HelpCircle,
            },
            {
              title: "Feedback",
              icon: MessagesSquare,
            },
            {
              title: "Settings",
              icon: Settings,
            },
          ]}
        />
      </>
    );
  };

  const MobileDrawer = () => {
    return (
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button size="icon" variant="secondary" className="gap-1">
            <Menu size={16} strokeWidth={3} />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/20" />
          <DrawerContent className="bg-white rounded-t-none flex flex-col h-full w-64 mt-24 fixed bottom-0 left-0">
            <SideBar />
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    );
  };

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          if (sizes[0] < 10) setIsCollapsed(true);
          else setIsCollapsed(false);
        }}
        className="min-h-screen items-stretch"
      >
        {isDesktop && (
          <ResizablePanel
            defaultSize={20}
            collapsible={true}
            minSize={5}
            maxSize={20}
            collapsedSize={5}
            onCollapse={() => setIsCollapsed(true)}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <SideBar />
          </ResizablePanel>
        )}
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex justify-between items-center px-4 py-2">
            {!isDesktop && <MobileDrawer />}
            <h1 className="text-xl font-bold">{getTitle()}</h1>
            <UserMenu />
          </div>
          <Separator />
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
