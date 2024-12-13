import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center glass-card p-12">
        <h2 className="text-4xl font-bold heading-gradient mb-6 animate-fade-up">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Join industry leaders who have already revolutionized their operations
          with Instantaibuild.
        </p>
        <Button
          size="lg"
          className="bg-brand hover:bg-brand/90 text-white animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};