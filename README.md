# RentCar — Website Booking Rental Mobil

Website rental mobil berbasis React yang dibuat untuk mempermudah proses booking melalui WhatsApp.

Daripada customer harus mengetik ulang detail rental satu per satu, website membantu menyusun informasi pemesanan terlebih dahulu lalu membuat format chat WhatsApp secara otomatis.

## Fitur

- Katalog kendaraan
- Pencarian berdasarkan nama mobil
- Filter status kendaraan
- Status ketersediaan kendaraan
- Estimasi harga rental
- Form booking
- Generate pesan WhatsApp otomatis
- Responsive untuk mobile

## Alur Booking


Pilih Mobil
    ↓
Isi Detail Rental
    ↓
Lihat Estimasi Harga
    ↓
Generate Pesan Booking
    ↓
Lanjut ke WhatsApp


## Tech Stack

* React
* JavaScript
* Tailwind CSS
* Framer Motion
* Vite
* Git / GitHub
* Netlify

## Development Workflow

Project ini juga digunakan untuk melatih workflow development yang lebih terstruktur, seperti:

* feature branch
* ticket-based development
* pull request
* code review
* revision
* regression testing

Contoh ticket yang sudah dikerjakan:

FLT-014 — Vehicle Search & Availability Filter

## Struktur Project
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
├── data/
├── animations/
├── App.jsx
└── main.jsx

Data kendaraan, informasi bisnis, dan konfigurasi lain dipisahkan dari komponen utama agar project lebih mudah dirawat dan dikembangkan.

## Menjalankan Project

git clone https://github.com/RidhoMuhp/RentCar.git
cd RentCar
npm install
npm run dev

## Build


npm run build


## Demo

[https://rentalcarmks.netlify.app](https://rentalcarmks.netlify.app)

## Status

Masih dalam tahap pengembangan.

Fokus pengembangan saat ini:

* behavior status kendaraan
* booking flow
* mobile usability
* struktur komponen
* regression testing

