import { siteConfig } from "../../config/siteConfig";
export default function Brand({ light = false }) {
  const { brand } = siteConfig;
  return (
    <a className="flex items-center gap-2.5 font-bold text-sm" href="#home">
      <i
        className={`grid size-10 place-items-center rounded-xl not-italic text-lg font-extrabold ${light ? "bg-acid text-ink" : "bg-ink text-acid"}`}
      >
        {brand.initial}
      </i>
      <span>
        {brand.name.toUpperCase()}{" "}
        <b className="font-normal">{brand.accent.toUpperCase()}</b>
      </span>
    </a>
  );
}
