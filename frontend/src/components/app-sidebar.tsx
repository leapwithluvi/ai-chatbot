"use client";

import * as React from "react";
import { 
  Search, 
  Terminal, 
  History, 
  BookOpen, 
  Shield, 
  Cpu, 
  Plus
} from "lucide-react";

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
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const data = {
  user: {
    name: "Luvi Aprilyansyah Gabriel",
    email: "luvi@nexus.system",
    avatar: "/Nhi Nguyen (@almira_2399) on Threads.jpeg",
  },
  system: [
    {
      title: "New Session",
      url: "/",
      icon: Plus,
    },
    {
      title: "Intelligence Overview",
      url: "/overview",
      icon: BookOpen,
    },
    {
      title: "System Infrastructure",
      url: "/about",
      icon: Shield,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const context = useAppContext();
  const user = context?.user;
  const chats = context?.chats ?? [];
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
    <Sidebar variant="inset" className="border-r border-border bg-background" {...props}>
      <SidebarHeader className="border-b border-border py-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center bg-foreground text-background">
                  <Terminal size={18} strokeWidth={3} />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-black tracking-tighter text-lg uppercase italic">Nexus AI</span>
                  <span className="truncate text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Protocol v4.01</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-0 py-4">
        <SidebarGroup>
          <SidebarMenu>
            {data.system.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="rounded-none hover:bg-muted font-bold text-xs uppercase tracking-widest px-4 py-6">
                  <Link href={item.url}>
                    <item.icon size={16} />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="border-t border-border mt-4 pt-6">
          <SidebarGroupContent>
            <div className="relative px-2">
              <Search className="absolute left-4 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="PROBE ARCHIVES..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 bg-muted/30 border-none rounded-none text-[10px] font-bold tracking-[0.2em] focus-visible:ring-1 focus-visible:ring-foreground"
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="px-2 pb-20">
            {search ? (
            <NavChats chats={searchResults} title="Search Results" />
            ) : (
            <>
                <SidebarGroup className="pb-2">
                    <SidebarGroupLabel className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                        <History size={12} /> SESSION ARCHIVES
                    </SidebarGroupLabel>
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
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4 bg-muted/10">
        <div className="mb-4 px-2">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">System Capacity</span>
                <span className="text-[10px] font-mono text-foreground opacity-50">84%</span>
            </div>
            <div className="h-1 w-full bg-border">
                <div className="h-full bg-foreground w-[84%]" />
            </div>
        </div>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="rounded-none hover:bg-muted border border-border bg-background mb-4">
              <Link href="/credits">
                <div className="flex aspect-square size-8 items-center justify-center bg-muted">
                  <Cpu size={16} className="text-foreground" />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-[10px] font-black uppercase tracking-widest">Compute Credits</span>
                  <span className="truncate font-mono text-xs font-bold">{user?.credits ?? 0} Unit</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup className="p-0">
             <NavUser user={data.user} />
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
