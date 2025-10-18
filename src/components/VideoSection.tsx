import { Play, Pause } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useRef, useState, useEffect } from "react";

interface VideoSectionProps {
  index: number;
}

export const VideoSection = ({ index }: VideoSectionProps) => {
  const section = siteConfig.videoSections[index];
  const isReversed = index % 2 === 1;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  // showControls determines whether the overlay button is visible.
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const startHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    // auto-hide after 3s if still playing
    hideTimerRef.current = window.setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
      }
    }, 1000);
  };

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        await v.play();
        setIsPlaying(true);
        // hide controls when playback starts
        setShowControls(false);
        startHideTimer();
      } else {
        v.pause();
        setIsPlaying(false);
        // show controls when paused
        setShowControls(true);
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
        }
      }
    } catch (e) {
      console.error("Video playback failed:", e);
    }
  };

  const onPlay = () => {
    setIsPlaying(true);
    setShowControls(false);
    startHideTimer();
  };
  const onPause = () => {
    setIsPlaying(false);
    setShowControls(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
  };

  // When the user clicks/touches the video area:
  // - if playing and controls are hidden => show controls (then auto-hide)
  // - otherwise act like togglePlay (play/pause)
  const handleVideoAreaInteraction = () => {
    if (isPlaying && !showControls) {
      setShowControls(true);
      startHideTimer();
    } else {
      togglePlay();
    }
  };

  // show overlay if controls are visible OR video is paused (so user can always play)
  const shouldShowOverlay = showControls || !isPlaying;

  return (
    <section className="py-16 md:py-24 bg-primary/10">
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
            <div
              className="relative aspect-video bg-primary/20 rounded-lg overflow-hidden group"
              // allow clicking/touching the whole area to reveal/toggle controls
              onClick={handleVideoAreaInteraction}
              onTouchStart={() => {
                // treat touch like click
                if (isPlaying && !showControls) {
                  setShowControls(true);
                  startHideTimer();
                }
              }}
              onMouseMove={() => {
                if (isPlaying) {
                  setShowControls(true);
                  startHideTimer();
                }
              }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={section.videoThumbnail}
                onPlay={onPlay}
                onPause={onPause}
              >
                <source src={section.videoUrl} type="video/mp4" />
              </video>

              {shouldShowOverlay && (
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                  role="button"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  onClick={(e) => {
                    // prevent double handling (container's click)
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-primary ml-1" />
                    ) : (
                      <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
