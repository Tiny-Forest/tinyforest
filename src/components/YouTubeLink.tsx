import { siteConfig } from "@/config/siteConfig";
import { Youtube } from "lucide-react";

export const YouTubeLink = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Visit Our YouTube Channel
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg">
          Watch real transformations of our Tiny Forest projects — from barren
          lands to thriving green spaces.
        </p>

        <a
          href={siteConfig.youtube.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center justify-center gap-3"
        >
          <div className="relative">
            {/* Red circular background */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Youtube className="w-14 h-14 md:w-16 md:h-16 text-white" />
            </div>
            {/* Ripple hover effect */}
            <div className="absolute inset-0 rounded-full border-2 border-[#FF0000]/40 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
          </div>

          <span className="mt-4 text-lg md:text-xl font-semibold text-[#FF0000] group-hover:text-[#cc0000] transition-colors duration-300">
            Subscribe Now
          </span>
        </a>
      </div>
    </section>
  );
};
