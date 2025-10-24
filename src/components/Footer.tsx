import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-[#546A44] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* --- Left: Logo + Text --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Tiny Forest Logo"
              className="w-8 h-8 rounded-full"
            />
            <h3 className="text-lg font-semibold">Tiny Forest</h3>
          </div>
          <p className="text-sm text-gray-100 max-w-xs leading-relaxed">
            Creating sustainable micro-forests across the nation.
            Invest in nature, invest in your future.
          </p>
        </div>

        {/* --- Center: Contact Info --- */}
        <div className="text-sm text-gray-100 text-center md:text-left space-y-2">
          <h4 className="font-semibold text-white mb-1">Contact Us</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <span role="img" aria-label="phone">📞</span> +1 (555) 123-4567
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <span role="img" aria-label="email">✉️</span> tinyforestgardens@gmail.com
          </p>
        </div>

        {/* --- Right: QR + Credits --- */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
          <img
            src="/qr_image.png"
            alt="Scan for Panjapur Location"
            className="w-20 h-20 rounded-md bg-white p-1"
          />
          <p className="text-[10px] text-gray-200">Scan for Panjapur Location</p>
          <p className="text-[11px] text-gray-200 mt-2">
            Marketed by <span className="font-semibold">CRESO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
