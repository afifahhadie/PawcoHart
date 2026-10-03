import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Info, Leaf, Recycle, HeartPulse } from "lucide-react";
import { WA_LINK } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Product Knowledge — PawcoHart" },
      {
        name: "description",
        content:
          "Pelajari bagaimana PawcoHart memanfaatkan limbah sabut kelapa dan indikator pH alami untuk membantu memantau kondisi urine kucing.",
      },
      { property: "og:title", content: "Product Knowledge — PawcoHart" },
      {
        property: "og:description",
        content: "Edukasi tentang sabut kelapa dan indikator pH alami pada pasir kucing PawcoHart.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const PH_STATES = [
  {
    key: "asam",
    label: "Asam",
    range: "pH < 6",
    swatch: "oklch(0.62 0.17 20)",
    desc: "Pasir menunjukkan perubahan warna ke arah kemerahan. Kondisi urine lebih asam dari biasanya — perhatikan pola minum dan pakan kucing.",
  },
  {
    key: "netral",
    label: "Netral",
    range: "pH 6–7",
    swatch: "oklch(0.55 0.14 290)",
    desc: "Warna cenderung tetap atau berubah sangat halus. Kondisi urine berada dalam rentang yang umumnya dianggap normal.",
  },
  {
    key: "basa",
    label: "Basa",
    range: "pH > 7",
    swatch: "oklch(0.55 0.12 175)",
    desc: "Pasir menunjukkan perubahan warna ke arah kehijauan/kebiruan. Urine lebih basa — pertimbangkan untuk berkonsultasi dengan dokter hewan bila terjadi berulang.",
  },
] as const;

function PhIndicator() {
  const [active, setActive] = useState(1);
  const state = PH_STATES[active] ?? PH_STATES[0];

  return (
    <div className="rounded-[2.5rem] border border-border/60 bg-card p-6 shadow-xl shadow-primary/5 md:p-10">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <div className="relative mx-auto h-48 w-48 md:h-56 md:w-56">
          <div aria-hidden className="blob absolute inset-0 bg-sand transition-all duration-700" />
          <div
            aria-hidden
            className="blob-alt absolute inset-8 transition-colors duration-700"
            style={{ backgroundColor: state.swatch, opacity: 0.85 }}
          />
          <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-semibold text-white drop-shadow">
            {state.range}
          </span>
        </div>
        <div>
          <div role="tablist" aria-label="Pilih kondisi pH urine" className="flex flex-wrap gap-2">
            {PH_STATES.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  active === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: s.swatch }}
                  aria-hidden
                />
                {s.label}
              </button>
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={2}
            step={1}
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            aria-label="Geser untuk melihat perubahan warna indikator pH"
            className="mt-6 w-full accent-[var(--primary)]"
          />
          <h3 className="mt-6 text-2xl font-semibold">Urine {state.label}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{state.desc}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            Ilustrasi warna bersifat representatif dan dapat sedikit berbeda pada pemakaian nyata.
          </p>
        </div>
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pb-12 pt-32 md:pt-40">
        <div aria-hidden className="blob absolute -left-24 top-24 h-72 w-72 bg-leaf/15" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-clay">
              Edukasi
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Product Knowledge
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Mengenal lebih dekat bahan, cara kerja, dan indikator pH alami di balik PawcoHart.
            </p>
          </Reveal>
        </div>
      </section>

      <article className="px-6 pb-16">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
          <Reveal>
            <p>
              <span className="float-left mr-3 font-display text-6xl font-semibold leading-none text-primary">
                P
              </span>
              awcoHart hadir dari dua permasalahan yang saling berkaitan, yaitu limbah sabut kelapa
              yang belum dimanfaatkan secara optimal serta kebutuhan pemilik kucing untuk lebih
              mudah memantau kondisi urine hewan peliharaannya.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex gap-4 rounded-3xl bg-sand/50 p-6">
              <Recycle className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <p>
                Di Kabupaten Indragiri Hilir, Riau, limbah sabut kelapa masih banyak dibiarkan
                membusuk meskipun memiliki kemampuan menyerap air yang tinggi dan bersifat
                biodegradable. Potensi tersebut kemudian dimanfaatkan sebagai bahan utama PawcoHart
                sehingga limbah sabut kelapa dapat memiliki nilai guna yang lebih tinggi.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex gap-4 rounded-3xl bg-secondary p-6">
              <HeartPulse className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <p>
                Di sisi lain, perubahan kondisi urine dapat menjadi salah satu hal yang perlu
                diperhatikan dalam pemantauan kesehatan saluran kemih kucing. PawcoHart dilengkapi
                dengan indikator pH alami yang memberikan perubahan warna ketika terkena urine
                dengan kondisi asam, netral, atau basa. Perubahan tersebut membantu pemilik kucing
                melakukan pemantauan awal terhadap kondisi urine secara lebih praktis dalam
                penggunaan sehari-hari.
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-8 text-balance text-center text-3xl font-semibold tracking-tight md:text-4xl">
              Coba indikator pH interaktif
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <PhIndicator />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
          <Reveal>
            <div className="flex gap-4">
              <Leaf className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <p>
                Dengan memanfaatkan 70% sabut kelapa sebagai bahan utama, PawcoHart dikembangkan
                sebagai pasir kucing yang tidak hanya mendukung kebersihan litter box, tetapi juga
                membawa nilai tambah dari sisi lingkungan dan pemantauan kesehatan. PawcoHart
                menggabungkan pemanfaatan limbah organik, daya serap sabut kelapa, serta indikator
                pH alami dalam satu inovasi produk.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-start gap-4 rounded-3xl border border-ember/30 bg-ember/10 p-6">
              <Info className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden />
              <p className="text-sm md:text-base">
                Hasil perubahan warna berfungsi sebagai indikator awal dan{" "}
                <strong>tidak menggantikan pemeriksaan atau diagnosis oleh dokter hewan.</strong>
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="pt-6 text-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden />
                Beli via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
