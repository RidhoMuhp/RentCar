import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CarFront,
  CheckCircle2,
  ChevronRight,
  CircleCheckBig,
  MapPin,
  Send,
  X,
} from "lucide-react";
import { fleetCars } from "../../data/cars";
import {
  formatRupiah,
  rentalNeeds,
  servicePrices,
} from "../../data/bookingOptions";
import { getWhatsAppUrl } from "../../config/siteConfig";
import { useBooking } from "../../context/BookingContext";
import { fadeUp, staggerContainer } from "../../animations/motion";

const initialForm = {
  name: "",
  phone: "",
  need: "Perjalanan keluarga",
  service: "Dengan Driver",
  date: "",
  duration: "1",
  pickup: "",
  notes: "",
};

const fieldClass =
  "mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-ink focus:ring-4 focus:ring-acid/30";

export default function BookingSection() {
  const { selectedCar, setSelectedCar } = useBooking();
  const [form, setForm] = useState(initialForm);
  const [showSummary, setShowSummary] = useState(false);

  const car = fleetCars.find((item) => item.name === selectedCar);
  const duration = Math.max(Number(form.duration) || 1, 1);
  const carSubtotal = (car?.dailyPrice || 0) * duration;
  const serviceSubtotal =
    (servicePrices[form.service] || 0) *
    (form.service === "Antar Jemput Bandara" ? 1 : duration);
  const estimatedTotal = carSubtotal + serviceSubtotal;

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  const sendBooking = () => {
    const message = [
      "Halo Makassar Drive, saya ingin melakukan booking kendaraan.",
      "",
      "*DATA PENYEWA*",
      `Nama: ${form.name}`,
      `No. HP: ${form.phone}`,
      "",
      "*DETAIL BOOKING*",
      `Armada: ${selectedCar}`,
      `Keperluan: ${form.need}`,
      `Layanan: ${form.service}`,
      `Tanggal: ${form.date}`,
      `Durasi: ${form.duration} hari`,
      `Lokasi jemput: ${form.pickup}`,
      `Catatan: ${form.notes || "-"}`,
      "",
      "*ESTIMASI BIAYA*",
      `Sewa kendaraan: ${formatRupiah(carSubtotal)}`,
      `Tambahan layanan: ${formatRupiah(serviceSubtotal)}`,
      `Estimasi total: ${formatRupiah(estimatedTotal)}`,
      "",
      "*Harga tersebut masih berupa estimasi dan menunggu konfirmasi admin.*",
      "",
      "Mohon konfirmasi ketersediaan dan total biayanya. Terima kasih.",
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setShowSummary(false);
  };

  return (
    <section
      id="booking"
      className="scroll-mt-24 bg-zinc-100 px-5 py-20 sm:px-8 lg:px-12"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-ink shadow-2xl lg:grid-cols-[0.8fr_1.2fr]"
      >
        <motion.div
          variants={fadeUp}
          className="relative p-7 text-white sm:p-10 lg:p-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-ink">
            <CarFront size={15} /> Mini Autobook
          </span>
          <h2 className="mt-6 max-w-md text-3xl font-black leading-tight sm:text-4xl">
            Booking lebih cepat, tanpa mengetik chat panjang.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-zinc-300">
            Isi data singkat sekali saja. Detail penyewa dan kebutuhan rental
            akan otomatis dirapikan ke WhatsApp.
          </p>
          <div className="mt-9 space-y-4 text-sm text-zinc-200">
            {[
              "Pilih armada dan layanan",
              "Isi jadwal serta lokasi jemput",
              "Kirim format booking ke WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-acid" size={19} /> {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -right-20 -bottom-24 size-64 rounded-full bg-acid/10 blur-2xl" />
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-9 lg:p-12"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-zinc-700">
              Nama lengkap
              <input
                className={fieldClass}
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Nama penyewa"
                autoComplete="name"
                required
              />
            </label>
            <label className="text-sm font-bold text-zinc-700">
              Nomor WhatsApp
              <input
                className={fieldClass}
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="08xxxxxxxxxx"
                inputMode="tel"
                autoComplete="tel"
                required
              />
            </label>
            <label className="text-sm font-bold text-zinc-700 sm:col-span-2">
              Pilih armada
              <select
                className={fieldClass}
                value={selectedCar}
                onChange={(event) => setSelectedCar(event.target.value)}
                required
              >
                <option value="">Pilih mobil yang diinginkan</option>
                {fleetCars.map((car) => (
                  <option key={car.name} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>
            </label>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-bold text-zinc-700">
                Keperluan perjalanan
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {rentalNeeds.map((need) => (
                  <button
                    key={need}
                    type="button"
                    onClick={() => setForm((current) => ({ ...current, need }))}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      form.need === need
                        ? "border-ink bg-ink text-white"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                    }`}
                  >
                    {need}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="text-sm font-bold text-zinc-700">
              Jenis layanan
              <select
                className={fieldClass}
                name="service"
                value={form.service}
                onChange={updateField}
              >
                <option>Dengan Driver</option>
                <option>Lepas Kunci</option>
                <option>Antar Jemput Bandara</option>
              </select>
            </label>
            {car && (
              <div className="rounded-2xl border border-acid/50 bg-acid/10 p-5 sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-500">
                      Estimasi sementara
                    </p>
                    <p className="mt-1 text-2xl font-black text-ink">
                      {formatRupiah(estimatedTotal)}
                    </p>
                  </div>
                  <CircleCheckBig className="mt-1 text-ink" size={24} />
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  {selectedCar} selama {duration} hari termasuk pilihan layanan.
                  Harga final dikonfirmasi oleh admin.
                </p>
              </div>
            )}
            <label className="text-sm font-bold text-zinc-700">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} /> Tanggal mulai
              </span>
              <input
                className={fieldClass}
                type="date"
                name="date"
                value={form.date}
                onChange={updateField}
                required
              />
            </label>
            <label className="text-sm font-bold text-zinc-700">
              Durasi sewa
              <div className="relative">
                <input
                  className={`${fieldClass} pr-16`}
                  type="number"
                  name="duration"
                  min="1"
                  value={form.duration}
                  onChange={updateField}
                  required
                />
                <span className="absolute right-4 bottom-3.5 text-sm text-zinc-400">
                  hari
                </span>
              </div>
            </label>
            <label className="text-sm font-bold text-zinc-700">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Lokasi jemput
              </span>
              <input
                className={fieldClass}
                name="pickup"
                value={form.pickup}
                onChange={updateField}
                placeholder="Contoh: Bandara Sultan Hasanuddin"
                required
              />
            </label>
            <label className="text-sm font-bold text-zinc-700 sm:col-span-2">
              Catatan tambahan{" "}
              <span className="font-normal text-zinc-400">(opsional)</span>
              <textarea
                className={`${fieldClass} min-h-24 resize-y`}
                name="notes"
                value={form.notes}
                onChange={updateField}
                placeholder="Contoh: butuh kursi bayi atau penjemputan pukul 09.00"
              />
            </label>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-acid px-5 py-4 text-sm font-black text-ink shadow-lg shadow-acid/20 transition hover:bg-[#d7ff2f]"
          >
            Lihat Ringkasan Booking <ChevronRight size={17} />
          </motion.button>
          <p className="mt-3 text-center text-xs leading-5 text-zinc-400">
            Data hanya digunakan untuk membuat pesan WhatsApp dan tidak disimpan
            di website.
          </p>
        </motion.form>
      </motion.div>

      {showSummary && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-summary-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                  Konfirmasi data
                </p>
                <h3
                  id="booking-summary-title"
                  className="mt-1 text-2xl font-black text-ink"
                >
                  Ringkasan Booking
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSummary(false)}
                className="grid size-10 place-items-center rounded-full bg-zinc-100 text-zinc-600"
                aria-label="Tutup ringkasan"
              >
                <X size={18} />
              </button>
            </div>

            <dl className="mt-6 divide-y divide-zinc-100 rounded-2xl border border-zinc-200 px-5 text-sm">
              {[
                ["Nama", form.name],
                ["Armada", selectedCar],
                ["Keperluan", form.need],
                ["Layanan", form.service],
                ["Tanggal", form.date],
                ["Durasi", `${duration} hari`],
                ["Lokasi jemput", form.pickup],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[0.8fr_1.2fr] gap-4 py-3.5"
                >
                  <dt className="text-zinc-400">{label}</dt>
                  <dd className="text-right font-bold text-zinc-700">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-2xl bg-ink p-5 text-white">
              <div className="flex justify-between text-sm text-zinc-300">
                <span>Estimasi total</span>
                <span>{duration} hari</span>
              </div>
              <p className="mt-2 text-3xl font-black text-acid">
                {formatRupiah(estimatedTotal)}
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                Estimasi belum menjadi harga final sebelum dikonfirmasi admin.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setShowSummary(false)}
                className="rounded-2xl border border-zinc-200 px-5 py-3.5 text-sm font-bold text-zinc-600"
              >
                Edit kembali
              </button>
              <button
                type="button"
                onClick={sendBooking}
                className="flex items-center justify-center gap-2 rounded-2xl bg-acid px-5 py-3.5 text-sm font-black text-ink"
              >
                Kirim ke WhatsApp <Send size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
