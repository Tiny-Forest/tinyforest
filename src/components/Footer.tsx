import { siteConfig } from "@/config/siteConfig";
import { LucidePhone } from "lucide-react";
import { LucideMail } from "lucide-react";

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
            <h3 className="text-xl font-semibold">Tiny Forest</h3>
          </div>
          <p className="text-base text-gray-100 max-w-xs leading-relaxed">
            Creating sustainable micro-forests across the nation.
            Invest in nature, invest in your future.
          </p>
        </div>

        {/* --- Center: Contact Info --- */}
        <div className="text-base text-gray-100 text-center md:text-left space-y-2">
          <h4 className="font-semibold text-white mb-1">Contact Us</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <LucidePhone /> {siteConfig.company.phone[0]}
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <LucideMail /> {siteConfig.company.email}
          </p>
        </div>

        {/* --- Right: QR + Credits --- */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center space-y-1">
          <img
            src="/qr_image.png"
            alt="Scan for Panjapur Location"
            className="w-32 h-32 rounded-md bg-white p-1"
          />
          <p className="text-[13px] text-gray-200">Scan for Panjapur Location</p>
        </div>
      </div>
    </footer>
  );
};
