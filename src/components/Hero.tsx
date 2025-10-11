import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={siteConfig.hero.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="text-sm md:text-base tracking-wider mb-4 font-light">
          {siteConfig.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
          {siteConfig.hero.title}
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-accent">
          {siteConfig.hero.titleHighlight}
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
          {siteConfig.hero.description}
        </p>
      </div>
    </section>
  );
};
