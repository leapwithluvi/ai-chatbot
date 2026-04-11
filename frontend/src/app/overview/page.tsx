"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Hero from "@/components/overview/Hero";
import Features from "@/components/overview/Features";
import HowItWorks from "@/components/overview/HowItWorks";
import Contact from "@/components/overview/Contact";
import Pricing from "@/components/overview/Pricing";
import { 
    Gemma
} from "@lobehub/icons";

const techStack = [
    { name: "Next.js", slug: "nextdotjs", color: "888888" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    { name: "TypeScript", slug: "typescript", color: "3178C6" },
    { name: "NestJS", slug: "nestjs", color: "E0234E" },
    { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    { name: "Prisma", slug: "prisma", color: "2D3748" },
    { name: "Redis", slug: "redis", color: "DC382D" },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "Vercel", slug: "vercel", color: "888888" },
    { name: "Gamma 4.0", slug: "", color: "" },
];

export default function OverviewPage() {
  return (
    <div className="bg-background text-foreground selection:bg-foreground selection:text-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Tech Stack Marquee (High-Integrity Infrastructure) */}
        <section className="py-20 border-y border-border bg-muted/20 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, i) => (
                    <div key={i} className="flex items-center gap-4 mx-12 opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0 group">
                        {tech.slug ? (
                            <img 
                                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} 
                                alt={tech.name}
                                className="h-6 w-6 object-contain"
                            />
                        ) : (
                            <Gemma size={24} />
                        )}
                        <span className="text-xl font-black uppercase tracking-tighter italic">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>

        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      
      <footer className="py-24 border-t border-border bg-background">
        <div className="mono-container space-y-20">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="space-y-6 max-w-xl">
                    <div className="text-7xl font-black tracking-tighter italic">NEXUS</div>
                    <p className="text-[11px] uppercase tracking-[0.3em] font-black text-muted-foreground leading-relaxed max-w-sm">
                        High-Integrity Intelligence Infrastructure. <br />
                        Developed for autonomous cognitive operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-32 w-full lg:w-auto">
                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.5em] text-muted-foreground border-b border-border pb-2">System_Modules</div>
                        <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest hover:[&>li]:text-foreground transition-colors">
                            <li><Link href="/" className="hover:underline">Execute_Chat</Link></li>
                            <li><Link href="/overview" className="hover:underline">Documentation</Link></li>
                            <li><Link href="https://github.com" className="hover:underline">Source_Code</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.5em] text-muted-foreground border-b border-border pb-2">External_Nodes</div>
                        <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest hover:[&>li]:text-foreground transition-colors">
                            <li><a href="https://github.com/leapwithluvi" className="hover:underline">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/luviaprilyansyahgabriel" className="hover:underline">LinkedIn</a></li>
                            <li><a href="mailto:itsluvi13@gmail.com" className="hover:underline">Protocol_Liaison</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Manifest */}
            <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-muted-foreground uppercase opacity-50">Build_Status</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase italic">v4.0.1_STABLE</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-muted-foreground uppercase opacity-50">Node_Origin</span>
                        <span className="text-[10px] font-mono font-bold uppercase italic">SEA_REG_ID_01</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-muted-foreground uppercase opacity-50">Architect_Ref</span>
                        <span className="text-[10px] font-mono font-bold uppercase italic underline">LUVI_APRILYANSYAH_GABRIEL</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-muted-foreground uppercase opacity-50">Neural_Core</span>
                        <span className="text-[10px] font-mono font-bold uppercase italic">GEMMA_4.0_FLASH</span>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                        © 2026 Nexus Systems Protocol.
                    </p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
