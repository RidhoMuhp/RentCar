import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../../config/siteConfig";
export default function WhatsAppButton() {
  return (
    <motion.a
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-2xl bg-emerald-500 text-white shadow-2xl md:hidden"
      href={getWhatsAppUrl()}
      aria-label="Chat melalui WhatsApp"
    >
      <MessageCircle />
    </motion.a>
  );
}
