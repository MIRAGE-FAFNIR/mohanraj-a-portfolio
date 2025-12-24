import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am currently pursuing B.Tech in Artificial Intelligence and Data Science at 
            Bannari Amman Institute of Technology. My learning approach emphasizes clarity, 
            patience, and strong fundamentals. I focus on logical problem solving, ethical 
            responsibility in AI, and steady skill development through consistent practice 
            and hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
