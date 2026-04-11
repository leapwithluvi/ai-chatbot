"use client";

import Navbar from "@/components/Navbar";
import { ChevronRight, Terminal, Shield, Cpu, Zap, Globe } from "lucide-react";
import { useState } from "react";

const DocsPage = () => {
    const [activeSection, setActiveSection] = useState("intro");

    const sections = [
        { 
            id: "intro", 
            title: "Introduction", 
            icon: Terminal,
            content: (
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-6xl font-black tracking-tighter italic uppercase underline decoration-4 underline-offset-8">System Overview</h1>
                        <p className="text-xl font-medium leading-relaxed max-w-3xl italic text-muted-foreground">
                            Nexus is an advanced, high-integrity intelligence interface built to showcase a production-grade orchestration between a specialized frontend and a robust backend infrastructure.
                        </p>
                    </div>

                    <div className="space-y-8 mt-12">
                        <p className="text-sm font-bold uppercase tracking-widest leading-loose">
                            This project was developed to demonstrate how AI technologies (Gemma 4.0) can be integrated into high-stakes enterprise environments that prioritize security and scalability. The primary focus is not just on chat functionality, but on the architectural layers that protect it.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pb-20">
                         <button 
                            onClick={() => setActiveSection("architecture")}
                            className="text-left p-10 bg-muted/30 border border-border space-y-6 hover:bg-foreground hover:text-background transition-all group"
                         >
                            <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground">01</div>
                            <h3 className="text-sm font-black uppercase tracking-[0.3em]">Architectural_Core</h3>
                            <p className="text-[11px] leading-relaxed uppercase tracking-wider opacity-60">
                                Deep dive into the NestJS + Next.js orchestration and database strategy.
                            </p>
                            <div className="flex items-center gap-2 text-[8px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                Access_Module <ChevronRight size={10} />
                            </div>
                         </button>
                         <button 
                            onClick={() => setActiveSection("security")}
                            className="text-left p-10 bg-muted/30 border border-border space-y-6 hover:bg-foreground hover:text-background transition-all group"
                         >
                            <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground">02</div>
                            <h3 className="text-sm font-black uppercase tracking-[0.3em]">Security_Shield</h3>
                            <p className="text-[11px] leading-relaxed uppercase tracking-wider opacity-60">
                                Understanding the protocols that ensure data integrity and system stability.
                            </p>
                             <div className="flex items-center gap-2 text-[8px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                Access_Module <ChevronRight size={10} />
                             </div>
                         </button>
                    </div>
                </div>
            )
        },
        { 
            id: "architecture", 
            title: "Architecture", 
            icon: Cpu,
            content: (
                <div className="space-y-16">
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic">Technical Foundations</h2>
                    
                    <div className="space-y-16">
                        <section className="space-y-8">
                            <div className="label-mono border-l-2 border-foreground pl-4">The Golden Stack</div>
                            <p className="text-base font-medium leading-relaxed max-w-2xl">
                                Nexus utilizes an architecture that strictly enforces Separation of Concerns. 
                                <strong> Next.js</strong> handles Server-Side Rendering for maximum performance and SEO, while <strong>NestJS</strong> acts as a highly-structured backend logic layer.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1px bg-border border border-border">
                                <div className="p-8 bg-background">
                                    <span className="text-[10px] font-black block mb-4 opacity-50">Frontend</span>
                                    <h4 className="font-black italic">Next.js 15</h4>
                                    <p className="text-[10px] mt-4 uppercase tracking-widest leading-relaxed">Edge-Ready Interface & Streaming UI.</p>
                                </div>
                                <div className="p-8 bg-background">
                                    <span className="text-[10px] font-black block mb-4 opacity-50">Backend</span>
                                    <h4 className="font-black italic">NestJS (TS)</h4>
                                    <p className="text-[10px] mt-4 uppercase tracking-widest leading-relaxed">Modular API Architecture & Validation.</p>
                                </div>
                                <div className="p-8 bg-background">
                                    <span className="text-[10px] font-black block mb-4 opacity-50">Storage</span>
                                    <h4 className="font-black italic">PostgreSQL</h4>
                                    <p className="text-[10px] mt-4 uppercase tracking-widest leading-relaxed">Relational Data & Prisma ORM.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-10">
                            <div className="label-mono border-l-2 border-foreground pl-4">Full-Stack Data Orchestration</div>
                            <div className="p-8 md:p-16 border border-border bg-muted/5 space-y-24">
                                
                                {/* Layer 1: Client & Entry */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">Zone_01</div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Frontend_Infiltration</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="p-8 border border-border bg-background space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Globe size={18} />
                                                <h4 className="text-xs font-black uppercase tracking-widest">Client_Browser</h4>
                                            </div>
                                            <p className="text-[9px] text-muted-foreground uppercase leading-relaxed font-bold">Next.js 15 Client-Side Application.</p>
                                        </div>
                                        <div className="p-8 border border-border bg-background border-dashed space-y-4">
                                             <div className="flex items-center gap-3 text-emerald-500">
                                                <Shield size={18} />
                                                <h4 className="text-xs font-black uppercase tracking-widest">Auth_Middleware</h4>
                                            </div>
                                            <p className="text-[9px] text-muted-foreground uppercase leading-relaxed font-bold italic underline">Session Validation & Route Guarding.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-12 relative z-10">
                                    <div className="w-px h-20 bg-border border-l-2 border-dashed border-foreground/20"></div>
                                </div>

                                {/* Layer 2: Backend Core (The Jeroan) */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">Zone_02</div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">NestJS_Neural_Orchestra</span>
                                    </div>
                                    <div className="p-10 border-4 border-foreground bg-background relative">
                                        <div className="absolute -top-3 -right-3 px-4 py-1 bg-foreground text-background text-[8px] font-black uppercase">Core_API_Unit</div>
                                        
                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Sub-Layer: Guards & Pipes */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="p-4 bg-muted/30 border border-border text-[9px] font-black uppercase tracking-tighter text-center">JWT_Guard</div>
                                                <div className="p-4 bg-muted/30 border border-border text-[9px] font-black uppercase tracking-tighter text-center italic">Zod_Validation_Pipe</div>
                                                <div className="p-4 bg-muted/30 border border-border text-[9px] font-black uppercase tracking-tighter text-center">Rate_Limiter</div>
                                            </div>

                                            <div className="h-px bg-border my-4"></div>

                                            {/* Sub-Layer: Services */}
                                            <div className="flex flex-col md:flex-row items-center gap-12">
                                                <div className="flex-1 p-6 bg-foreground text-background space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <Terminal size={14} />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">Chat_Service</span>
                                                    </div>
                                                    <p className="text-[8px] opacity-70 uppercase font-bold leading-relaxed">
                                                        Logic processing, prompt wrapping, and history aggregation.
                                                    </p>
                                                </div>
                                                <ChevronRight size={24} className="md:rotate-0 rotate-90 opacity-20" />
                                                <div className="flex-1 p-6 border-2 border-foreground space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <Cpu size={14} />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">AI_Inference_Wrapper</span>
                                                    </div>
                                                    <p className="text-[8px] text-muted-foreground uppercase font-bold leading-relaxed">
                                                        Managing streaming chunks and SSE connection stability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-12 relative z-10">
                                    <div className="w-px h-20 bg-border border-l-2 border-dashed border-foreground/20"></div>
                                </div>

                                {/* Layer 3: Persistence & AI */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">Zone_03</div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">External_Data_&_Inference</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <div className="w-full h-1 bg-blue-500"></div>
                                            <div className="p-8 border border-border bg-background space-y-4">
                                                <div className="flex items-center gap-3">
                                                    < Zap size={18} className="text-blue-500" />
                                                    <h4 className="text-xs font-black uppercase tracking-widest">PostgreSQL_Storage</h4>
                                                </div>
                                                <p className="text-[9px] text-muted-foreground uppercase leading-relaxed font-bold">
                                                    Persisting interaction logs via Prisma ORM for cold-storage and history retrieval.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-full h-1 bg-emerald-500"></div>
                                            <div className="p-8 border border-border bg-background space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <Cpu size={18} className="text-emerald-500" />
                                                    <h4 className="text-xs font-black uppercase tracking-widest">Gemma_4.0_API_Core</h4>
                                                </div>
                                                <p className="text-[9px] text-muted-foreground uppercase leading-relaxed font-bold">
                                                    Executing heavy cognitive tasks and returning tokenized response streams.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="label-mono border-l-2 border-foreground pl-4">Database Strategy</div>
                            <p className="text-sm font-medium leading-relaxed max-w-2xl italic">
                                We chose PostgreSQL to ensure atomicity and consistency in conversation data. By implementing optimized indexing on `chat_id` and `user_id` fields, Nexus achieves history retrieval latency of sub-10ms across thousands of records.
                            </p>
                        </section>
                    </div>
                </div>
            )
        },
        {
            id: "setup",
            title: "Installation",
            icon: Zap,
            content: (
                <div className="space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tighter uppercase italic">System Deployment</h2>
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed italic">
                            Follow these protocols to successfully initialize and deploy the Nexus core in your local environment.
                        </p>
                    </div>

                    {/* Phase 1: Infrastructure */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">Phase_01</div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Infrastructure_Initialization</span>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 border border-border bg-muted/5 space-y-4">
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-50">01. Clone Neural Repository</span>
                                <div className="p-4 bg-muted border border-border font-mono text-[11px] text-emerald-500">
                                    <code>git clone https://github.com/leapwithluvi/nexus-neural-orchestrator.git</code>
                                </div>
                            </div>
                            <div className="p-6 border border-border bg-muted/5 space-y-4">
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-50">02. Install Dependencies</span>
                                <div className="p-4 bg-muted border border-border font-mono text-[11px]">
                                    <code>npm install</code>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2: Configuration */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">Phase_02</div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Neural_Configuration</span>
                        </div>
                        <div className="border border-border">
                            <table className="w-full text-left text-[10px] font-bold uppercase tracking-widest">
                                <thead className="bg-muted border-b border-border">
                                    <tr>
                                        <th className="p-4 opacity-50">Variable_Key</th>
                                        <th className="p-4 opacity-50">Deployment_Type</th>
                                        <th className="p-4 opacity-50">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr>
                                        <td className="p-4 font-mono text-emerald-500 italic">DATABASE_URL</td>
                                        <td className="p-4">PostgreSQL</td>
                                        <td className="p-4 text-muted-foreground italic text-[9px]">Prisma connection string for persistence.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-mono text-emerald-500 italic">GEMMA_API_KEY</td>
                                        <td className="p-4">External_API</td>
                                        <td className="p-4 text-muted-foreground italic text-[9px]">Authorization key for Google neural core.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-mono text-emerald-500 italic">JWT_SECRET</td>
                                        <td className="p-4">Security</td>
                                        <td className="p-4 text-muted-foreground italic text-[9px]">Cryptographic key for operator auth.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Phase 3: Execution */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="px-3 py-1 bg-foreground text-background text-[8px] font-black uppercase tracking-widest">Phase_03</div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational_Execution</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 border border-foreground space-y-3">
                                <h4 className="text-[10px] font-black uppercase tracking-widest">Development_Mode</h4>
                                <div className="p-3 bg-muted border border-border font-mono text-[10px]">
                                    <code>npm run dev</code>
                                </div>
                                <p className="text-[8px] text-muted-foreground uppercase italic">Hot-reload active. Neural bridge unstable.</p>
                            </div>
                            <div className="p-6 border border-border bg-muted/20 space-y-3">
                                <h4 className="text-[10px] font-black uppercase tracking-widest opacity-50">Production_Build</h4>
                                <div className="p-3 bg-muted border border-border font-mono text-[10px] opacity-50">
                                    <code>npm run build && npm start</code>
                                </div>
                                <p className="text-[8px] text-muted-foreground uppercase italic opacity-50">Optimized chunks. High-integrity protocol.</p>
                            </div>
                        </div>
                    </div>

                    {/* Requirements Callout */}
                    <div className="p-10 border-l-8 border-foreground bg-muted/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                             <span className="text-[9px] font-black uppercase opacity-40 block mb-2">Runtime_Node</span>
                             <span className="text-xl font-black italic">v18.0.0+</span>
                        </div>
                        <div>
                             <span className="text-[9px] font-black uppercase opacity-40 block mb-2">DB_Instance</span>
                             <span className="text-xl font-black italic">PostgreSQL_14</span>
                        </div>
                        <div>
                             <span className="text-[9px] font-black uppercase opacity-40 block mb-2">Neural_Core</span>
                             <span className="text-xl font-black italic">Gemma_4.0_Flash</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "security",
            title: "Security",
            icon: Shield,
            content: (
                <div className="space-y-16">
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic">Integrity Protocols</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="space-y-6 p-8 border border-border bg-muted/10">
                            <div className="w-10 h-1 layer bg-foreground mb-6"></div>
                            <h3 className="text-sm font-black uppercase tracking-[0.2em]">01. Rate Limiting</h3>
                            <p className="text-[11px] font-medium text-muted-foreground leading-relaxed uppercase tracking-wider">
                                Prevents Brute Force and DoS attacks by restricting the number of requests per operator using a Sliding Window strategy.
                            </p>
                        </section>
                        
                        <section className="space-y-6 p-8 border border-border bg-muted/10">
                            <div className="w-10 h-1 layer bg-foreground mb-6"></div>
                            <h3 className="text-sm font-black uppercase tracking-[0.2em]">02. Data Sanitization</h3>
                            <p className="text-[11px] font-medium text-muted-foreground leading-relaxed uppercase tracking-wider italic">
                                Every user input is parsed and sanitized to prevent XSS (Cross-Site Scripting) and Prompt Injection before being processed by the AI core.
                            </p>
                        </section>

                        <section className="space-y-6 p-8 border border-border bg-muted/10">
                            <div className="w-10 h-1 layer bg-foreground mb-6"></div>
                            <h3 className="text-sm font-black uppercase tracking-[0.2em]">03. JWT Authentication</h3>
                            <p className="text-[11px] font-medium text-muted-foreground leading-relaxed uppercase tracking-wider">
                                Utilizes asymmetrically signed JSON Web Tokens to ensure only validated operators can establish a connection with the neural infrastructure.
                            </p>
                        </section>

                        <section className="space-y-6 p-8 border border-border bg-muted/10">
                            <div className="w-10 h-1 layer bg-foreground mb-6"></div>
                            <h3 className="text-sm font-black uppercase tracking-[0.2em]">04. CORS Enforcement</h3>
                            <p className="text-[11px] font-medium text-muted-foreground leading-relaxed uppercase tracking-wider italic">
                                Restricts API access exclusively to official Nexus domains to mitigate cross-origin exploitation from unauthorized third-party sources.
                            </p>
                        </section>
                    </div>

                    <div className="p-12 border border-foreground/10 flex flex-col items-center text-center space-y-6">
                        <Shield size={40} className="opacity-20" />
                        <p className="text-xs font-black uppercase tracking-[0.5em] max-w-lg opacity-40">
                            Our security model is designed to be proactive, not reactive. Data sovereignty is not a feature, it is a requirement.
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background">
            <Navbar />
            
            <main className="mono-container pt-32 pb-40 flex flex-col md:flex-row gap-12 lg:gap-24">
                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 shrink-0 space-y-12">
                    <div className="space-y-2 pl-4 border-l-2 border-foreground">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground">Documentation</span>
                        <h3 className="text-xl font-black tracking-tighter italic">V4.01_SYS</h3>
                    </div>

                    <nav className="space-y-2">
                        {sections.map((section) => (
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
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                <span className="text-[9px] font-bold uppercase tracking-widest">Protocol Stable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                <span className="text-[9px] font-bold uppercase tracking-widest">Sync Active</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <div className="flex-1 max-w-5xl">
                    <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {sections.find(s => s.id === activeSection)?.content}
                    </div>

                    {/* Pagination Dummy */}
                    <div className="mt-40 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground opacity-30">
                         <span className="text-[8px] font-black uppercase tracking-[0.4em]">Nexus_Protocol_Documentation_Manifest</span>
                         <span className="text-[8px] font-black uppercase tracking-[0.4em]">Archived_2026 • ID_{activeSection.toUpperCase()}</span>
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
