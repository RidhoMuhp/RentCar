import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fleetCars } from "../../data/cars";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../animations/motion";
import CarCard from "../ui/CarCard";
export default function FleetSection() {
  const trackRef = useRef(null);
  const move = (direction) =>
    trackRef.current?.scrollBy({ left: direction * 390, behavior: "smooth" });
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28" id="armada">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-11 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
      >
        <div>
          <span className="rounded-full bg-acid px-3 py-2 text-[9px] font-extrabold tracking-[.18em]">
            PILIHAN ARMADA
          </span>
          <h2 className="mt-7 font-display text-4xl leading-[.96] font-bold tracking-[-.06em] sm:text-5xl">
            Mobil untuk setiap
            <br />
            <em className="font-serif font-normal text-zinc-500">
              perjalananmu.
            </em>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm leading-6 text-muted">
            Dari perjalanan dalam kota hingga liburan keluarga — geser untuk
            menemukan armada yang paling pas.
          </p>
          <div className="mt-5 flex gap-2 lg:justify-end">
            <button
              onClick={() => move(-1)}
              className="grid size-12 place-items-center rounded-2xl border border-zinc-300 bg-white transition hover:bg-ink hover:text-acid"
              aria-label="Armada sebelumnya"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => move(1)}
              className="grid size-12 place-items-center rounded-2xl border border-zinc-300 bg-white transition hover:bg-ink hover:text-acid"
              aria-label="Armada berikutnya"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={trackRef}
      >
        {fleetCars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </motion.div>
      <div className="text-[8px] font-bold tracking-widest text-zinc-400">
        GESER UNTUK MELIHAT ARMADA LAINNYA ↔
      </div>
    </section>
  );
}
