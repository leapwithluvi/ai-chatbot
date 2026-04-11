"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { cn } from "@/lib/utils";

interface AuthDialogProps {
  children: React.ReactNode;
  defaultMode?: "login" | "register";
}

export function AuthDialog({ children, defaultMode = "login" }: AuthDialogProps) {
  const [mode, setMode] = useState<"login" | "register">(defaultMode);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn(
        "max-w-md p-8 rounded-none border-2 border-border bg-background shadow-[20px_20px_50px_rgba(0,0,0,0.3)]",
        "animate-in fade-in zoom-in-95 duration-300"
      )}>
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        <DialogDescription className="sr-only">
          Nexus System Access Protocol
        </DialogDescription>
        
        {mode === "login" ? (
          <LoginForm onSwitch={() => setMode("register")} />
        ) : (
          <RegisterForm onSwitch={() => setMode("login")} />
        )}

        <div className="absolute top-4 left-4 flex gap-2 pointer-events-none opacity-20">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse delay-75"></div>
            <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse delay-150"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
