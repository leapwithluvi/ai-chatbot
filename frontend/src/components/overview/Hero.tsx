"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-20 overflow-hidden">
      <div className="mono-container">
        <div className="flex flex-col mb-24">
            <span className="label-mono mb-8 block animate-fadeIn">Portfolio Project • System Protocol v4.01 • Powered by Gemma 4 API</span>
            <h1 className="text-huge animate-slideUp">
                ADVANCED <br />
                COGNITION.
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border pt-12">
            <div className="lg:col-span-4">
                <p className="text-lg leading-[1.4] font-medium text-foreground italic">
                    Our platform provides high-integrity artificial intelligence for critical operations. 
                    Built on secure architecture and validated models.
                </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-6">
                <div className="space-y-6">
                    <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider">
                        We prioritize consistency and transparency in every interaction, ensuring your enterprise maintains control over its proprietary intelligence.
                    </p>
                    <Link href="/" className="inline-block text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-foreground pb-1 hover:opacity-70 transition-all">
                        Initiate Protocol
                    </Link>
                </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
                <div className="flex flex-col gap-4 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    <div className="flex justify-between border-b border-border pb-2">
                        <span>Latency</span>
                        <span className="text-foreground">0.04s</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                        <span>Reliability</span>
                        <span className="text-foreground">99.99%</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                        <span>Encryption</span>
                        <span className="text-foreground">AES-256</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Massive Background element (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] pointer-events-none select-none">
            <div className="text-[40vw] font-black leading-none">NX</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
