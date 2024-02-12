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

import { Nav } from "@components/dashboard/nav";
import { Button } from "@components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@components/ui/resizable";
import { Separator } from "@components/ui/separator";
import { TooltipProvider } from "@components/ui/tooltip";
import { cn } from "@lib/utils";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

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
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Products",
                icon: Warehouse,
                variant: "ghost",
              },
              {
                title: "Orders",
                icon: Package,
                variant: "ghost",
              },
              {
                title: "Customers",
                icon: Users,
                variant: "ghost",
              },
              {
                title: "Analytics",
                icon: BarChartBig,
                variant: "ghost",
              },
              {
                title: "Rviews",
                icon: Star,
                variant: "ghost",
              },
              {
                title: "Transactions",
                icon: Wallet,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Support/Helpdesk",
                icon: HelpCircle,
                variant: "ghost",
              },
              {
                title: "Feedback",
                icon: MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Settings",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="flex justify-between items-center px-4 py-2">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <Button
              size="icon"
              style={{ borderRadius: "100%" }}
              variant="outline"
            >
              S
            </Button>
          </div>
          <Separator />
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
