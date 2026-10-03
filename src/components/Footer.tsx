import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_ITEMS, WA_LINK } from "@/lib/site";
import logoAsset from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-forest text-forest-foreground">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute -top-px left-0 h-12 w-full text-background md:h-20"
      >
        <path
          d="M0,0 L1440,0 L1440,20 C1200,70 960,10 720,40 C480,70 240,20 0,50 Z"
          fill="currentColor"
        />
      </svg>
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-28">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="Logo PawcoHart" className="h-12 w-12 rounded-full bg-card" />
              <span className="font-display text-2xl font-semibold">PawcoHart</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
              Pasir kucing alami dari 70% sabut kelapa dengan indikator pH alami — bersih untuk
              litter box, baik untuk lingkungan, dan membantu memantau kesehatan kucing kesayangan.
            </p>
          </div>
          <nav aria-label="Navigasi footer">
            <h3 className="text-sm font-semibold uppercase tracking-widest opacity-70">Jelajahi</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="opacity-80 transition-opacity hover:opacity-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest opacity-70">Hubungi Kami</h3>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              0822-7252-5320
            </a>
            <p className="mt-4 text-sm opacity-80">
              Indragiri Hilir, Riau
              <br />
              Sleman, Yogyakarta
            </p>
          </div>
        </div>
        <p className="mt-12 border-t border-forest-foreground/15 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} PawcoHart. Pasir kucing alami dari sabut kelapa.
        </p>
      </div>
    </footer>
  );
}
