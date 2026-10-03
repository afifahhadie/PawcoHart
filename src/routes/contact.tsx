import { createFileRoute } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin, MessageCircleQuestion, ShoppingBag } from "lucide-react";
import { WA_LINK, WA_NUMBER } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — PawcoHart" },
      {
        name: "description",
        content:
          "Hubungi PawcoHart via WhatsApp di 0822-7252-5320 untuk pemesanan pasir kucing sabut kelapa dan konsultasi produk.",
      },
      { property: "og:title", content: "Kontak — PawcoHart" },
      {
        property: "og:description",
        content: "Pesan atau konsultasi produk PawcoHart langsung via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const CONSULT_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo PawcoHart! Saya ingin bertanya seputar produk pasir kucing PawcoHart.",
)}`;

function ContactPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pb-16 pt-32 md:pt-40">
        <div aria-hidden className="blob absolute -right-24 top-24 h-80 w-80 bg-leaf/15" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-clay">Kontak</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Mari ngobrol bersama kami.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Pemesanan dan konsultasi produk dilayani langsung melalui WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="blob group flex h-full flex-col items-start bg-primary p-10 text-primary-foreground transition-transform duration-300 hover:-translate-y-1 md:p-12"
            >
              <ShoppingBag className="h-9 w-9" aria-hidden />
              <h2 className="mt-5 text-2xl font-semibold">Pesan Produk</h2>
              <p className="mt-2 opacity-90">Pasir Kucing PawcoHart 1 kg — Rp34.500 / kemasan.</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white">
                <FaWhatsapp className="h-5 w-5" aria-hidden />
                Beli via WhatsApp
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={CONSULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="blob-alt group flex h-full flex-col items-start bg-sand/70 p-10 transition-transform duration-300 hover:-translate-y-1 md:p-12"
            >
              <MessageCircleQuestion className="h-9 w-9 text-primary" aria-hidden />
              <h2 className="mt-5 text-2xl font-semibold">Konsultasi Produk</h2>
              <p className="mt-2 text-muted-foreground">
                Punya pertanyaan tentang pemakaian atau indikator pH? Tanyakan saja.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-forest-foreground">
                <FaWhatsapp className="h-5 w-5" aria-hidden />
                Chat Kami
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-border/60 bg-card p-7">
              <FaWhatsapp className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-semibold">WhatsApp</h3>
              <p className="mt-1 text-sm text-muted-foreground">0822-7252-5320</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border/60 bg-card p-7">
              <MapPin className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-semibold">Asal Bahan Baku</h3>
              <p className="mt-1 text-sm text-muted-foreground">Kabupaten Indragiri Hilir, Riau</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-3xl border border-border/60 bg-card p-7">
              <MapPin className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-semibold">Tempat Produksi</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sleman, Yogyakarta</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
