import { Brain, Users, Lock, Workflow } from "lucide-react";

export const ValueSection = () => {
  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Knowledge Management",
      description: "Centralize and automate your company's knowledge distribution.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smart Onboarding",
      description: "Streamline employee onboarding with AI-guided processes.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Integration",
      description: "Enterprise-grade security for all your internal processes.",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and focus on strategic growth.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold heading-gradient text-center mb-6">
          Streamline Internal Processes
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          Transform your internal operations with AI-powered solutions that enhance
          efficiency and employee experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-brand mb-4">{value.icon}</div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};