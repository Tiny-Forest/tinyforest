import { Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface VideoSectionProps {
  index: number;
}

export const VideoSection = ({ index }: VideoSectionProps) => {
  const section = siteConfig.videoSections[index];
  const isReversed = index % 2 === 1;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={isReversed ? 'lg:order-2' : ''}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {section.title}
            </h2>
            <p className="text-muted-foreground mb-8">
              {section.description}
            </p>
            
            <div className="space-y-4">
              {siteConfig.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{step.title}</span>{" "}
                    <span className="text-muted-foreground">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Side */}
          <div className={isReversed ? 'lg:order-1' : ''}>
            <div className="relative aspect-video bg-primary/20 rounded-lg overflow-hidden group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                poster={section.videoThumbnail}
              >
                <source src={section.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
              <p className="absolute bottom-6 right-6 text-accent font-script text-2xl">
                Watch the video
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
