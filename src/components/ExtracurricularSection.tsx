import { Users, Heart, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "NSS Unit 2",
    description: "Community service participation",
    icon: Heart,
  },
  {
    title: "Code Circle Club",
    description: "Coding practice and peer learning",
    icon: Code2,
  },
];

const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            Extracurricular Activities
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-all duration-300 border-border/50"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <activity.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
