export const rentalNeeds = [
  "Perjalanan keluarga",
  "Wisata Makassar",
  "Perjalanan dinas",
  "Antar-jemput bandara",
  "Pernikahan / acara",
  "Perjalanan luar kota",
];

export const servicePrices = {
  "Lepas Kunci": 0,
  "Dengan Driver": 150000,
  "Antar Jemput Bandara": 100000,
};

export const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
