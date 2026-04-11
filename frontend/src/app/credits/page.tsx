"use client";

import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";
import { Cpu, Zap, Activity, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function ResourceCreditsPage() {
  const context = useAppContext();
  const user = context?.user;

  const usageHistory = [
    { id: "TX-9281", type: "Inference", model: "Gemma 4.0", amount: "-120 Units", time: "2026.04.11 12:45" },
    { id: "TX-9275", type: "Training", model: "Core Calibration", amount: "-500 Units", time: "2026.04.11 09:12" },
    { id: "TX-9260", type: "Inference", model: "Gemma 4.0", amount: "-45 Units", time: "2026.04.10 22:30" },
    { id: "SYS-001", type: "Daily Grant", model: "System", amount: "+1000 Units", time: "2026.04.10 00:00" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background font-sans">
      <Navbar />
      
      <main className="mono-container pt-40 pb-20">
        <div className="flex flex-col mb-20 md:mb-32 border-l-4 border-foreground pl-12 py-4">
            <span className="label-mono mb-8 block font-black">Resource Allocation Monitor</span>
            <h1 className="text-huge mb-12 lowercase">Credits.</h1>
            <p className="text-xl font-medium leading-relaxed italic max-w-2xl text-muted-foreground">
                Monitoring real-time computational expenditure and system unit balance for the Nexus Protocol.
            </p>
        </div>

        {/* Balance Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-8 bg-foreground text-background p-8 md:p-16 flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Current Available Balance</span>
                        <div className="flex items-baseline gap-4">
                            <span className="text-7xl md:text-9xl font-black italic tracking-tighter">{user?.credits ?? 0}</span>
                            <span className="text-xl md:text-2xl font-bold uppercase tracking-widest italic opacity-50">Units</span>
                        </div>
                    </div>
                    <Cpu size={40} strokeWidth={2.5} className="opacity-20 hidden md:block" />
                </div>
                
                <div className="flex flex-col gap-6 pt-12 border-t border-background/10">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span>Daily Refresh Rate</span>
                        <span>+1,000 Units / 24h</span>
                    </div>
                    <div className="h-1.5 w-full bg-background/10 overflow-hidden">
                        <div className="h-full bg-background w-[65%] animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 gap-8">
                <div className="bg-muted p-10 flex flex-col justify-center border border-border">
                    <span className="label-mono mb-4 block">Intelligence Tier</span>
                    <span className="text-3xl font-bold tracking-tighter uppercase italic">Alpha Protocol</span>
                </div>
                <div className="bg-muted p-10 flex flex-col justify-center border border-border">
                    <span className="label-mono mb-4 block">Assigned Core</span>
                    <span className="text-3xl font-bold tracking-tighter uppercase italic">Gemma 4.0 Flash</span>
                </div>
            </div>
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
            {[
                { label: "Uptime", value: "99.998%", icon: <Activity size={16} /> },
                { label: "Sync Latency", value: "14ms", icon: <Zap size={16} /> },
                { label: "Protocol", value: "SECURE_v4", icon: <ShieldCheck size={16} /> }
            ].map((metric) => (
                <div key={metric.label} className="flex flex-col border-b-2 border-border pb-6">
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                        {metric.icon}
                        <span className="text-[10px] font-black uppercase tracking-widest">{metric.label}</span>
                    </div>
                    <span className="text-4xl font-black tracking-tighter">{metric.value}</span>
                </div>
            ))}
        </div>

        {/* Usage History */}
        <div className="space-y-12">
            <h2 className="text-xs uppercase font-black tracking-[0.4em] border-b border-border pb-4 w-full">Computation Log</h2>
            <div className="grid grid-cols-1 gap-[1px] bg-border border border-border">
                {usageHistory.map((log) => (
                    <div key={log.id} className="grid grid-cols-2 md:grid-cols-5 items-center p-8 bg-background hover:bg-muted/30 transition-all gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-muted-foreground">[{log.id}]</span>
                            <span className="text-xs font-bold uppercase tracking-widest">{log.type}</span>
                        </div>
                        <span className="text-xs font-black italic opacity-50 hidden md:block">{log.model}</span>
                        <span className={`text-sm font-black italic text-right md:text-left ${log.amount.startsWith("-") ? "text-foreground" : "text-blue-500"}`}>
                            {log.amount}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right hidden md:block">{log.time}</span>
                        <div className="flex justify-end pr-4">
                            <ArrowUpRight size={14} className="opacity-20" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>

      <footer className="py-20 border-t border-border bg-muted/30">
        <div className="mono-container flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic">
            <span>Nexus AI Compute Node</span>
            <div className="flex gap-12">
                <span className="cursor-pointer hover:text-foreground">Terms</span>
                <span className="cursor-pointer hover:text-foreground">Policy</span>
            </div>
            <span>Auth: Verified</span>
        </div>
      </footer>
    </div>
  );
}
