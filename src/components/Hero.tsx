"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

declare global {
  interface Window {
    zaraz?: {
      track: (event: string, params?: Record<string, any>) => void;
    };
  }
}

export const Hero = () => {
  // ✅ Brochure Download Tracker
  const handleDownloadClick = () => {
    if (typeof window !== "undefined" && window.zaraz?.track) {
      window.zaraz.track("download_brochure", {
        content_name: "TinyForest_Brochure",
      });
      console.log("Zaraz event: download_brochure fired");
    } else {
      console.log("Zaraz not yet ready (expected in local dev)");
    }

    // ✅ Trigger actual download
    const link = document.createElement("a");
    link.href = siteConfig.youtube.brochureUrl;
    link.download = "TinyForest_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ WhatsApp Click Tracker
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.zaraz?.track) {
      window.zaraz.track("whatsapp_click", {
        content_name: "TinyForest_WhatsApp",
      });
      console.log("Zaraz event: whatsapp_click fired");
    } else {
      console.log("Zaraz not yet ready (expected in local dev)");
    }

    // ✅ Open WhatsApp
    const url = siteConfig.company?.whatsappUrl;
    if (!url || url === "#") return;
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* -------- Background Video -------- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="video-wrapper w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.78vh] h-screen min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/2DEwPTkcaqE?autoplay=1&mute=1&loop=1&playlist=2DEwPTkcaqE&controls=0&showinfo=0&modestbranding=1&start=00&end=90"
            title="Tiny Forest Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* -------- Header (Logo + Buttons) -------- */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-2 px-4 py-4 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <img
              src={siteConfig.company.logo}
              alt={`${siteConfig.company.name} logo`}
              className="h-11 w-11 object-contain rounded-full bg-white/80 shadow mr-0"
            />
            <span
              className="md:text-2xl text-xl font-thin text-white"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {siteConfig.company.name}
            </span>
          </div>

          {/* -------- Buttons -------- */}
          <div className="fixed top-4 right-4 z-50 flex flex-col md:flex-row items-center gap-2 md:gap-3">
            {/* Download Brochure Button */}
            <Button
              onClick={handleDownloadClick}
              className="w-36 md:w-auto px-8 py-1 text-xs md:px-7 md:py-2 md:text-xs bg-accent hover:bg-accent/90 text-foreground font-extralight"
              aria-label="Download TinyForest Brochure"
            >
              DOWNLOAD BROCHURE
            </Button>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-28 md:w-auto px-8 py-1 text-xs md:px-7 md:py-2 md:text-xs bg-accent hover:bg-accent/90 text-foreground font-extralight"
              aria-label="WhatsApp us"
            >
              WHATSAPP US
            </Button>
          </div>
        </div>
      </div>

      {/* -------- Hero Text -------- */}
      <div className="relative z-10 container px-1 text-left ml-3 md:ml-36 text-white">
        <p className="text-sm md:text-base tracking-wide -font-livvic-regular">
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
