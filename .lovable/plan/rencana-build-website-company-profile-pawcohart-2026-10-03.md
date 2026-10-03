# Rencana Build — Website Company Profile PawcoHart

## Ringkasan

Website company profile statis untuk **PawcoHart**, pasir kucing berbahan 70% sabut kelapa dengan indikator pH alami. Bahasa Indonesia penuh, mobile-first, tanpa backend/database/e-commerce. Konversi utama: tombol WhatsApp ke **082272525320** dengan pesan pemesanan otomatis.

## Struktur Halaman (5 route)

```text
/         — Home
/about    — Tentang Kami
/product  — Produk
/blog     — Product Knowledge
/contact  — Kontak
```

### 1. Home (/)
- Hero organik dengan foto produk, headline brand, CTA "Beli via WhatsApp"
- Keunggulan utama: Antibacterial, Biodegradable, Flushable, indikator pH alami
- Cuplikan cerita brand (limbah sabut kelapa Indragiri Hilir, Riau)
- Statistik dengan animasi count-up (70% sabut kelapa, 1 kg, dll.)
- CTA section menuju WhatsApp

### 2. Tentang Kami (/about)
- Cerita brand: dua permasalahan (limbah sabut kelapa + pemantauan urine kucing)
- Profil tim dengan foto yang diunggah:
  - **Hayya Majida Amani** — R&D Director
  - **Arsi Cahyani** — Production & Quality Director
  - **Pratiwi Putri Hasibuan** — Finance and Marketing Director
- Nilai brand: ramah lingkungan, inovasi, kepedulian kesehatan hewan

### 3. Produk (/product)
- Foto kemasan (Product.png), harga **Rp34.500 / kemasan 1 kg**, satu varian (Kelapa)
- Keunggulan: Antibacterial, Biodegradable, Flushable, daya serap tinggi
- Cara pemakaian (5 langkah dari kemasan)
- Disclaimer: indikator warna adalah indikator awal, bukan pengganti diagnosis dokter hewan
- CTA "Beli via WhatsApp" dengan pesan otomatis berisi detail pemesanan

### 4. Product Knowledge (/blog)
- Konten edukasi sesuai teks yang diberikan: latar belakang limbah sabut kelapa, indikator pH alami, manfaat lingkungan & kesehatan
- **Indikator pH interaktif**: visualisasi perubahan warna untuk kondisi asam / netral / basa
- Tanpa daftar artikel, tanpa halaman detail artikel

### 5. Kontak (/contact)
- CTA WhatsApp utama, info lokasi (Indragiri Hilir, Riau / Sleman, Yogyakarta dari kemasan)
- Tanpa form email backend — semua diarahkan ke WhatsApp

## Elemen Global

- **Navbar floating pill**: logo kiri, navigasi tengah, CTA "Beli via WhatsApp" kanan; mengecil saat scroll dengan blur + shadow; indikator halaman aktif bergerak halus; mobile pakai hamburger dengan panel animasi
- **Floating WhatsApp button** di semua halaman: ikon `FaWhatsapp` (react-icons), hijau `#25D366`, pulse ring, label hover "Chat Kami", `aria-label="Chat WhatsApp PawcoHart"`, buka tab baru
- **Footer** sederhana dengan navigasi dan tagline
- **Favicon** dari Logo.png

## Desain

- Palet: hijau alami, hijau forest gelap, cokelat earthy, krem hangat; oranye hanya aksen kecil; **tanpa ungu dari logo**
- Shape language: blob organik, sudut membulat, layer tumpuk, transisi wave antar section, whitespace lega, layout editorial — bukan kotak-kotak kaku
- Animasi halus (transform/opacity saja): scroll reveal, fade-up, floating image, parallax ringan, count-up, marquee, scroll progress; hormati `prefers-reduced-motion`
- Tipografi: font display hangat + sans modern, dimuat via `<link>` di root route

## Teknis

- TanStack Start + Tailwind v4 (token warna oklch di `src/styles.css`), react-icons untuk WhatsApp
- Gambar unggahan (logo, produk, 3 foto tim) dipakai langsung sebagai aset aplikasi via lovable-assets; favicon dari Logo.png di `public/`
- Gambar pendukung (hero/tekstur sabut kelapa) digenerate bila perlu
- Setiap route punya `head()` sendiri: title, description, og:title, og:description unik berbahasa Indonesia
- WhatsApp link: `https://wa.me/6282272525320?text=<pesan pemesanan ter-encode>`
- Verifikasi: build bersih + cek visual tiap halaman di viewport mobile dan desktop
