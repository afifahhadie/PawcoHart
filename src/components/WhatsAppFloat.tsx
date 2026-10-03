import { FaWhatsapp } from "react-icons/fa";
import { WA_LINK } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp PawcoHart"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none translate-x-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-forest-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Chat Kami
      </span>
      <span className="animate-wa-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
        <FaWhatsapp className="animate-wa-wiggle h-7 w-7" aria-hidden />
      </span>
    </a>
  );
}
