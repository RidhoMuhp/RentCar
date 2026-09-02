import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react";
import {
  getPhoneUrl,
  getWhatsAppUrl,
  siteConfig,
} from "../../config/siteConfig";
import { heroCars } from "../../data/cars";

export default function HeroSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setActive((v) => (v + 1) % heroCars.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);
  const previous = () =>
    setActive((active - 1 + heroCars.length) % heroCars.length);
  const next = () => setActive((active + 1) % heroCars.length);
  const car = heroCars[active];

  return (
    <section
      className="mx-2 grid overflow-hidden rounded-[28px] bg-ink text-white lg:mx-auto lg:min-h-[650px] lg:max-w-[1320px] lg:grid-cols-[.72fr_1fr]"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="px-6 py-12 sm:px-12 lg:px-14 lg:py-20"
      >
        <span className="rounded-full bg-acid px-3 py-2 text-[9px] font-extrabold tracking-[.18em] text-ink">
          RENTAL MOBIL #1 DI MAKASSAR
        </span>
        <h1 className="mt-8 font-display text-5xl leading-[.92] font-bold tracking-[-.06em] sm:text-6xl lg:text-7xl">
          Jelajahi Makassar
          <br />
          dengan <em className="font-serif font-normal text-acid">nyaman.</em>
        </h1>
        <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
          Armada bersih, harga transparan, dan pelayanan cepat. Lepas kunci atau
          dengan driver profesional untuk perjalanan tanpa ribet.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-7 rounded-xl bg-acid px-5 py-4 text-[11px] font-bold text-ink"
            href="#armada"
          >
            Lihat Armada <ArrowRight size={16} />
          </motion.a>
          <a className="text-[11px] font-bold" href={getWhatsAppUrl()}>
            Konsultasi gratis ↗
          </a>
        </div>
        <div className="mt-12 flex gap-8 border-t border-zinc-800 pt-6">
          <div className="flex items-center gap-3">
            <strong className="text-3xl">4.9</strong>
            <span className="text-[9px] tracking-wider text-acid">
              ★★★★★
              <small className="block tracking-normal text-zinc-500">
                Rating pelanggan
              </small>
            </span>
          </div>
          <div className="flex items-center">
            <strong className="text-3xl">500+</strong>
            <small className="ml-3 text-[9px] text-zinc-500">
              Perjalanan
              <br />
              selesai
            </small>
          </div>
        </div>
      </motion.div>
      <div className="relative p-2 lg:py-4 lg:pr-4 lg:pl-0">
        <div className="relative h-[420px] overflow-hidden rounded-3xl lg:h-full lg:min-h-[618px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={car.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65 }}
              className="absolute inset-0 h-full w-full object-cover"
              src={car.image}
              alt={car.name}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <small className="text-[8px] tracking-[.2em] text-acid">
              ARMADA PILIHAN
            </small>
            <h2 className="mt-2 text-3xl font-bold">{car.name}</h2>
            <p className="text-xs text-zinc-400">{car.type}</p>
          </div>
          <div className="absolute top-5 right-5 flex gap-2">
            <button
              onClick={previous}
              className="grid size-11 place-items-center rounded-full bg-black/60 backdrop-blur"
              aria-label="Mobil sebelumnya"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="grid size-11 place-items-center rounded-full bg-black/60 backdrop-blur"
              aria-label="Mobil berikutnya"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <motion.aside
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 mx-auto -mt-16 w-[calc(100%-28px)] rounded-3xl border border-white/60 bg-white/95 p-6 text-ink shadow-2xl backdrop-blur lg:absolute lg:top-1/2 lg:right-4
           lg:mt-0 lg:w-[275px] lg:-translate-y-1/2"
        >
          <span className="text-[8px] font-extrabold tracking-wider">
            <i className="mr-2 inline-block size-2 rounded-full bg-emerald-500" />{" "}
            ONLINE SEKARANG
          </span>
          <h2 className="my-4 text-3xl leading-none font-bold">
            Butuh mobil
            <br />
            hari ini?
          </h2>
          <p className="text-[11px] leading-5 text-muted">
            Tim kami siap bantu pilihkan mobil terbaik sesuai kebutuhanmu.
          </p>
          <a
            className="mt-5 flex items-center gap-3 rounded-xl bg-emerald-500 p-3 text-white"
            href={getWhatsAppUrl()}
          >
            <MessageCircle />
            <span className="text-xs font-bold">
              <small className="block text-[7px] font-normal tracking-wider">
                CHAT VIA
              </small>
              WhatsApp
            </span>
            <ArrowRight className="ml-auto" size={17} />
          </a>
          <div className="my-4 text-center text-[8px] text-zinc-400">
            atau hubungi langsung
          </div>
          <a
            className="flex items-center gap-3 text-sm font-bold"
            href={getPhoneUrl()}
          >
            <Phone size={18} />
            <span>
              <small className="block text-[7px] tracking-wider text-zinc-400">
                TELEPON KAMI
              </small>
              {siteConfig.contact.phoneDisplay}
            </span>
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
