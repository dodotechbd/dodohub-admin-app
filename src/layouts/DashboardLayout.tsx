"use client";
import {
  BarChartBig,
  HelpCircle,
  LayoutDashboard,
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
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@components/ui/resizable";
import { Separator } from "@components/ui/separator";
import { TooltipProvider } from "@components/ui/tooltip";
import { cn } from "@lib/utils";
import { useRouter } from "next/router";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { route } = useRouter();

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
        <ResizablePanel
          defaultSize={25}
          collapsible={true}
          minSize={5}
          maxSize={25}
          collapsedSize={5}
          onCollapse={() => setIsCollapsed(true)}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center text-lg font-medium uppercase",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            {isCollapsed ? "D" : "DodoHub"}
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
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="flex justify-between items-center px-4 py-2">
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
