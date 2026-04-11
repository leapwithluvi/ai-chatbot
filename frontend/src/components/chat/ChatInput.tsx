"use client";

import { Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ChatInput = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-6 pointer-events-none z-50">
            <div className="max-w-3xl mx-auto flex flex-col gap-0 pointer-events-auto bg-background/80 backdrop-blur-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                {/* Meta Header */}
                <div className="flex items-center gap-4 px-4 py-1.5 border-b border-border bg-muted/30">
                     <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Encrypted_Channel</span>
                     </div>
                     <div className="h-2 w-[1px] bg-border"></div>
                     <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/50 italic">Storage: Persistent</span>
                     <div className="flex items-center gap-2 ml-auto">
                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Gemma_4.0_Core</span>
                     </div>
                </div>

                <div className="relative flex flex-col p-4 bg-background/50">
                    <textarea 
                        className="w-full h-12 md:h-20 bg-transparent border-none p-0 text-sm font-medium focus:outline-none transition-all resize-none placeholder:text-muted-foreground/30 placeholder:uppercase placeholder:font-black placeholder:tracking-[0.2em] placeholder:text-[9px]"
                        placeholder="ENTER COMMAND TO EXECUTE..."
                        rows={1}
                    />
                    
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <span className="text-[7px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Session_Latency</span>
                                <span className="text-[9px] font-mono font-bold">1.24ms</span>
                            </div>
                        </div>

                        <Button className="h-8 px-6 bg-foreground text-background font-black uppercase text-[9px] tracking-widest hover:opacity-90 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-[1px] active:shadow-none rounded-none">
                            Execute <Send size={12} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
            
            <p className="max-w-3xl mx-auto mt-3 text-[7px] font-black uppercase tracking-[0.4em] text-center text-muted-foreground/30">
                Nexus Systems Interface // Secure Environment v4.0.1
            </p>
        </div>
    );
};
