import { CircleCheckBig, CircleDot, Trees, Droplets, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// Map string keys from siteConfig to actual Lucide components
const iconMap = {
  CircleCheckBig,
  CircleDot,
  Trees,
  Droplets,
  TrendingUp,
} as const;

type Step = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
};

export const HowItWorks = () => {
  return (
    <section className="bg-primary/10 overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            {/* Image wrapper keeps a nice, responsive aspect ratio across breakpoints */}
            <div className=" sm:aspect-[3/2] lg:aspect-[5/5] overflow-hidden rounded-xl bg-primary/5 shadow-sm">
              <img
                src="/how-it-works.png"
                alt="Native tree planting at Tiny Forest"
                loading="lazy"
                className="h-full w-full rounded-xl object-cover -right-10"
              />
            </div>
          {/* Decorative green rectangle that extends to the right edge of the viewport */}
          <div
            aria-hidden="true"
            className="absolute -top-20 right-40 md:-top-20 md:right-40 bottom-0 -z-10 rounded-l-xl bg-emerald-950 shadow-lg pointer-events-none"
            style={{ width: "40vw", height: "70vh" }}
          />

            {/* Stats Badge */}
            <div className="pointer-events-none absolute bottom-3 left-3 select-none rounded-lg bg-primary px-4 py-3 text-white shadow-xl sm:bottom-4 sm:left-4 sm:px-5 sm:py-3.5 md:bottom-6 md:left-6 md:px-6 md:py-4 lg:bottom-8 lg:left-8">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <Trees className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                <div>
                  <div className="text-2xl font-bold leading-none sm:text-3xl md:text-4xl">
                    {siteConfig.howItWorks.stats.number}
                  </div>
                  <div className="text-[11px] leading-tight sm:text-xs md:text-sm">
                    {siteConfig.howItWorks.stats.text}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
              {siteConfig.howItWorks.label}
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl md:mb-4 md:text-5xl">
              {siteConfig.howItWorks.title}
            </h2>

            <p className="mb-6 max-w-prose text-sm leading-relaxed text-muted-foreground sm:mb-8">
              {siteConfig.howItWorks.description}
            </p>

            {/* Steps */}
            <div className="space-y-4 sm:space-y-5">
              {siteConfig.howItWorks.steps.map((step: Step, index: number) => {
                const Icon = iconMap[step.icon];
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent sm:h-7 sm:w-7">
                      <Icon className="h-4 w-4 text-foreground sm:h-4.5 sm:w-4.5" />
                    </div>
                    <div className="text-sm sm:text-base">
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

export default HowItWorks;