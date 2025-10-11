import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.company.name}</h3>
            <p className="text-sm opacity-90 max-w-md">
              {siteConfig.company.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-sm opacity-90">
              {siteConfig.company.address.line1}<br />
              {siteConfig.company.address.line2}<br />
              {siteConfig.company.address.line3}<br />
              {siteConfig.company.address.line4}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
