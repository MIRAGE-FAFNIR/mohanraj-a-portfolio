import { FolderOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Based Sentiment Analyser",
    description:
      "Beginner-level AI project focused on analyzing sentiment from textual data using foundational AI concepts.",
    tags: ["AI", "NLP", "Python"],
  },
  {
    title: "Study Tracker Using AI",
    description:
      "A productivity-focused system designed to analyze study habits and support focus using AI-assisted insights.",
    tags: ["AI", "Productivity", "Data Analysis"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <FolderOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span>{project.title}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
