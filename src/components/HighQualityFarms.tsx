import { TrendingUp, Sprout, Target } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  TrendingUp,
  Sprout,
  Target
};

export const HighQualityFarms = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Farm"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="bg-primary text-white p-8 md:p-12 rounded-lg">
            <p className="text-sm mb-2 uppercase tracking-wider opacity-90">
              {siteConfig.highQualityFarms.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {siteConfig.highQualityFarms.title}
            </h2>

            <div className="space-y-6">
              {siteConfig.highQualityFarms.features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm opacity-90">{feature.description}</p>
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
