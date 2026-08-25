import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "../../config/siteConfig";
import { serviceAreas } from "../../data/content";
import { fadeUp, viewportOnce } from "../../animations/motion";
export default function LocationSection() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.location.mapQuery)}&z=12&output=embed`;
  return (
    <section className="bg-[#dedfd7] px-5 py-20 lg:py-28" id="lokasi">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="rounded-full bg-acid px-3 py-2 text-[9px] font-extrabold tracking-[.18em]">
            AREA LAYANAN
          </span>
          <h2 className="mt-7 font-display text-4xl leading-[.96] font-bold tracking-[-.06em] sm:text-5xl">
            Siap antar ke
            <br />
            <em className="font-serif font-normal text-zinc-500">lokasimu.</em>
          </h2>
          <p className="mt-6 text-sm leading-7 text-zinc-600">
            Kami melayani pengantaran dan penjemputan di seluruh Kota Makassar,
            Bandara Sultan Hasanuddin, Pelabuhan Soekarno-Hatta, Maros, Gowa,
            dan sekitarnya.
          </p>
          <ul className="my-7 grid sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <li
                className="border-b border-zinc-400/40 py-3 text-[11px] before:mr-2 before:rounded-full before:bg-ink before:px-1.5 before:py-1 before:text-acid before:content-['✓']"
                key={area}
              >
                {area}
              </li>
            ))}
          </ul>
          <a
            className="inline-flex items-center gap-6 rounded-xl bg-acid px-5 py-4 text-[11px] font-bold"
            href={getWhatsAppUrl()}
          >
            Tanyakan area kamu <ArrowRight size={16} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="relative h-[340px] overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:h-[470px]"
        >
          <iframe
            className="h-full w-full grayscale"
            title="Peta layanan Makassar"
            src={mapUrl}
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-white">
            <MapPin className="text-acid" />
            <span>
              <small className="block text-[7px] tracking-widest text-zinc-500">
                BASE KAMI
              </small>
              <strong className="text-[11px]">
                {siteConfig.location.label}
              </strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
