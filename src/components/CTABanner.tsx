import { Button } from "@/components/ui/button";
import { Trees } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const CTABanner = () => {
  return (
    <section className="py-12 md:py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Trees className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-script text-foreground">
              {siteConfig.ctaBanner.text}
            </h2>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-semibold whitespace-nowrap"
          >
            {siteConfig.ctaBanner.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
