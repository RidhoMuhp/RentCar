export const siteConfig = {
  brand: { name: "Makassar", accent: "Drive", initial: "M" },
  contact: {
    phoneDisplay: "0851 7955 7691",
    phoneValue: "+6285179557691",
    whatsappMessage: "Halo Makassar Drive, saya ingin sewa mobil",
  },
  location: {
    label: "Makassar, Sulawesi Selatan",
    mapQuery: "Makassar, Sulawesi Selatan",
  },
};
export const getWhatsAppUrl = (
  message = siteConfig.contact.whatsappMessage,
) =>
  `https://wa.me/${siteConfig.contact.phoneValue.replace("+", "")}?text=${encodeURIComponent(message)}`;

export const getPhoneUrl = () =>
  `tel:${siteConfig.contact.phoneValue.replace(/\s/g, "")}`;
