import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    institution: "Bannari Amman Institute of Technology, Erode",
    degree: "B.Tech – Artificial Intelligence and Data Science",
    score: "CGPA: 7.78",
    duration: "2024 – 2028",
    current: true,
  },
  {
    institution: "Higher Secondary Education (HSE)",
    degree: "Class XII",
    score: "94%",
    duration: "2022",
    current: false,
  },
  {
    institution: "Secondary School Leaving Certificate (SSLC)",
    degree: "Class X",
    score: "92%",
    duration: "",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className={`ml-0 md:ml-10 transition-all duration-300 hover:shadow-md ${
                  edu.current ? 'border-primary/30 bg-primary/5' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 w-5 h-5 bg-background border-2 border-primary rounded-full hidden md:block" 
                     style={{ marginTop: '1.5rem' }} />
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {edu.institution}
                      </h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-primary font-medium mt-1">{edu.score}</p>
                    </div>
                    {edu.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    )}
                  </div>
                  {edu.current && (
                    <span className="inline-block mt-3 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      Currently Pursuing
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
