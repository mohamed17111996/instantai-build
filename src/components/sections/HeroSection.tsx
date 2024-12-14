import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/mohamedmojahid11/30min", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="/lovable-uploads/53bfb00f-b56c-4d01-b517-c7e4f51dcc85.png"
          alt="Instantaibuild"
          className="h-16 mx-auto mb-12 animate-fade-in"
        />
        <h1 className="text-5xl md:text-7xl font-bold heading-gradient mb-6 animate-fade-up">
          From ideas to AI execution—
          <span className="text-brand">instantly</span>.
        </h1>
        <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Transform your business with AI-powered solutions that streamline operations,
          boost efficiency, and drive growth.
        </p>
        <div className="flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-brand hover:bg-brand-light text-white"
            onClick={handleScheduleCall}
          >
            Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};