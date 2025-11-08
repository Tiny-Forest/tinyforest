import { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Quote } from "lucide-react";

type TestimonialsProps = {
  interval?: number; // milliseconds
};

export const Testimonials: React.FC<TestimonialsProps> = ({
  interval = 3000,
}) => {
  const items = siteConfig.testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!items || items.length === 0) return;
    if (paused) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [interval, paused, items]);

  if (!items || items.length === 0) return null;

  return (
    <section
      className="py-10 md:py-14 bg-primary/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider text-center">
          {siteConfig.testimonials.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
          {siteConfig.testimonials.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-60 rounded-full overflow-hidden bg-muted">
                <img
                  src={items[activeIndex].image || "/placeholder.svg"}
                  alt={items[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent" />
            </div>

            <div className="flex-1">
              <p className="text-muted-foreground mb-6 text-center md:text-left leading-relaxed">
                "{items[activeIndex].quote}"
              </p>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground">
                  {items[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {items[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-accent w-8" : "bg-muted"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
