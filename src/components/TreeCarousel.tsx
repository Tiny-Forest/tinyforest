import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export const TreeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const total = siteConfig.trees.items.length;

  const scrollToIndex = (index: number) => {
    const el = itemRefs.current[index];
    if (el && containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        left: el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const go = (direction: "next" | "prev") => {
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  return (
    <section className="py-10 md:py-14 bg-primary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider text-center">
          {siteConfig.trees.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2C3E2B]">
          {siteConfig.trees.title}
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows (desktop only) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go("prev")}
            aria-label="Previous"
            className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md text-primary hover:bg-primary/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => go("next")}
            aria-label="Next"
            className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md text-primary hover:bg-primary/10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Scrollable Track */}
<div
  ref={containerRef}
  className="flex gap-8 overflow-x-auto scroll-smooth px-1 pb-4 md:px-16 bg-primary/1 scrollbar-hide"
  style={{
    WebkitOverflowScrolling: "touch",
    scrollSnapType: "x proximity",
  }}
>
  {siteConfig.trees.items.map((tree, index) => (
    <div
      key={index}
      ref={(el) => (itemRefs.current[index] = el)}
      className="snap-start flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[420px] 
                 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg 
                 transition-all duration-300 flex flex-col"
    >
      {/* Top Image */}
      <div className="relative w-full h-[220px] sm:h-[310px] md:h-[310px] lg:h-[340px] overflow-hidden">
        <img
          src={tree.image || "/placeholder.svg"}
          alt={tree.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Bottom Content */}
      <div className="bg-primary/10 flex-1 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#2C3E2B] mb-2">
            {tree.name}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {tree.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Dots (optional, center bottom) */}
          <div className="flex justify-center gap-2 mt-6">
            {siteConfig.trees.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to item ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeCarousel;
