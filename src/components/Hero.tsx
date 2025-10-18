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
          <div className="container mx-2 px-4 py-4 flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
                <img
                src={siteConfig.company.logo}
                alt={`${siteConfig.company.name} logo`}
                className="h-10 w-10 object-contain rounded-full bg-white/80 shadow mr-0"
                />
              <span className="md:text-3xl text-xl font-thin text-white font-script">{siteConfig.company.name}</span>
            </div>
                <div className="fixed top-4 right-4 z-50 flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <Button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-28 md:w-auto px-8 py-1 text-xs  md:px-7 md:py-2 md:text-xs bg-accent hover:bg-accent/90 text-foreground font-extralight"
                    aria-label="Contact us"
                    >
                    CONTACT US
                    </Button>

                  <Button
                    onClick={() => {
                      const url = siteConfig.company?.whatsappUrl;
                      if (!url || url === "#") return;
                      window.open(url, "_blank");
                    }}
                    className="w-28 md:w-auto px-8 py-1 text-xs md:px-7 md:py-2 md:text-xs bg-accent hover:bg-accent/90 text-foreground font-extralight"
                    aria-label="WhatsApp us"
                  >
                    WHATSAPP US
                  </Button>
                </div>
          </div>
        </div>

      {/* Content */}
      <div className="relative z-10 container px-1 text-left ml-3 md:ml-36 text-white">
        <p className="text-sm md:text-base tracking-wide font-light">
          {siteConfig.hero.subtitle}
        </p>
        <img
          src="/banner_underline.svg"
          alt="banner underline"
          className="relative h-6 w-32 md:h-5 md:w-36 -top-3"
        />
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 -mt-4 md:-mt-4 text-accent">
          {siteConfig.hero.titleHighlight}
        </h1>
        <img
          src="/banner_flower.svg"
          alt="banner flower"
          className="relative h-6 w-34 md:h-10 md:w-64 -top-16 md:-top-20 -right-52 md:-right-44"
        />
        <h1 className="text-4xl lg:text-5xl font-bold md:w-30 w-90 mb-2 -mt-9">
          {siteConfig.hero.title}
        </h1>
        <p className="text-xs md:text-sm max-w-2xl text-left md:w-1/3 w-80 text-white/90">
          {siteConfig.hero.description}
        </p>
      </div>
    </section>
  );
};
