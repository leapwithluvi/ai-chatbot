import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Type your query",
    description: "Enter any question, task, or idea into the chat interface. Nexus AI understands natural language perfectly.",
  },
  {
    number: "02",
    title: "Instant Processing",
    description: "Our AI engine processes your input instantly, ensuring lightning-fast and private responses.",
  },
  {
    number: "03",
    title: "Refine & Export",
    description: "Iterate on the AI's response, ask follow-up questions, and use the knowledge to boost your productivity.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                    How it works.
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    Getting started with Nexus AI is simple. Our platform is designed to be intuitive and powerful, allowing you to focus on what matters most.
                </p>
                <div className="space-y-4">
                    {["No setup required", "Local first privacy", "Optimized for speed"].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-foreground/80">
                            <CheckCircle2 size={20} className="text-blue-500" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 grid gap-8">
                {steps.map((step) => (
                    <div key={step.number} className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-border/80 transition-colors">
                        <div className="text-4xl font-black text-foreground/10 select-none">
                            {step.number}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
