"use client";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-40">
      <div className="mono-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div className="flex flex-col border-l-4 border-foreground pl-6 md:pl-12 py-4">
                <span className="label-mono mb-8 block font-black">Liaison • Portfolio Case Study</span>
                <h2 className="text-huge mb-12 lowercase">Contact.</h2>
                <div className="space-y-12 max-w-sm">
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                        This platform is a technical demonstration. To collaborate or view the developer&apos;s full portfolio, please reach out via official channels.
                    </p>
                    <div className="space-y-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">General Enquiries</div>
                        <div className="text-lg md:text-xl font-bold border-b border-border pb-2">HQ@NEXUS.SYSTEM</div>
                    </div>
                </div>
            </div>

            <div className="bg-muted p-8 md:p-16">
                <form className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <label className="label-mono font-black">Identity</label>
                            <input type="text" className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-foreground transition-colors py-4 text-sm font-bold uppercase tracking-widest outline-none" placeholder="Full Name" />
                        </div>
                        <div className="space-y-4">
                            <label className="label-mono font-black">Protocol Address</label>
                            <input type="email" className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-foreground transition-colors py-4 text-sm font-bold uppercase tracking-widest outline-none" placeholder="Corporate Email" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="label-mono font-black">Brief</label>
                        <textarea className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-foreground transition-colors py-4 text-sm font-bold uppercase tracking-widest outline-none resize-none h-32" placeholder="System Requirements Summary"></textarea>
                    </div>
                    <button className="h-20 w-full bg-foreground text-background font-black uppercase text-sm tracking-[0.4em] hover:opacity-90 transition-opacity">
                        Request System Access
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
