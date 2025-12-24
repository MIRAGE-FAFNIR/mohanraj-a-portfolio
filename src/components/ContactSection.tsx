import { Mail, Phone, Github, Linkedin, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    value: "mohanrajmd821@gmail.com",
    href: "mailto:mohanrajmd821@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 123456789",
    href: "tel:+91123456789",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "MIRAGE-FAHINR",
    href: "https://github.com/MIRAGE-FAHINR",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "mohanraj-md",
    href: "https://linkedin.com/in/mohanraj-md",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "mohanraj_621",
    href: "https://leetcode.com/u/mohanraj_621",
    icon: Code,
  },
  {
    label: "HackerRank",
    value: "mohanrajmd821",
    href: "https://hackerrank.com/profile/mohanrajmd821",
    icon: Trophy,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group"
            >
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex items-center gap-4 justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <link.icon className="h-5 w-5 shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium truncate">{link.value}</p>
                </div>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
