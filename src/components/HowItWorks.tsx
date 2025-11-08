import {
  CircleCheckBig,
  CircleDot,
  Trees,
  Droplets,
  TrendingUp,
} from "lucide-react";
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
    <section className="bg-primary/10 overflow-hidden py-3 sm:py-6 lg:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-2">
          {/* ---------- Image Side ---------- */}
          <div className="relative">
            {/* --- Decorative background shapes --- */}
            {/* Green rectangle behind top part of image */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -left-10 lg:-top-32 lg:-left-60 w-2/3 sm:w-[65%] lg:w-[100%] h-[90%] bg-[#2E4830] rounded-none -z-10"
            />
            {/* Yellow vertical strip beside image */}
            <div
              aria-hidden="true"
              className="absolute -left-2 -right-10 bottom-6 top-38 sm:bottom-10 sm:-left-4  w-3 sm:w-3 lg:w-8 h-[40%] bg-[#E5B94A] rounded-md"
            />

            {/* --- Image --- */}
            <div className="relative lg:aspect-[5/5] overflow-hidden rounded-xl bg-primary/5 shadow-sm">
              <img
                src="/how-it-works.png"
                alt="Native tree planting at Tiny Forest"
                loading="lazy"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            {/* --- Stats Badge (already perfect) --- */}
            <div className="pointer-events-none absolute bottom-3 left-3 select-none rounded-lg bg-primary px-4 py-3 text-white shadow-xl sm:bottom-4 sm:left-4 sm:px-5 sm:py-3.5 md:bottom-6 md:left-6 md:px-6 md:py-4 lg:bottom-1 lg:left-1">
              {" "}
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

          {/* ---------- Content Side ---------- */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
              {siteConfig.howItWorks.label}
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground md:mb-4 md:text-4xl">
              {siteConfig.howItWorks.title}
            </h2>

            <p className="mb-6 max-w-prose text-lg leading-relaxed text-muted-foreground sm:mb-8">
              {siteConfig.howItWorks.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
