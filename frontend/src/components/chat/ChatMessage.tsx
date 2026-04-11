"use client";

import { Terminal, User, Cpu } from "lucide-react";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
    timestamp: string;
}

export const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
    const isAssistant = role === "assistant";

    return (
        <div className={`group flex flex-col border-b border-border hover:bg-muted/30 transition-colors ${isAssistant ? "bg-muted/10" : "bg-transparent"}`}>
            <div className="flex items-start gap-4 p-8 max-w-5xl mx-auto w-full">
                <div className={`w-10 h-10 shrink-0 flex items-center justify-center border ${isAssistant ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-border"}`}>
                    {isAssistant ? <Cpu size={18} /> : <User size={18} />}
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                            {isAssistant ? "SYSTEM_CORE 4.0" : "OPERATOR_LOCAL"}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
                            {timestamp}
                        </span>
                    </div>
                    
                    <div className="text-sm leading-relaxed font-medium whitespace-pre-wrap selection:bg-foreground selection:text-background">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};
