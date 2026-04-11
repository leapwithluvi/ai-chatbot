"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { Cpu, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ChatPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <ChatPageContent />
    </SidebarProvider>
  );
}

function ChatPageContent() {
  const { openMobile } = useSidebar();
  
  return (
    <>
      <AppSidebar />
      <SidebarInset className="bg-background flex flex-col h-screen overflow-hidden">
        {/* Technical Header */}
        <header className="flex h-16 shrink-0 items-center justify-between px-8 border-b border-border bg-background z-10">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
            <Link 
                href="/" 
                className="flex items-center justify-center w-8 h-8 rounded-none border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                title="New Session"
            >
                <Plus size={16} />
            </Link>
            <div className="hidden md:flex items-center gap-6 border-l border-border pl-8">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Session Status</span>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-xs font-bold uppercase tracking-tighter italic">ACTIVE_ENCRYPTED</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Compute Core</span>
                    <div className="flex items-center gap-2">
                        <Cpu size={12} className="text-foreground" />
                        <span className="text-xs font-bold uppercase tracking-tighter">GEMMA_4.0_FLASH</span>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
             <div className="hidden lg:flex flex-col text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Latency</span>
                <span className="text-xs font-mono font-bold">14ms</span>
             </div>
             <ModeToggle />
          </div>
        </header>

        {/* Message Feed Container */}
        <div className={cn(
            "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
            openMobile && "overflow-hidden"
        )}>
          <div className="flex flex-col">
            {/* New Responsive Empty State */}
            <div className="flex flex-col items-center justify-center p-10 md:p-20 opacity-20 pointer-events-none select-none min-h-[60vh]">
                <div className="text-huge grayscale mb-8 md:mb-12 font-black leading-none">NX</div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-center">
                    <span className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-foreground rounded-full hidden md:block"></div>
                        Authentication
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-foreground rounded-full hidden md:block"></div>
                        Processing
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-foreground rounded-full hidden md:block"></div>
                        Validation
                    </span>
                </div>
            </div>
          </div>
        </div>

        {/* Command Center */}
        <ChatInput />
      </SidebarInset>
    </>
  );
}
