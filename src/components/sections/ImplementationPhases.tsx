import { Check, ArrowRight } from "lucide-react";

export const ImplementationPhases = () => {
  const phases = [
    {
      title: "Discovery & Planning",
      description: "We analyze your current processes and identify opportunities for AI implementation.",
      steps: ["Process analysis", "Goal setting", "Implementation roadmap"],
    },
    {
      title: "Development & Integration",
      description: "Our team develops and integrates AI solutions tailored to your needs.",
      steps: ["Custom AI development", "System integration", "Security implementation"],
    },
    {
      title: "Training & Deployment",
      description: "We ensure smooth deployment and provide comprehensive training.",
      steps: ["Team training", "Phased rollout", "Performance monitoring"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold heading-gradient text-center mb-6">
          Implementation Process
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          Our systematic approach ensures successful AI integration into your business operations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="glass-card p-8 animate-fade-up relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-brand-light">{phase.title}</h3>
              <p className="text-white/80 mb-6">{phase.description}</p>
              <ul className="space-y-3">
                {phase.steps.map((step) => (
                  <li key={step} className="flex items-center gap-2">
                    <Check className="text-brand h-5 w-5" />
                    <span className="text-white/80">{step}</span>
                  </li>
                ))}
              </ul>
              {index < phases.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 text-brand/30 h-8 w-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};