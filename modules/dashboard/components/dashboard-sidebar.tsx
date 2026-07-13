"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  Compass,
  FolderPlus,
  History,
  Home,
  LayoutDashboard,
  Lightbulb,
  type LucideIcon,
  Plus,
  Settings,
  Star,
  Terminal,
  Zap,
  Database,
  FlameIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

interface PlaygroundData {
  id: string;
  name: string;
  icon: string;
  starred: boolean;
}

const lucideIconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Lightbulb: Lightbulb,
  Database: Database,
  Compass: Compass,
  FlameIcon: FlameIcon,
  Terminal: Terminal,
  Code2: Code2,
};

const xpMenuButton = `
  font-[Tahoma,Verdana,sans-serif]
  rounded-[3px]
  text-[#333333] dark:text-[#c8c8c8]
  hover:bg-[#a9d4ff] dark:hover:bg-[#404040]
  hover:text-[#003399] dark:hover:text-[#e8e8e8]
  data-[active=true]:bg-[#3593ff] data-[active=true]:text-white
  dark:data-[active=true]:bg-[#4a4a4a] dark:data-[active=true]:text-[#e8e8e8]
  data-[active=true]:font-semibold
  data-[active=true]:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.25)]
`;

// Explicit row layout for icon + label, applied inside every Link.
// This does not rely on the primitive's own flex classes surviving —
// it guarantees the row layout regardless of any outside override.
const xpMenuRow = "flex items-center gap-2 w-full";

export function DashboardSidebar({
  initialPlaygroundData,
}: {
  initialPlaygroundData: PlaygroundData[];
}) {
  const pathname = usePathname();
  const [starredPlaygrounds, setStarredPlaygrounds] = useState(
    initialPlaygroundData.filter((p) => p.starred)
  );
  const [recentPlaygrounds, setRecentPlaygrounds] = useState(
    initialPlaygroundData
  );

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className={`
        border-2 border-t-[#3593ff] border-l-[#3593ff] border-r-[#00136c] border-b-[#00136c]
        dark:border-t-[#6e6e6e] dark:border-l-[#6e6e6e] dark:border-r-[#000000] dark:border-b-[#000000]
        [&_[data-sidebar=sidebar]]:bg-[#ece9d8] dark:[&_[data-sidebar=sidebar]]:bg-[#2b2b2b]
      `}
    >
      <SidebarHeader
        className={`
          bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
          dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
          border-b-2 border-b-[#00136c] dark:border-b-black
        `}
      >
        <div className="flex items-center gap-2 px-4 py-3 justify-center">
          <Image src={"/logo.svg"} alt="logo" height={44} width={44} />
        </div>
      </SidebarHeader>

      <SidebarContent className="font-[Tahoma,Verdana,sans-serif]">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="Home"
                className={xpMenuButton}
              >
                <Link href="/" className={xpMenuRow}>
                  <Home className="h-4 w-4 shrink-0" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
                className={xpMenuButton}
              >
                <Link href="/dashboard" className={xpMenuRow}>
                  <LayoutDashboard className="h-4 w-4 shrink-0" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#003399] dark:text-[#a9d4ff] font-bold">
            <Star className="h-4 w-4 mr-2" />
            Starred
          </SidebarGroupLabel>
          <SidebarGroupAction
            title="Add starred playground"
            className="text-[#003399] dark:text-[#a9d4ff] hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px]"
          >
            <Plus className="h-4 w-4" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredPlaygrounds.length === 0 &&
              recentPlaygrounds.length === 0 ? (
                <div className="text-center text-[#5c5c5c] dark:text-[#999999] py-4 w-full text-sm">
                  Create your playground
                </div>
              ) : (
                starredPlaygrounds.map((playground) => {
                  const IconComponent = lucideIconMap[playground.icon] || Code2;
                  return (
                    <SidebarMenuItem key={playground.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/playground/${playground.id}`}
                        tooltip={playground.name}
                        className={xpMenuButton}
                      >
                        <Link
                          href={`/playground/${playground.id}`}
                          className={xpMenuRow}
                        >
                          {IconComponent && (
                            <IconComponent className="h-4 w-4 shrink-0" />
                          )}
                          <span>{playground.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#003399] dark:text-[#a9d4ff] font-bold">
            <History className="h-4 w-4 mr-2" />
            Recent
          </SidebarGroupLabel>
          <SidebarGroupAction
            title="Create new playground"
            className="text-[#003399] dark:text-[#a9d4ff] hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px]"
          >
            <FolderPlus className="h-4 w-4" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredPlaygrounds.length === 0 && recentPlaygrounds.length === 0
                ? null
                : recentPlaygrounds.map((playground) => {
                    const IconComponent =
                      lucideIconMap[playground.icon] || Code2;
                    return (
                      <SidebarMenuItem key={playground.id}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === `playground/${playground.id}`}
                          tooltip={playground.name}
                          className={xpMenuButton}
                        >
                          <Link
                            href={`/playground/${playground.id}`}
                            className={xpMenuRow}
                          >
                            {IconComponent && (
                              <IconComponent className="h-4 w-4 shrink-0" />
                            )}
                            <span>{playground.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="View all"
                  className={xpMenuButton}
                >
                  <Link href="/playgrounds" className={xpMenuRow}>
                    <span className="text-sm">View all playgrounds</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t-2 border-t-[#716f64] dark:border-t-[#3a3a3a]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              className={xpMenuButton}
            >
              <Link href="/settings" className={xpMenuRow}>
                <Settings className="h-4 w-4 shrink-0" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
