import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 backdrop-blur-sm border border-border mb-8 animate-fadeIn">
          <Sparkles size={16} className="text-blue-500" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-300">Advanced AI Technology</span>
        </div>

        <h1 className="font-extrabold tracking-tight text-balance mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          The future of <br /> conversational AI.
        </h1>

        <p className="leading-relaxed text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 animate-slideUp">
          Nexus AI is a lightweight yet powerful assistant designed for fast, intelligent, and private conversations. Explore ideas, boost productivity, and get answers effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: "200ms" }}>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all font-semibold px-8 h-12 cursor-pointer"
          >
            <a href="/">Start Chatting</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border bg-accent/5 text-foreground hover:bg-accent/10 transition-all px-8 h-12"
          >
            <a href="#features">Explore Features</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
