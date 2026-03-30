import Navbar from "@/components/Navbar";
import Hero from "@/components/overview/Hero";
import Features from "@/components/overview/Features";
import HowItWorks from "@/components/overview/HowItWorks";
import Contact from "@/components/overview/Contact";

const Overview = () => {
  return (
    <div className="bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Contact />
      </main>
      <footer className="py-10 text-center border-t border-border text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Overview;
