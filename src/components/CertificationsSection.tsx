import { Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
        </div>
        
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  NPTEL – Responsible and Safe AI Systems
                </h3>
                <p className="text-muted-foreground mt-1">
                  Focus: Ethical AI, fairness, bias, and safety
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  Ongoing
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;
