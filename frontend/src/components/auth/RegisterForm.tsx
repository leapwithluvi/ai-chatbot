"use client";

import { useState } from "react";
import { User, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({ onSwitch }: { onSwitch?: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulated Auth
  };

  return (
    <div className="space-y-8 py-4">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-black tracking-tighter uppercase italic">Create_Node</h2>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          Register New Operator Profile
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full_Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="LUVI APRILYANSYAH" 
              className="pl-10 h-10 border-border bg-muted/20 rounded-none focus-visible:ring-foreground font-medium text-xs placeholder:opacity-30"
              required 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Comm_Identifier (Email)</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              type="email" 
              placeholder="OPERATOR@NEXUS.SYSTEM" 
              className="pl-10 h-10 border-border bg-muted/20 rounded-none focus-visible:ring-foreground font-medium text-xs placeholder:opacity-30"
              required 
            />
          </div>
        </div>

        <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Access_Protocol_Key</Label>
            <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                    type="password" 
                    placeholder="MIN_8_CHARS" 
                    className="pl-10 h-10 border-border bg-muted/20 rounded-none focus-visible:ring-foreground font-mono text-xs"
                    required 
                />
            </div>
        </div>

        <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3 p-3 bg-muted/30 border border-border">
                <input type="checkbox" id="terms" className="mt-1 accent-foreground" required />
                <label htmlFor="terms" className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground leading-normal">
                    I acknowledge deployment protocols and system terms of service for autonomous intelligence operations.
                </label>
            </div>

            <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-12 bg-foreground text-background font-black uppercase tracking-[0.2em] rounded-none hover:opacity-90 transition-all group"
            >
                {loading ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <>Deploy_Profile <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                )}
            </Button>
        </div>
      </form>

      <p className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground border-t border-border pt-6">
        Existing Operator?{" "}
        <button onClick={onSwitch} className="text-foreground underline underline-offset-4 hover:opacity-50 transition-opacity">
          Authorized_Login
        </button>
      </p>
    </div>
  );
}
