"use client";

import Navbar from "@/components/Navbar";
import { ChevronRight, Terminal, Shield, Cpu, Zap, Globe } from "lucide-react";
import { useState } from "react";
import { docSections } from "@/data/docs";

const DocsPage = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const currentSection = docSections.find(s => s.id === activeSection) || docSections[0];

    // Helper to render Introduction Content
    const renderIntro = (data: any) => (
        <div className="space-y-12">
            <div className="space-y-6">
                <h1 className="text-6xl font-black tracking-tighter italic uppercase underline decoration-4 underline-offset-8">{data.heading}</h1>
                <p className="text-xl font-medium leading-relaxed max-w-3xl italic text-muted-foreground">{data.tagline}</p>
            </div>
            <div className="space-y-8 mt-12">
                <p className="text-sm font-bold uppercase tracking-widest leading-loose">{data.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pb-20">
                {data.links?.map((link: any) => (
                    <button 
                        key={link.id}
                        onClick={() => setActiveSection(link.targetId)}
                        className="text-left p-10 bg-muted/30 border border-border space-y-6 hover:bg-foreground hover:text-background transition-all group"
                    >
                        <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground">{link.id}</div>
                        <h3 className="text-sm font-black uppercase tracking-[0.3em]">{link.title}</h3>
                        <p className="text-[11px] leading-relaxed uppercase tracking-wider opacity-60">{link.desc}</p>
                        <div className="flex items-center gap-2 text-[8px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Access_Module <ChevronRight size={10} />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );

    // Helper to render Architecture Content
    const renderArchitecture = (data: any) => (
        <div className="space-y-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">{data.heading}</h2>
            <div className="space-y-16">
                <section className="space-y-8">
                    <div className="label-mono border-l-2 border-foreground pl-4">{data.stackLabel}</div>
                    <p className="text-base font-medium leading-relaxed max-w-2xl">{data.stackDesc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1px bg-border border border-border">
                        {data.stack?.map((item: any, i: number) => (
                            <div key={i} className="p-8 bg-background">
                                <span className="text-[10px] font-black block mb-4 opacity-50">{item.label}</span>
                                <h4 className="font-black italic">{item.title}</h4>
                                <p className="text-[10px] mt-4 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-10">
                    <div className="label-mono border-l-2 border-foreground pl-4">Full-Stack Data Orchestration</div>
                    <div className="p-8 md:p-16 border border-border bg-muted/5 space-y-24">
                        {data.zones?.map((zone: any, i: number) => (
                            <div key={zone.id}>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">{zone.id}</div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">{zone.title}</span>
                                    </div>
                                    {zone.items && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {zone.items.map((item: any, j: number) => (
                                                <div key={j} className={`p-8 border border-border bg-background space-y-4 ${item.highlight ? 'border-dashed' : ''}`}>
                                                    <div className={`flex items-center gap-3 ${item.highlight ? 'text-emerald-500' : ''}`}>
                                                        <item.icon size={18} />
                                                        <h4 className="text-xs font-black uppercase tracking-widest">{item.title}</h4>
                                                    </div>
                                                    <p className={`text-[9px] text-muted-foreground uppercase leading-relaxed font-bold ${item.highlight ? 'italic underline' : ''}`}>{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {zone.core && (
                                        <div className="p-10 border-4 border-foreground bg-background relative">
                                            <div className="absolute -top-3 -right-3 px-4 py-1 bg-foreground text-background text-[8px] font-black uppercase">{zone.core.label}</div>
                                            <div className="grid grid-cols-1 gap-6">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    {zone.core.guards.map((g: string, k: number) => (
                                                        <div key={k} className="p-4 bg-muted/30 border border-border text-[9px] font-black uppercase tracking-tighter text-center">{g}</div>
                                                    ))}
                                                </div>
                                                <div className="h-px bg-border my-4"></div>
                                                <div className="flex flex-col md:flex-row items-center gap-12">
                                                    {zone.core.services.map((s: any, k: number) => (
                                                        <div key={k} className="flex flex-1 items-center gap-4">
                                                            <div className={`flex-1 p-6 ${k === 0 ? 'bg-foreground text-background' : 'border-2 border-foreground'} space-y-3`}>
                                                                <div className="flex items-center gap-3">
                                                                    <s.icon size={14} />
                                                                    <span className="text-[10px] font-black uppercase tracking-widest">{s.title}</span>
                                                                </div>
                                                                <p className="text-[8px] uppercase font-bold leading-relaxed">{s.desc}</p>
                                                            </div>
                                                            {k === 0 && <ChevronRight size={24} className="md:rotate-0 rotate-90 opacity-20" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {zone.gateways && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            {zone.gateways.map((gw: any, j: number) => (
                                                <div key={j} className="space-y-4">
                                                    <div className={`w-full h-1 ${gw.color}`}></div>
                                                    <div className="p-8 border border-border bg-background space-y-4">
                                                        <div className="flex items-center gap-3">
                                                            <gw.icon size={18} className={gw.color.replace('bg-', 'text-')} />
                                                            <h4 className="text-xs font-black uppercase tracking-widest">{gw.title}</h4>
                                                        </div>
                                                        <p className="text-[9px] text-muted-foreground uppercase leading-relaxed font-bold">{gw.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {i < data.zones.length - 1 && (
                                    <div className="flex justify-center -my-12 relative z-10">
                                        <div className="w-px h-20 bg-border border-l-2 border-dashed border-foreground/20"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-6">
                    <div className="label-mono border-l-2 border-foreground pl-4">{data.dbStrategyLabel}</div>
                    <p className="text-sm font-medium leading-relaxed max-w-2xl italic">{data.dbStrategyDesc}</p>
                </section>
            </div>
        </div>
    );

    // Helper to render Setup Content
    const renderSetup = (data: any) => (
        <div className="space-y-16">
            <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tighter uppercase italic">{data.heading}</h2>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed italic">{data.subheading}</p>
            </div>
            {data.phases?.map((phase: any) => (
                <div key={phase.id} className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">{phase.id}</div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">{phase.title}</span>
                    </div>
                    {phase.steps && (
                        <div className="space-y-6">
                            {phase.steps.map((step: any, i: number) => (
                                <div key={i} className="p-6 border border-border bg-muted/5 space-y-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-50">{step.label}</span>
                                    <div className={`p-4 bg-muted border border-border font-mono text-[11px] ${step.color || ''}`}>
                                        <code>{step.code}</code>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {phase.envVars && (
                        <div className="border border-border overflow-x-auto">
                            <table className="w-full text-left text-[10px] font-bold uppercase tracking-widest min-w-[500px]">
                                <thead className="bg-muted border-b border-border">
                                    <tr>
                                        <th className="p-4 opacity-50">Variable_Key</th>
                                        <th className="p-4 opacity-50">Deployment_Type</th>
                                        <th className="p-4 opacity-50">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {phase.envVars.map((v: any, i: number) => (
                                        <tr key={i}>
                                            <td className="p-4 font-mono text-emerald-500 italic">{v.key}</td>
                                            <td className="p-4">{v.type}</td>
                                            <td className="p-4 text-muted-foreground italic text-[9px]">{v.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {phase.commands && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {phase.commands.map((cmd: any, i: number) => (
                                <div key={i} className={`p-6 border ${cmd.isMain ? 'border-foreground' : 'border-border bg-muted/20'} space-y-3`}>
                                    <h4 className={`text-[10px] font-black uppercase tracking-widest ${!cmd.isMain ? 'opacity-50' : ''}`}>{cmd.label}</h4>
                                    <div className={`p-3 bg-muted border border-border font-mono text-[10px] ${!cmd.isMain ? 'opacity-50' : ''}`}>
                                        <code>{cmd.code}</code>
                                    </div>
                                    <p className={`text-[8px] text-muted-foreground uppercase italic ${!cmd.isMain ? 'opacity-50' : ''}`}>{cmd.subtext}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="p-10 border-l-8 border-foreground bg-muted/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.requirements?.map((req: any, i: number) => (
                    <div key={i}>
                        <span className="text-[9px] font-black uppercase opacity-40 block mb-2">{req.label}</span>
                        <span className="text-xl font-black italic">{req.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    // Helper to render Security Content
    const renderSecurity = (data: any) => (
        <div className="space-y-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">{data.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.protocols?.map((p: any) => (
                    <section key={p.id} className="space-y-6 p-8 border border-border bg-muted/10">
                        <div className="w-10 h-1 layer bg-foreground mb-6"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em]">{p.id}. {p.title}</h3>
                        <p className={`text-[11px] font-medium text-muted-foreground leading-relaxed uppercase tracking-wider ${p.italic ? 'italic' : ''}`}>
                            {p.desc}
                        </p>
                    </section>
                ))}
            </div>
            <div className="p-12 border border-foreground/10 flex flex-col items-center text-center space-y-6">
                <Shield size={40} className="opacity-20" />
                <p className="text-xs font-black uppercase tracking-[0.5em] max-w-lg opacity-40">{data.footerNote}</p>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (currentSection.id) {
            case "intro": return renderIntro(currentSection);
            case "architecture": return renderArchitecture(currentSection);
            case "setup": return renderSetup(currentSection);
            case "security": return renderSecurity(currentSection);
            default: return null;
        }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background">
            <Navbar />
            <main className="mono-container pt-32 pb-40 flex flex-col md:flex-row gap-12 lg:gap-24">
                <aside className="w-full md:w-64 shrink-0 space-y-12">
                    <div className="space-y-2 pl-4 border-l-2 border-foreground">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground">Documentation</span>
                        <h3 className="text-xl font-black tracking-tighter italic">V4.01_SYS</h3>
                    </div>
                    <nav className="space-y-2">
                        {docSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center gap-4 p-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                                    activeSection === section.id 
                                    ? "bg-foreground text-background shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]" 
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                <section.icon size={14} />
                                {section.title}
                                {activeSection === section.id && <ChevronRight size={14} className="ml-auto" />}
                            </button>
                        ))}
                    </nav>
                    <div className="pt-12 border-t border-border space-y-4 opacity-40">
                        <span className="text-[8px] font-black uppercase tracking-widest block italic text-muted-foreground">Developer Logs</span>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Protocol Stable
                            </div>
                            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Sync Active
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1 max-w-5xl">
                    <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {renderContent()}
                    </div>
                    <div className="mt-40 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground opacity-30 uppercase text-[8px] font-black tracking-[0.4em]">
                         <span>Nexus_Protocol_Documentation_Manifest</span>
                         <span>Archived_2026 • ID_{activeSection.toUpperCase()}</span>
                    </div>
                </div>
            </main>

            <footer className="py-20 border-t border-border bg-background">
                <div className="mono-container flex flex-col items-center gap-8">
                     <span className="text-4xl font-black tracking-tighter italic opacity-10 uppercase">Nexus_Sys</span>
                     <p className="text-[9px] font-black uppercase tracking-[0.5em] opacity-20 italic text-center">
                        End of Documentation Core. All operations recorded.
                     </p>
                </div>
            </footer>
        </div>
    );
};

export default DocsPage;
