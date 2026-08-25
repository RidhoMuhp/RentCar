import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../../config/siteConfig";
import { navigationLinks } from "../../data/content";
import Brand from "../ui/Brand";
export default function Navbar() {
  return (
    <>
      <div className="bg-acid py-2 text-center text-[9px] font-extrabold uppercase tracking-[.16em]">
        Rental mobil terpercaya di Makassar • Buka setiap hari 24 jam
      </div>
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5">
        <Brand />
        <div className="hidden items-center gap-1 rounded-full bg-[#e8e9e2] p-1 lg:flex">
          {navigationLinks.map((link) => (
            <a
              className="rounded-full px-4 py-2 text-[11px] font-bold transition hover:bg-white"
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <motion.a
          whileHover={{ y: -2 }}
          className="hidden items-center gap-5 rounded-xl bg-ink px-5 py-3.5 text-[11px] font-bold text-white sm:flex"
          href={getWhatsAppUrl()}
        >
          Hubungi Kami <ArrowRight size={15} />
        </motion.a>
      </nav>
    </>
  );
}
