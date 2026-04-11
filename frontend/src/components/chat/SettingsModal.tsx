"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Command } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-background border border-border rounded-none p-0 gap-0 overflow-hidden outline-none">
        <DialogHeader className="p-8 border-b border-border bg-muted/30">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center">
                <Command size={20} />
             </div>
             <div>
                <DialogTitle className="text-2xl font-black uppercase tracking-tighter italic">Terminal Settings</DialogTitle>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">System Protocol Calibration v4.01</p>
             </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col md:flex-row h-[550px]">
            {/* Sidebar Tabs */}
            <div className="w-full md:w-60 border-r border-border bg-muted/10 p-2 space-y-1">
                <button className="w-full text-left p-4 bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer flex justify-between items-center group">
                    Developer_ID
                    <div className="w-1 h-1 bg-background group-hover:scale-150 transition-transform"></div>
                </button>
                <button className="w-full text-left p-4 hover:bg-muted text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer transition-colors flex justify-between items-center group">
                    System_Stack
                    <div className="w-1 h-1 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="w-full text-left p-4 hover:bg-muted text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer transition-colors flex justify-between items-center group">
                    Render_Engine
                    <div className="w-1 h-1 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="w-full text-left p-4 hover:bg-muted text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer transition-colors flex justify-between items-center group">
                    Neural_Link
                    <div className="w-1 h-1 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-10">
                {/* Section: Developer ID */}
                <section className="space-y-8">
                    <div className="flex justify-between items-end border-b border-border pb-2">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Architect Credentials</h3>
                        <span className="text-[9px] font-mono text-muted-foreground/50">LEVEL_10_ROOT</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-32 h-40 bg-muted border border-border relative overflow-hidden flex-shrink-0">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center grayscale opacity-50 sepia"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                            <div className="absolute bottom-2 left-2 right-2 flex flex-col items-center">
                                <span className="text-[8px] font-black uppercase tracking-tighter text-foreground bg-background/80 px-1">L.A. GABRIEL</span>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="space-y-1">
                                <h4 className="text-xl font-black uppercase tracking-tighter italic">Luvi Aprilyansyah Gabriel</h4>
                                <p className="text-[10px] text-emerald-500 font-mono font-bold uppercase tracking-widest">Fullstack Engineer // AI Strategist</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[8px] font-black text-muted-foreground uppercase tracking-widest block">Main_Specialization</span>
                                    <span className="text-[10px] font-bold uppercase">Modern Neural UI</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[8px] font-black text-muted-foreground uppercase tracking-widest block">Active_Location</span>
                                    <span className="text-[10px] font-bold uppercase">SEA_REG_NODE_01</span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" className="h-8 rounded-none border-border text-[9px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">Portfolio</Button>
                                <Button variant="outline" className="h-8 rounded-none border-border text-[9px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">GitHub</Button>
                                <Button variant="outline" className="h-8 rounded-none border-border text-[9px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">LinkedIn</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: System Stack */}
                <section className="space-y-6">
                    <div className="flex justify-between items-end border-b border-border pb-2">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Technical Infrastructure</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                         {[
                            { l: "Framework", v: "Next.js 15 (App Router)" },
                            { l: "Runtime", v: "React 19 (Experimental)" },
                            { l: "Styling", v: "Tailwind CSS v4.0" },
                            { l: "Type_Safety", v: "TypeScript 5.x" },
                            { l: "Interface", v: "Radix UI + Lucide" },
                            { l: "AI_Engine", v: "OpenAI / Anthropic SDK" }
                         ].map((item, i) => (
                            <div key={i} className="p-3 border border-border bg-muted/5 flex flex-col gap-1">
                                <span className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">{item.l}</span>
                                <span className="text-[10px] font-bold uppercase tracking-tight">{item.v}</span>
                            </div>
                         ))}
                    </div>
                </section>

                {/* Section: Render Engine */}
                <section className="space-y-6">
                    <div className="flex justify-between items-end border-b border-border pb-2">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Interface Engine Calibration</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-border bg-muted/10 group hover:border-muted-foreground/50 transition-colors">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest">CRT_Raster_Simulation</span>
                                <span className="text-[9px] text-muted-foreground uppercase font-medium tracking-[0.05em] mt-1 italic">Enable analog scanlines & chromatic aberration</span>
                            </div>
                            <Switch defaultChecked className="data-[state=checked]:bg-foreground rounded-none" />
                        </div>

                        <div className="space-y-4">
                             <div className="flex justify-between items-center">
                                <label className="text-[10px] font-black uppercase tracking-widest">Chromatic_Theme_Link</label>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <button className="p-3 border border-foreground bg-foreground text-background text-[9px] font-black uppercase tracking-widest">Monochrome</button>
                                <button className="p-3 border border-border hover:border-foreground text-muted-foreground hover:text-foreground text-[9px] font-black uppercase tracking-widest">Amber_P3</button>
                                <button className="p-3 border border-border hover:border-foreground text-muted-foreground hover:text-foreground text-[9px] font-black uppercase tracking-widest">Matrix_G7</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div className="p-6 border-t border-border bg-muted/30 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    Nexus_v4.0.1_Stable
                </span>
            </div>
            <Button onClick={() => onOpenChange(false)} className="h-10 px-8 bg-foreground text-background font-black uppercase text-[10px] tracking-widest hover:opacity-90 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-[2px] active:shadow-none transition-all">
                Exit_Console
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
