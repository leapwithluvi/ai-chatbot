"use client";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-40">
      <div className="mono-container">
        <div className="text-center mb-24 md:mb-40">
            <span className="label-mono mb-4 block">System Flow</span>
            <h2 className="text-huge lowercase">Procedure.</h2>
        </div>

        <div className="relative flex flex-col gap-24 md:gap-32">
            {/* Center Line (Hidden on mobile) */}
            <div className="absolute left-1/2 top-0 w-px h-full bg-border -translate-x-1/2 hidden lg:block"></div>
            
            {[
                { title: "Ingestion", desc: "Siphon data into our isolated sovereign buffer." },
                { title: "Processing", desc: "Neural mapping without ever touching the public web." },
                { title: "Extraction", desc: "Retrieve insights via secure terminal protocols." }
            ].map((step, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start lg:items-center gap-8 lg:gap-20">
                    
                    {/* PC Left / Mobile Title Core */}
                    <div className={`flex flex-col ${i % 2 === 0 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left lg:order-3"}`}>
                        <div className="flex items-center gap-6 lg:block">
                            {/* Mobile Number Indicator */}
                            <div className="lg:hidden shrink-0 w-12 h-12 bg-foreground text-background flex items-center justify-center text-xl font-black italic">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl font-bold italic mb-2 lg:mb-4 uppercase">{step.title}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground uppercase font-black tracking-widest leading-relaxed max-w-xs">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Center Dot (PC Only) */}
                    <div className="hidden lg:flex justify-center lg:order-2">
                        <div className="w-8 h-8 rounded-full bg-foreground border-[6px] border-background relative z-10 ring-1 ring-foreground"></div>
                    </div>

                    {/* PC Right (Large Numbers) */}
                    <div className={`hidden lg:flex ${i % 2 === 0 ? "lg:justify-start lg:order-3" : "lg:justify-end lg:order-1"}`}>
                        <span className="text-9xl font-black italic opacity-10 select-none">
                            {i + 1}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
