export const siteConfig = {
  brand: { name: "Makassar", accent: "Drive", initial: "M" },
  contact: {
    phoneDisplay: "0812 3456 7890",
    phoneValue: "+6281234567890",
    whatsappMessage: "Halo Makassar Drive, saya ingin sewa mobil",
  },
  location: {
    label: "Makassar, Sulawesi Selatan",
    mapQuery: "Makassar, Sulawesi Selatan",
  },
};
export const getWhatsAppUrl = () =>
  `https://wa.me/${siteConfig.contact.phoneValue.replace("+", "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
export const getPhoneUrl = () => `tel:${siteConfig.contact.phoneValue}`;
