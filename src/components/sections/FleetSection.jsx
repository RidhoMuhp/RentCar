import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { fleetCars } from "../../data/cars";

import {
  fadeUp,
  viewportOnce,
} from "../../animations/motion";

import CarCard from "../ui/CarCard";

export default function FleetSection() {
  const trackRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCars = fleetCars.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());

    const matchesStatus =
      statusFilter === "all" || car.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const move = (direction) =>
    trackRef.current?.scrollBy({
      left: direction * 390,
      behavior: "smooth",
    });

  const statusOptions = [
    { label: "Semua", value: "all" },
    { label: "Available", value: "available" },
    { label: "Rented", value: "rented" },
    { label: "Maintenance", value: "maintenance" },
  ];

  return (
    <section
      className="mx-auto max-w-7xl px-5 py-20 lg:py-28"
      id="armada"
    >
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

      {/* Search + Filter */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama kendaraan..."
            className="w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-zinc-400"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {statusOptions.map((option) => {
            const isActive = statusFilter === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setStatusFilter(option.value)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition ${
                  isActive
                    ? "bg-ink text-acid"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Fleet */}
      {filteredCars.length > 0 ? (
        <>
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            ref={trackRef}
          >
            {filteredCars.map((car) => (
              <CarCard car={car} key={car.id} />
            ))}
          </div>

          <div className="text-[8px] font-bold tracking-widest text-zinc-400">
            GESER UNTUK MELIHAT ARMADA LAINNYA ↔
          </div>
        </>
      ) : (
        <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-16 text-center">
          <p className="text-lg font-semibold text-zinc-800">
            Armada tidak ditemukan
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Coba gunakan nama kendaraan atau status yang berbeda.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setStatusFilter("all");
            }}
            className="mt-5 rounded-full bg-ink px-5 py-3 text-xs font-bold text-acid transition hover:opacity-90"
          >
            Reset pencarian
          </button>
        </div>
      )}
    </section>
  );
}

