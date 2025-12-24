import { Code, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const technicalSkills = [
  "C Programming",
  "Fundamentals of Artificial Intelligence",
  "Full Stack Basics (HTML, CSS)",
  "UI/UX Design (Foundational)",
];

const coreStrengths = [
  "Logical thinking",
  "Problem decomposition",
  "Consistent learning discipline",
  "Clear communication",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Programming & Technical
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Core Strengths
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreStrengths.map((strength, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {strength}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
