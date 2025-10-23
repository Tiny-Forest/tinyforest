import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export const TreeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const total = siteConfig.trees.items.length;

  const scrollToIndex = (index) => {
    const el = itemRefs.current[index];
    if (el && containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        left: el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const go = (direction) => {
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
    <section className="py-16 md:py-24 bg-[#F5F5F3]">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider text-center">
          {siteConfig.trees.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2C3E2B]">
          {siteConfig.trees.title}
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go("prev")}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md text-primary hover:bg-white/90"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => go("next")}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md text-primary hover:bg-white/90"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Cards container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-10 pb-2"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {siteConfig.trees.items.map((tree, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="snap-center flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden w-64 md:w-72 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={tree.image || "/placeholder.svg"}
                  alt={tree.name}
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-4 bg-[#E9E9E9]">
                  <h3 className="text-lg font-semibold mb-2 text-[#2C3E2B]">
                    {tree.name}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tree.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {siteConfig.trees.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to item ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
