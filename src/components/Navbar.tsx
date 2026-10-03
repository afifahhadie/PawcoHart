import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, WA_LINK } from "@/lib/site";
import logoAsset from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-border/60 bg-card/80 shadow-lg shadow-foreground/5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "px-4 py-2" : "px-5 py-3"
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="PawcoHart — Beranda">
          <img
            src={logoAsset}
            alt="Logo PawcoHart"
            className={`rounded-full transition-all duration-300 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`}
          />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            PawcoHart
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 sm:inline-flex"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden />
            Beli via WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-x-4 top-full mt-2 origin-top rounded-3xl border border-border/60 bg-card/95 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                    active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-base font-semibold text-white"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden />
          Beli via WhatsApp
        </a>
      </div>
    </header>
  );
}
