"use client";

import Navbar from "@/components/Navbar";

const contributors = [
    { name: "Luvi Aprilyansyah Gabriel", role: "Lead Systems Architect", contact: "@leapwithluvi" },
    { name: "Nexus AI Core", role: "Intelligence Infrastructure", contact: "Nexus.System" }
];

const technologies = [
    { name: "Next.js 16", type: "Framework Architecture" },
    { name: "Tailwind CSS 4.0", type: "Visual Protocol" },
    { name: "Lucide React", type: "Interface Symbology" },
    { name: "Radix UI", type: "Structural Components" },
    { name: "Gemma 4 API", type: "Intelligence Backend" }
];

export default function CreditsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background font-sans">
      <Navbar />
      
      <main className="mono-container pt-32 md:pt-40 pb-20">
        <div className="flex flex-col mb-20 md:mb-32 border-l-4 border-foreground pl-6 md:pl-12 py-4">
            <span className="label-mono mb-8 block font-black">System Acknowledgments</span>
            <h1 className="text-huge mb-12 lowercase">Contributors.</h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed italic max-w-2xl text-muted-foreground">
                The Nexus AI platform is a multi-disciplinary technical showcase integrating advanced cognition with structural architecture.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-40">
            {/* Section: Architects */}
            <div className="space-y-12">
                <h2 className="text-xs uppercase font-black tracking-[0.4em] border-b border-border pb-4 w-full">Architectural Oversight</h2>
                <div className="grid grid-cols-1 gap-12">
                    {contributors.map((person) => (
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

            {/* Section: Tech Stack */}
            <div className="space-y-12">
                <h2 className="text-xs uppercase font-black tracking-[0.4em] border-b border-border pb-4 w-full">Visual & Logical Protocols</h2>
                <div className="grid grid-cols-1 gap-[1px] bg-border border border-border">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="flex justify-between items-center p-6 bg-background hover:bg-muted/30 transition-all">
                            <span className="text-sm font-bold tracking-tight uppercase">{tech.name}</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground italic">{tech.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <section className="py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <h3 className="text-xs uppercase font-black tracking-[0.4em] mb-8">System Disclaimer</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground uppercase tracking-widest font-medium">
                        Nexus AI is a non-commercial portfolio project. All intelligence models and APIs utilized are property of their respective owners. 
                        This system serves as a technical proof-of-concept for enterprise-grade conversational interfaces. 
                        No data is permanently stored on public buffers beyond session duration.
                    </p>
                </div>
                <div className="lg:col-span-4 lg:text-right flex flex-col justify-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Build Identifier</span>
                    <span className="text-lg font-mono font-bold tracking-tighter">NXSRV-2026.04.11-BETA</span>
                </div>
            </div>
        </section>
      </main>

      <footer className="py-20 border-t border-border bg-muted/30">
        <div className="mono-container flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black tracking-tighter italic">NEXUS</div>
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted-foreground italic">
                Defined by Intelligence. Structured by Design.
            </p>
            <div className="text-[10px] font-black underline decoration-2 underline-offset-4 cursor-pointer hover:opacity-50 transition-all">
                SECURE ACCESS GRANTED
            </div>
        </div>
      </footer>
    </div>
  );
}
