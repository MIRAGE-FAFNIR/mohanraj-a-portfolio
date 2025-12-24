import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Welcome
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Mohanraj A
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
            Artificial Intelligence & Data Science Undergraduate
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Focused on understanding problems at their core and building clear, ethical AI-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
