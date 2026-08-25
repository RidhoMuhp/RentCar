import { Clock3, Settings2, ShieldCheck, Users } from "lucide-react";
export const navigationLinks = [
  { label: "Armada", href: "#armada" },
  { label: "Layanan", href: "#layanan" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Tentang Kami", href: "#tentang" },
];
export const benefits = [
  {
    id: "maintained",
    icon: ShieldCheck,
    title: "Armada Terawat",
    description: "Servis rutin & selalu bersih",
  },
  {
    id: "transparent",
    icon: Settings2,
    title: "Harga Transparan",
    description: "Tanpa biaya tersembunyi",
  },
  {
    id: "driver",
    icon: Users,
    title: "Driver Profesional",
    description: "Ramah & paham rute Makassar",
  },
  {
    id: "always-open",
    icon: Clock3,
    title: "Layanan 24 Jam",
    description: "Siap untuk kebutuhan mendadak",
  },
];
export const serviceAreas = [
  "Bandara Sultan Hasanuddin",
  "Makassar & Panakkukang",
  "Maros dan Gowa",
  "Pelabuhan Soekarno-Hatta",
];
