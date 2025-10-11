import { siteConfig } from "@/config/siteConfig";

export const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider text-center">
          {siteConfig.whyChoose.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          {siteConfig.whyChoose.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.whyChoose.reasons.map((reason, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <img
                src={reason.image || "/placeholder.svg"}
                alt={reason.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white text-sm md:text-base font-medium text-center w-full">
                  {reason.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
