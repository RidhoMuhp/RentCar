# Makassar Drive — React + Vite

Landing page rental mobil Makassar berbasis React, Tailwind CSS, dan Framer Motion yang siap di-deploy ke Netlify.

## Menjalankan lokal

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Deploy ke Netlify

Hubungkan repository GitHub ke Netlify. Build command dan publish directory sudah disiapkan melalui `netlify.toml`.

## Struktur source

```text
src/
├── components/
│   ├── layout/       # Navbar dan Footer
│   ├── sections/     # Section halaman utama
│   └── ui/           # Komponen kecil yang digunakan ulang
├── config/           # Brand, kontak, WhatsApp, dan lokasi
├── data/             # Data armada dan konten layanan
├── animations/       # Variant animasi Framer Motion reusable
├── App.jsx           # Susunan section halaman
├── main.jsx          # Entry point React
└── style.css         # Entry Tailwind (hanya dua directive)
```

## Bagian yang paling sering diubah

- Nama rental, nomor WhatsApp, telepon, dan lokasi: `src/config/siteConfig.js`
- Daftar serta harga armada: `src/data/cars.js`
- Menu, benefit, dan area layanan: `src/data/content.js`
- Urutan section halaman: `src/App.jsx`
- Warna tema utama dan font: `tailwind.config.js`
- Tampilan setiap bagian: utility class Tailwind di file komponennya
- Konfigurasi animasi bersama: `src/animations/motion.js`
