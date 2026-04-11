"use client";

import Link from "next/link";
import {
  MoreHorizontal,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavChats({
  chats,
  title = "Chats",
}: {
  chats: {
    name: string;
    url: string;
  }[];
  title?: string;
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest opacity-50 px-2">{title}</SidebarGroupLabel>
      <SidebarMenu className="gap-0.5">
        {chats.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild className="rounded-none hover:bg-muted border-l-2 border-transparent hover:border-foreground py-5 transition-all">
              <Link href={item.url} className="text-xs font-semibold tracking-tight">
                <span className="truncate">{item.name}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover className="bg-transparent hover:bg-muted rounded-none">
                  <MoreHorizontal size={14} />
                  <span className="sr-only">Options</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-none border-border bg-background"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem className="rounded-none text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-destructive hover:text-destructive-foreground">
                  <Trash2 className="mr-2 h-3.5 w-3.5" />
                  <span>Purge Session</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
