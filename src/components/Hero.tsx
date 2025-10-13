import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { Trees } from "lucide-react";

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

      
        <div className="absolute top-0 left-0 w-full z-20 ">
          <div className="container mx-auto px-4 py-4 flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Trees className="w-6 h-6 text-accent" />
              </div> */}
                <img
                src={siteConfig.company.logo}
                alt={`${siteConfig.company.name} logo`}
                className="h-10 w-10 object-contain rounded-full bg-white/80 shadow mr-2"
                />
              <span className="text-xl font-bold text-white font-margarine">{siteConfig.company.name}</span>
            </div>
              <Button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold ml-6"
              >
                CONTACT US
              </Button>
          </div>
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-1 text-center text-white">
        <p className="text-sm md:text-base tracking-wider mb-4 font-light">
          {siteConfig.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-accent">
          {siteConfig.hero.titleHighlight}
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
          {siteConfig.hero.title}
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90">
          {siteConfig.hero.description}
        </p>
      </div>
    </section>
  );
};
