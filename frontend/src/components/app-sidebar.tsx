"use client";

import * as React from "react";
import { BookOpen, Bot, SquarePen } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Luvi Aprilyansyah Gabriel",
    email: "luviaprilyansyahgabriel@example.com",
    avatar: "../../public/Nhi Nguyen (@almira_2399) on Threads.jpeg",
  },
  navMain: [
    {
      title: "New Chat",
      url: "#",
      icon: SquarePen,
      isActive: true,
    },
    {
      title: "Overview",
      url: "/overview",
      icon: BookOpen,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Gemma Docs",
          url: "#",
        },
        {
          title: "Gemma 2B (Ollama)",
          url: "#",
        },
      ],
    },
  ],
  chats: [
    {
      name: "Design Engineering",
      url: "#",
      // icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      // icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      // icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src="../../public/gemma-color.png" alt="Logo Gemma 2b" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Gemma 2B</span>
                  <span className="truncate text-xs">Ollama</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects chats={data.chats} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
