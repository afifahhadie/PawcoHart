import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Lightbulb, HeartPulse } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hayyaAsset from "@/assets/hayya.jpg";
import arsiAsset from "@/assets/arsi.jpg";
import pratiwiAsset from "@/assets/pratiwi.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — PawcoHart" },
      {
        name: "description",
        content:
          "Kenali cerita di balik PawcoHart: inovasi pasir kucing dari limbah sabut kelapa Indragiri Hilir, Riau, serta tim yang mengembangkannya.",
      },
      { property: "og:title", content: "Tentang Kami — PawcoHart" },
      {
        property: "og:description",
        content: "Cerita brand dan tim di balik PawcoHart, pasir kucing alami dari sabut kelapa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  {
    name: "Hayya Majida Amani",
    role: "R&D Director",
    photo: hayyaAsset,
  },
  {
    name: "Arsi Cahyani",
    role: "Production & Quality Director",
    photo: arsiAsset,
  },
  {
    name: "Pratiwi Putri Hasibuan",
    role: "Finance and Marketing Director",
    photo: pratiwiAsset,
  },
];

const VALUES = [
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    desc: "Mengolah limbah sabut kelapa menjadi produk bernilai guna dan biodegradable.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    desc: "Menggabungkan daya serap alami sabut kelapa dengan indikator pH alami dalam satu produk.",
  },
  {
    icon: HeartPulse,
    title: "Peduli Kesehatan Kucing",
    desc: "Membantu pemilik melakukan pemantauan awal kondisi urine secara praktis setiap hari.",
  },
];

function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pb-16 pt-32 md:pt-40">
        <div aria-hidden className="blob absolute -right-24 top-20 h-80 w-80 bg-leaf/15" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-clay">Tentang Kami</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Berawal dari dua masalah yang saling terhubung.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <Reveal>
            <div className="blob-alt h-full bg-sand/60 p-10 md:p-12">
              <span className="font-display text-6xl font-semibold text-primary/30">01</span>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Limbah sabut kelapa</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Di Kabupaten Indragiri Hilir, Riau, limbah sabut kelapa masih banyak dibiarkan
                membusuk meskipun memiliki kemampuan menyerap air yang tinggi dan bersifat
                biodegradable. Potensi inilah yang kami manfaatkan sebagai bahan utama PawcoHart.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="blob h-full bg-secondary p-10 md:p-12">
              <span className="font-display text-6xl font-semibold text-primary/30">02</span>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Kesehatan kucing</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Perubahan kondisi urine dapat menjadi hal penting dalam pemantauan kesehatan
                saluran kemih kucing. PawcoHart hadir dengan indikator pH alami agar pemilik dapat
                memantaunya secara lebih praktis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest px-6 py-24 text-forest-foreground">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-tight md:text-5xl">
              Nilai yang kami pegang
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="text-center">
                  <div className="blob mx-auto flex h-16 w-16 items-center justify-center bg-leaf/25">
                    <v.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-tight md:text-5xl">
              Tim di balik PawcoHart
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <article className="group text-center">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-xs">
                    <div
                      aria-hidden
                      className={`${i % 2 ? "blob-alt" : "blob"} absolute inset-0 translate-x-3 translate-y-3 bg-leaf/25 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1`}
                    />
                    <img
                      src={m.photo}
                      alt={`Foto ${m.name}`}
                      loading="lazy"
                      className={`${i % 2 ? "blob-alt" : "blob"} relative h-full w-full object-cover object-[50%_35%]`}
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
