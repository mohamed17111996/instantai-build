import { Bot, Zap, BarChart } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI technology to automate and optimize your business processes.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Implementation",
      description: "Get up and running quickly with our streamlined deployment process.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Track and measure the impact of AI implementation on your business metrics.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold heading-gradient text-center mb-16">
          Transform Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:bg-white/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-brand mb-4 group-hover:animate-float">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};