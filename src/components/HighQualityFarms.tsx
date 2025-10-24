import { TrendingUp, Sprout, Target } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  TrendingUp,
  Sprout,
  Target,
} as const;

type Feature = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
};

// Full‑bleed background with right‑side overlay content (matches the shared mockup)
export const HighQualityFarms = () => {
  return (
    <section className="relative bg-primary/10 py-0">
      <div className="mx-auto w-full max-w-7xl px-0">
        <div className="relative overflow-hidden rounded-none lg:rounded-xl">
          {/* Background image: place file in /public and update the src below */}
          <img
            src="/modern_agriculture.png"
            alt="Tiny Forest – modern agriculture background"
            loading="lazy"
            className="h-[300px] w-full object-none sm:h-[520px] md:h-[560px] lg:h-[600px]"
          />

          {/* Overlay content (right side) */}
          <div className="absolute inset-0">
            <div className="flex h-full w-full items-center justify-end px-4 sm:px-6 lg:px-10">
              {/* Content panel – sits over the green area on the right */}
              <div className="w-full max-w-xl text-white md:max-w-[560px]">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider opacity-90 sm:text-sm">
                  {siteConfig.highQualityFarms.label}
                </p>
                <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:mb-8 md:text-5xl">
                  {siteConfig.highQualityFarms.title}
                </h2>

                <div className="space-y-5 md:space-y-6">
                  {siteConfig.highQualityFarms.features.map((feature: Feature, index: number) => {
                    const Icon = iconMap[feature.icon];
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">{feature.title}</h3>
                          <p className="text-sm opacity-90">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighQualityFarms;
