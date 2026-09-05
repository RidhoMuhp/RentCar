import { motion } from "framer-motion";
import { ArrowRight, Settings2, Users } from "lucide-react";
import { fadeUp } from "../../animations/motion";
import { useBooking } from "../../context/BookingContext";
import { getVehicleStatus } from "../../config/vehicleStatus";
export default function CarCard({ car }) {
  const { chooseCar } = useBooking();
  const status = getVehicleStatus(car.status);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      className="w-[86%] shrink-0 snap-start overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl sm:basis-[calc(50%_-_9px)] lg:basis-[calc(33.333%_-_12px)]"
    >
      <div className="relative m-2 h-60 overflow-hidden rounded-2xl">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full object-cover"
          src={car.image}
          alt={car.name}
        />
        <span className="absolute top-3 left-3 rounded-full bg-acid px-3 py-2 text-[8px] font-extrabold uppercase tracking-wider">
          {car.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <div className="mt-4 flex gap-4 border-b border-zinc-100 pb-4 text-[10px] text-muted">
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {car.seats} Kursi
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 size={14} />
            {car.transmission}
          </span>
        </div>
        <div className="flex items-end justify-between pt-4">
          <p className="text-[9px]">
            <small className="block text-zinc-400">Mulai dari</small>
            <strong className="text-2xl">Rp{car.price}</strong> / hari
          </p>
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-3 py-2 text-[8px] font-extrabold uppercase tracking-wider ${status.badgeClass}`}>
              {status.label}
            </span>
            <motion.button
              whileHover={
                status.bookable
                  ? { rotate: -12, scale: 1.05 }
                  : undefined
              }
              type="button"
              disabled={!status.bookable}
              onClick={() => {
                if (!status.bookable) return;

                chooseCar(car.name);
              }}
              className={`grid size-10 place-items-center rounded-xl ${
                status.bookable
                  ? "bg-ink text-acid"
                  : "cursor-not-allowed bg-zinc-200 text-zinc-400"
              }`}
              aria-label={
                status.bookable
                  ? `Pesan ${car.name}`
                  : `${car.name} tidak tersedia`
              }
            >
              <ArrowRight size={17} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
