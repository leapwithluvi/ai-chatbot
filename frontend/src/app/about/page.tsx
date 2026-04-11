"use client";

import Navbar from "@/components/Navbar";

import { aboutData } from "@/data/about";
import { techStack } from "@/data/techstack";

export default function CreditsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background font-sans">
      <Navbar />
      
      <main className="mono-container pt-32 md:pt-40 pb-20">
        <div className="flex flex-col mb-20 md:mb-32 border-l-4 border-foreground pl-6 md:pl-12 py-4">
            <span className="label-mono mb-8 block font-black">{aboutData.subheading}</span>
            <h1 className="text-huge mb-12 lowercase">{aboutData.heading}</h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed italic max-w-2xl text-muted-foreground">
                {aboutData.description}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-40">
            {/* Section: Architects */}
            <div className="space-y-12">
                <h2 className="text-xs uppercase font-black tracking-[0.4em] border-b border-border pb-4 w-full">Architectural Oversight</h2>
                <div className="grid grid-cols-1 gap-12">
                    {aboutData.contributors.map((person) => (
                        <div key={person.name} className="flex justify-between items-end border-b border-border pb-8 hover:bg-muted/50 transition-colors group px-4">
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl md:text-3xl font-bold tracking-tighter uppercase italic">{person.name}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{person.role}</span>
                            </div>
                            <span className="text-[10px] font-mono opacity-30 group-hover:opacity-100 transition-opacity hidden sm:block">[{person.contact}]</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section: Protocols Grouped by Category */}
            <div className="space-y-16">
                {["Frontend", "AI & Logic", "Infrastructure"].map((category) => (
                    <div key={category} className="space-y-6">
                        <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-muted-foreground border-b border-border pb-2 inline-block">
                            {category.replace("&", "_")}_Protocols
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                            {techStack.filter(t => t.category === category).map((tech) => (
                                <div key={tech.name} className="flex justify-between items-center p-5 bg-background hover:bg-muted/50 transition-all group">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-tight uppercase group-hover:text-foreground transition-colors">{tech.name}</span>
                                        <span className="text-[8px] font-black uppercase tracking-[0.1em] text-muted-foreground/60">{tech.type}</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 bg-border group-hover:bg-foreground transition-all"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <section className="py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <h3 className="text-xs uppercase font-black tracking-[0.4em] mb-8">{aboutData.disclaimer.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground uppercase tracking-widest font-medium">
                        {aboutData.disclaimer.content}
                    </p>
                </div>
                <div className="lg:col-span-4 lg:text-right flex flex-col justify-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Build Identifier</span>
                    <span className="text-lg font-mono font-bold tracking-tighter">{aboutData.buildIdentifier}</span>
                </div>
            </div>
        </section>
      </main>

      <footer className="py-20 border-t border-border bg-muted/30">
        <div className="mono-container flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black tracking-tighter italic">NEXUS</div>
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground italic">
                {aboutData.footerQuote}
            </p>
            <div className="text-[10px] font-black underline decoration-2 underline-offset-4 cursor-pointer hover:opacity-50 transition-all">
                SECURE ACCESS GRANTED
            </div>
        </div>
      </footer>
    </div>
  );
}
