import { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface VideoSectionProps {
  index: number;
}

export const VideoSection = ({ index }: VideoSectionProps) => {
  const section = siteConfig.videoSections[index];
  const isReversed = index % 2 === 1;
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = extractYouTubeID(section.youtubeUrl);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section className="py-6 md:py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* ---------- Left: Text Side ---------- */}
          <div className={isReversed ? "lg:order-2" : ""}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {section.title}
            </h2>
            <p className="text-muted-foreground mb-8">{section.description}</p>

            <div className="space-y-4">
              {siteConfig.videoSections[index].steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      {step.title}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Right: Video Side ---------- */}
          <div className={isReversed ? "lg:order-1" : ""}>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200 group">
              {!isPlaying ? (
                <>
                  {/* YouTube thumbnail */}
                  <img
                    src={thumbnail}
                    alt={section.title}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                    onClick={() => setIsPlaying(true)}
                  />

                  {/* Play overlay */}
                  <div
                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={section.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Utility: Extract YouTube ID from various URL formats
function extractYouTubeID(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : url; // fallback if direct ID provided
}
