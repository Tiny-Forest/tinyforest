import { Button } from "@/components/ui/button";
import { Trees } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Trees className="w-6 h-6 text-accent" />
          </div>
          <span className="text-xl font-bold text-white">{siteConfig.company.name}</span>
        </div>
        <Button 
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
        >
          CONTACT US
        </Button>
      </div>
    </header>
  );
};
