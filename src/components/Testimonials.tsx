import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider text-center">
          {siteConfig.testimonials.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
          {siteConfig.testimonials.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-muted">
                <img
                  src={siteConfig.testimonials.items[activeIndex].image || "/placeholder.svg"}
                  alt={siteConfig.testimonials.items[activeIndex].name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-muted-foreground mb-6 text-center md:text-left leading-relaxed">
                "{siteConfig.testimonials.items[activeIndex].quote}"
              </p>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground">
                  {siteConfig.testimonials.items[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.testimonials.items[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {siteConfig.testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-accent w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
