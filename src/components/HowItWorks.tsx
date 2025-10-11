import { CircleDot, Trees, Droplets, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  CircleDot,
  Trees,
  Droplets,
  TrendingUp
};

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-primary/10 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Plants"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute bottom-8 left-8 bg-primary text-white px-6 py-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-3">
                <Trees className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-3xl font-bold">{siteConfig.howItWorks.stats.number}</div>
                  <div className="text-sm">{siteConfig.howItWorks.stats.text}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
              {siteConfig.howItWorks.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {siteConfig.howItWorks.title}
            </h2>
            <a 
              href={siteConfig.howItWorks.linkUrl}
              className="text-blue-600 underline mb-8 block hover:text-blue-700"
            >
              {siteConfig.howItWorks.linkText}
            </a>
            
            <div className="space-y-4">
              {siteConfig.howItWorks.steps.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{step.title}</span>{" "}
                      <span className="text-muted-foreground">{step.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
