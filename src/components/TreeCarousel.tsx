import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export const TreeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToTree = (direction: "prev" | "next") => {
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % siteConfig.trees.items.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + siteConfig.trees.items.length) % siteConfig.trees.items.length);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider text-center">
          {siteConfig.trees.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          {siteConfig.trees.title}
        </h2>

        <div className="relative">
          {/* Desktop: Show 4 cards */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {siteConfig.trees.items.map((tree, index) => (
              <div
                key={index}
                className="bg-primary text-white rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={tree.image || "/placeholder.svg"}
                    alt={tree.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{tree.name}</h3>
                    <p className="text-sm opacity-90 line-clamp-4 mb-4">
                      {tree.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 rounded-full bg-white text-primary hover:bg-white/90"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Show carousel */}
          <div className="md:hidden">
            <div className="bg-primary text-white rounded-xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img
                  src={siteConfig.trees.items[activeIndex].image || "/placeholder.svg"}
                  alt={siteConfig.trees.items[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {siteConfig.trees.items[activeIndex].name}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {siteConfig.trees.items[activeIndex].description}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full bg-white text-primary"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {siteConfig.trees.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
