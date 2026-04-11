"use client";

import { useState } from "react";
import { ChevronsUpDown, LogOut, Shield, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-muted bg-background border border-transparent data-[state=open]:border-border rounded-none"
            >
              <div className="flex h-8 w-8 items-center justify-center bg-muted border border-border">
                <User size={16} className="text-foreground" />
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-xs font-black uppercase tracking-wider">{user.name}</span>
                <span className="truncate text-[10px] font-bold text-muted-foreground uppercase">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-3 opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-none border-border bg-background"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-3 py-4 text-left border-b border-border bg-muted/30">
                <div className="flex h-10 w-10 items-center justify-center bg-foreground text-background">
                    <Shield size={20} />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                    <span className="truncate text-sm font-black uppercase tracking-tighter">{user.name}</span>
                    <span className="truncate text-[10px] font-bold text-muted-foreground uppercase">System Operator</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <div className="p-1">
                <DropdownMenuSeparator className="bg-border" />
                <DropdownMenuItem className="rounded-none text-[10px] font-black uppercase tracking-widest py-3 cursor-pointer text-destructive hover:bg-destructive hover:text-white">
                    <LogOut className="mr-2 h-3.5 w-3.5" />
                    Terminate Session
                </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
