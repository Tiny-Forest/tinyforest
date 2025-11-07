import { TrendingUp, Sprout, Target } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = { TrendingUp, Sprout, Target } as const;

type Feature = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
};

export const HighQualityFarms = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ---------- WEB VIEW ---------- */}
      <div
        className="hidden lg:flex relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/farmer_web.png')" }} // ✅ full web image background
      >
        <div className="container mx-auto flex items-center justify-end px-8 lg:px-36">
          <div className="max-w-xl text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {siteConfig.highQualityFarms.title}
            </h2>

            <div className="space-y-6">
              {siteConfig.highQualityFarms.features.map(
                (feature: Feature, index: number) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-white/20 pb-5 last:border-none"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                        <Icon className="h-6 w-6 text-[#E5B94A]" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{feature.title}</h3>
                        <p className="text-sm opacity-90">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE VIEW ---------- */}
      <div
        className="lg:hidden relative bg-cover h-[1000px] bg-center"
        style={{ backgroundImage: "url('/farmer_mobile.svg')" }} // ✅ replace with your mobile image path
      >
        <div className=" lg:bg-transparent">
          <div className="px-6 pt-80 pb-64 text-white">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              {siteConfig.highQualityFarms.title}
            </h2>

            <div className="space-y-6">
              {siteConfig.highQualityFarms.features.map(
                (feature: Feature, index: number) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-white/20 pb-5 last:border-none"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                        <Icon className="h-6 w-6 text-[#E5B94A]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold">{feature.title}</h3>
                        <p className="text-base opacity-90">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighQualityFarms;
