import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../../config/siteConfig";
import { navigationLinks } from "../../data/content";
import Brand from "../ui/Brand";
export default function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 pb-6 text-white" id="tentang">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_.7fr_.8fr] lg:items-center">
        <Brand light />
        <p className="text-xs leading-6 text-zinc-500">
          Partner perjalanan nyaman dan terpercaya di Kota Makassar.
        </p>
        <div className="flex flex-col gap-2 text-[11px] text-zinc-400">
          {navigationLinks.slice(0, 3).map((link) => (
            <a className="hover:text-acid" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="flex w-fit items-center gap-5 rounded-xl bg-acid px-5 py-3.5 text-[11px] font-bold text-ink"
          href={getWhatsAppUrl()}
        >
          Pesan Sekarang <ArrowRight size={16} />
        </a>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-zinc-800 pt-5 text-[9px] text-zinc-600">
        © 2026 Makassar Drive. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
