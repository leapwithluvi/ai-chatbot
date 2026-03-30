import { MessageSquare, Zap, Shield, Cpu, Globe, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="text-yellow-400" size={24} />,
    title: "Fast Response",
    description: "Get instant answers with our optimized AI models, designed for speed and efficiency.",
  },
  {
    icon: <MessageSquare className="text-blue-400" size={24} />,
    title: "Natural Conversations",
    description: "Experience human-like interaction with advanced context understanding and reasoning.",
  },
  {
    icon: <Shield className="text-green-400" size={24} />,
    title: "Private & Secure",
    description: "Your conversations are processed locally, ensuring your data stays private and safe.",
  },
  {
    icon: <Cpu className="text-purple-400" size={24} />,
    title: "Edge AI",
    description: "Leveraging the power of lightweight large language models running efficiently on any hardware.",
  },
  {
    icon: <Globe className="text-pink-400" size={24} />,
    title: "Multilingual Support",
    description: "Communicate effortlessly across different languages with broad linguistic capabilities.",
  },
  {
    icon: <ArrowRight className="text-orange-400" size={24} />,
    title: "Extensible",
    description: "Seamlessly integrate with your existing workflows and tools for maximum productivity.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -mr-40 -mt-20" />
        
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            Powerful features for modern teams.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and manage your AI interactions with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-card border-border hover:border-border/80 transition-all duration-300 hover:bg-accent/5 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
