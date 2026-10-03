export const WA_NUMBER = "6282272525320";

export const WA_MESSAGE = encodeURIComponent(
  "Halo PawcoHart! Saya ingin memesan Pasir Kucing PawcoHart (1 kg – Rp34.500/kemasan). Mohon info ketersediaan dan cara pemesanannya. Terima kasih!",
);

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const NAV_ITEMS = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang Kami" },
  { to: "/product", label: "Produk" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Kontak" },
] as const;
