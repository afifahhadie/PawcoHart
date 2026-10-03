import { createFileRoute } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";
import { Leaf, Recycle, Droplets, ShieldCheck, Info } from "lucide-react";
import { WA_LINK } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import productAsset from "@/assets/product.png";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Produk — Pasir Kucing PawcoHart 1 kg" },
      {
        name: "description",
        content:
          "Pasir Kucing PawcoHart variasi kelapa, 1 kg seharga Rp34.500. Antibacterial, biodegradable, flushable, dengan indikator pH alami. Pesan via WhatsApp.",
      },
      { property: "og:title", content: "Produk — Pasir Kucing PawcoHart 1 kg" },
      {
        property: "og:description",
        content: "Pasir kucing sabut kelapa 1 kg, Rp34.500. Pesan langsung via WhatsApp.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const FEATURES = [
  { icon: ShieldCheck, title: "Antibacterial", desc: "Membantu menjaga litter box tetap higienis." },
  { icon: Recycle, title: "Biodegradable", desc: "Terurai alami, ramah lingkungan." },
  { icon: Droplets, title: "Flushable", desc: "Bisa dibuang langsung ke toilet." },
  { icon: Leaf, title: "Daya Serap Tinggi", desc: "Sabut kelapa menyerap cairan dengan cepat." },
];

const STEPS = [
  "Masukkan pasir kucing PawcoHart ke litter box setebal 5–7 cm.",
  "Bersihkan gumpalan menggunakan sekop.",
  "Gumpalan dapat langsung dibuang ke toilet.",
  "Bersihkan litter box dan ganti pasir secara rutin.",
  "Amati perubahan warna pada pasir sebagai indikator awal kondisi urine kucing.",
];

function ProductPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pb-20 pt-32 md:pt-40">
        <div aria-hidden className="blob-alt absolute -left-24 top-32 h-80 w-80 bg-sand/50" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-last lg:order-first">
            <div aria-hidden className="blob absolute inset-6 bg-leaf/20" />
            <img
              src={productAsset}
              alt="Kemasan depan dan belakang Pasir Kucing PawcoHart 1 kg"
              className="animate-float-soft relative mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-clay">Produk Kami</span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Pasir Kucing PawcoHart
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">Variasi Kelapa · 1 kg</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 font-display text-5xl font-semibold text-primary">
                Rp34.500
                <span className="ml-2 font-body text-base font-medium text-muted-foreground">/ kemasan</span>
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Dibuat dari 70% sabut kelapa dengan tambahan tapioka, guar gum, serbuk bunga telang,
                serbuk kunyit, sodium propionat, dan boraks dalam takaran terukur. Dilengkapi
                indikator pH alami yang berubah warna saat terkena urine.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:scale-105"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden />
                Beli via WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-border/60 bg-card p-7 transition-transform duration-300 hover:-translate-y-2">
                <f.icon className="h-8 w-8 text-primary" aria-hidden />
                <h2 className="mt-4 text-lg font-semibold">{f.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-tight md:text-5xl">
              Cara Pemakaian
            </h2>
          </Reveal>
          <ol className="mt-14 space-y-5">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex items-center gap-5 rounded-full bg-card py-3 pl-3 pr-6 shadow-sm">
                  <span className="blob flex h-12 w-12 shrink-0 items-center justify-center bg-primary font-display text-lg font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed md:text-base">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16">
        <Reveal>
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-3xl border border-ember/30 bg-ember/10 p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-ember" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground">
              Hasil perubahan warna berfungsi sebagai indikator awal dan{" "}
              <strong>tidak menggantikan pemeriksaan atau diagnosis oleh dokter hewan.</strong>{" "}
              Simpan di tempat kering, sejuk, dan terhindar dari sinar matahari langsung.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
