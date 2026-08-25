import { motion } from "framer-motion";
import { benefits } from "../../data/content";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../animations/motion";
export default function BenefitsSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="px-5"
      id="layanan"
    >
      <div className="mx-auto grid max-w-7xl py-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ id, icon: Icon, title, description }) => (
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 border-b border-zinc-300 py-5 sm:border-r sm:px-7 lg:border-b-0"
            key={id}
          >
            <Icon className="size-9 rounded-xl bg-zinc-200 p-2" />
            <span>
              <strong className="block text-xs">{title}</strong>
              <small className="mt-1 block text-[9px] text-muted">
                {description}
              </small>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
