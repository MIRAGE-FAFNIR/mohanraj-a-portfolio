import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {currentYear} Mohanraj A. Built with{" "}
          <Heart className="h-3 w-3 text-destructive inline" /> in Tamil Nadu, India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
