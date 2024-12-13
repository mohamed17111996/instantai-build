import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold heading-gradient mb-6 animate-fade-up">
          From ideas to AI execution—
          <span className="text-brand">instantly</span>.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Transform your business with AI-powered solutions that streamline operations,
          boost efficiency, and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-brand hover:bg-brand/90 text-white">
            Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
            Watch Demo <Play className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};