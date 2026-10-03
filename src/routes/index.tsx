import { createFileRoute, Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { Leaf, Recycle, Droplets, HeartPulse, ArrowRight } from "lucide-react";
import { WA_LINK } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import productAsset from "@/assets/product.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PawcoHart — Pasir Kucing Alami dari Sabut Kelapa" },
      {
        name: "description",
        content:
          "PawcoHart adalah pasir kucing alami dari 70% sabut kelapa dengan indikator pH alami. Antibacterial, biodegradable, dan flushable — bersih untuk litter box, baik untuk bumi.",
      },
      { property: "og:title", content: "PawcoHart — Pasir Kucing Alami dari Sabut Kelapa" },
      {
        property: "og:description",
        content:
          "Pasir kucing alami dari sabut kelapa dengan indikator pH untuk memantau kesehatan kucing. Antibacterial, biodegradable, flushable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const ADVANTAGES = [
  {
    icon: HeartPulse,
    title: "Indikator pH Alami",
    desc: "Perubahan warna saat terkena urine asam, netral, atau basa — pemantauan awal kondisi kucing jadi lebih praktis.",
  },
  {
    icon: Leaf,
    title: "Antibacterial",
    desc: "Membantu menjaga litter box tetap higienis dan mengurangi bau tak sedap.",
  },
  {
    icon: Recycle,
    title: "Biodegradable",
    desc: "Terbuat dari 70% sabut kelapa — limbah organik yang kembali ke alam dengan aman.",
  },
  {
    icon: Droplets,
    title: "Flushable",
    desc: "Daya serap tinggi dan bisa dibuang langsung ke toilet. Praktis untuk perawatan harian.",
  },
];

const MARQUEE_ITEMS = ["Antibacterial", "Biodegradable", "Flushable", "Indikator pH Alami", "70% Sabut Kelapa", "Rendah Debu"];

function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-32 md:pt-40">
        <div aria-hidden className="blob absolute -left-32 top-16 h-80 w-80 bg-leaf/15" />
        <div aria-hidden className="blob-alt absolute -right-24 top-64 h-72 w-72 bg-sand/50" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
                <Leaf className="h-3.5 w-3.5" aria-hidden />
                Pasir kucing alami Indonesia
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Litter box bersih, kucing sehat,{" "}
                <span className="text-primary">bumi tersenyum.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                PawcoHart memanfaatkan 70% sabut kelapa menjadi pasir kucing antibacterial,
                biodegradable, dan flushable — lengkap dengan indikator pH alami untuk memantau
                kondisi urine kucing kesayanganmu.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:scale-105"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden />
                  Beli via WhatsApp
                </a>
                <Link
                  to="/product"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-7 py-3 text-base font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  Lihat Produk
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                Rp34.500 / kemasan 1 kg · Variasi Kelapa
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative">
            <div aria-hidden className="blob absolute inset-4 bg-leaf/20" />
            <img
              src={productAsset}
              alt="Kemasan Pasir Kucing PawcoHart 1 kg variasi kelapa"
              className="animate-float-soft relative mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <section aria-hidden className="border-y border-border/60 bg-cream py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-clay">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-tight md:text-5xl">
              Kenapa PawcoHart?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Satu inovasi yang menggabungkan pemanfaatan limbah organik, daya serap sabut kelapa,
              dan indikator pH alami.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 100}>
                <article className="group h-full rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                  <div className="blob flex h-14 w-14 items-center justify-center bg-secondary text-primary transition-transform duration-300 group-hover:scale-110">
                    <adv.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{adv.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{adv.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="relative bg-forest px-6 py-20 text-forest-foreground">
        <div aria-hidden className="blob-alt absolute -right-20 -top-20 h-64 w-64 bg-leaf/20" />
        <div className="relative mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-3">
          <Reveal>
            <p className="font-display text-5xl font-semibold md:text-6xl">
              <CountUp to={70} suffix="%" />
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest opacity-80">Sabut kelapa sebagai bahan utama</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-5xl font-semibold md:text-6xl">
              <CountUp to={1} suffix=" kg" />
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest opacity-80">Kemasan praktis Rp34.500</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="font-display text-5xl font-semibold md:text-6xl">
              <CountUp to={3} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest opacity-80">Kondisi pH urine terdeteksi warna</p>
          </Reveal>
        </div>
      </section>

      {/* Cerita singkat */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="blob-alt relative overflow-hidden bg-sand/60 p-10 md:p-14">
              <Leaf className="h-12 w-12 text-primary" aria-hidden />
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Dari limbah sabut kelapa, menjadi solusi.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Di Kabupaten Indragiri Hilir, Riau, limbah sabut kelapa masih banyak dibiarkan
                membusuk — padahal daya serapnya tinggi dan bersifat biodegradable. PawcoHart
                mengubahnya menjadi pasir kucing bernilai guna tinggi.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-foreground"
              >
                Baca cerita kami
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-5">
              {[
                { title: "Asam", desc: "Warna berubah saat urine lebih asam dari normal", color: "bg-ember" },
                { title: "Netral", desc: "Kondisi urine dalam rentang sehat", color: "bg-leaf" },
                { title: "Basa", desc: "Sinyal awal untuk lebih memperhatikan kesehatan saluran kemih", color: "bg-clay" },
              ].map((s) => (
                <div key={s.title} className="flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-5">
                  <span className={`mt-1 h-4 w-4 shrink-0 rounded-full ${s.color}`} aria-hidden />
                  <div>
                    <h3 className="font-semibold">Urine {s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 pl-1 font-semibold text-primary transition-colors hover:text-foreground"
              >
                Pelajari Product Knowledge
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="blob relative mx-auto max-w-4xl overflow-hidden bg-primary px-8 py-16 text-center text-primary-foreground md:py-20">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Siap beralih ke pasir kucing alami?
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-90">
              Pesan PawcoHart sekarang — cukup satu klik, langsung terhubung dengan tim kami di
              WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden />
              Beli via WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
