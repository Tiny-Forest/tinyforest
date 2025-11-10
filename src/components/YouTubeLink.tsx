"use client";
import { siteConfig } from "@/config/siteConfig";
import { Youtube, Download } from "lucide-react";

declare global {
  interface Window {
    zaraz?: {
      track: (event: string, params?: Record<string, any>) => void;
    };
  }
}

export const YouTubeLink = () => {
  const handleDownloadClick = () => {
    if (typeof window !== "undefined" && window.zaraz?.track) {
      window.zaraz.track("download_brochure", {
        content_name: "TinyForest_Brochure",
      });
      console.log("TinyForest");
    } else {
      console.log("Zaraz not yet ready (expected in local dev)");
    }
  };

  return (
    <section className="py-8 md:py-12 bg-red-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 text-center">
        {/* YouTube Button */}
        <a
          href={siteConfig.youtube.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center justify-center gap-3"
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-24 md:h-24 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Youtube className="w-12 h-12 md:w-14 md:h-14 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
          </div>
          <span className="text-base md:text-lg font-semibold text-red-700 mt-2">
            YouTube Channel
          </span>
        </a>

        {/* Divider */}
        <div className="hidden md:block w-[2px] h-20 bg-red-200" />

        {/* Download Brochure */}
        <a
          href={siteConfig.youtube.brochureUrl}
          download="TinyForest_Brochure.pdf"
          onClick={handleDownloadClick}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          Download Brochure
        </a>
      </div>
    </section>
  );
};
