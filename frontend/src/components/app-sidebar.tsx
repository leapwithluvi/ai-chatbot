"use client";

import * as React from "react";
import { BookOpen, Bot, Image, Search, Sparkles, SquarePen } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavChats } from "@/components/nav-chats";
import { NavUser } from "@/components/nav-user";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAppContext } from "@/pages/AppContext";

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
      title: "Images",
      url: "/images",
      icon: Image,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const context = useAppContext()
  const user = context?.user
  const chats = context?.chats ?? []
  const [search, setSearch] = React.useState("");

  const groupedChats = chats.reduce((acc, chat) => {
    const date = new Date(chat.updatedAt);
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    if (!acc[yearMonth]) {
      acc[yearMonth] = [];
    }
    acc[yearMonth].push({ name: chat.name, url: "#" });
    return acc;
  }, {} as Record<string, { name: string; url: string }[]>);

  const sortedMonthKeys = Object.keys(groupedChats).sort((a, b) => b.localeCompare(a));

  const searchResults = chats
    .filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()))
    .map((chat) => ({ name: chat.name, url: `#` }));

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
                  <span className="truncate font-medium">Nexus AI</span>
                  <span className="truncate text-xs">Gemini 3 Flash</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search chats..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {search ? (
          <NavChats chats={searchResults} title="Search Results" />
        ) : (
          <>
            <SidebarGroup className="pb-0">
               <SidebarGroupLabel className="text-foreground font-medium">Your Chats</SidebarGroupLabel>
            </SidebarGroup>
            {sortedMonthKeys.map((month) => (
              <NavChats 
                key={month} 
                chats={groupedChats[month]} 
                title={month} 
              />
            ))}
          </>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="group/credits">
              <a href="/credits">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-4 text-foreground group-hover/credits:text-primary transition-colors" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Nexus AI Credits</span>
                  <span className="truncate text-xs text-muted-foreground">{user?.credits} credits remaining</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
