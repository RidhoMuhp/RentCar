export const vehicleStatusConfig = {
  available: {
    label: "Available",
    bookable: true,
    badgeClass: "bg-emerald-100 text-emerald-700",
  },

  rented: {
    label: "Rented",
    bookable: false,
    badgeClass: "bg-zinc-100 text-zinc-600",
  },

  maintenance: {
    label: "Maintenance",
    bookable: false,
    badgeClass: "bg-amber-100 text-amber-700",
  },
};

const unknownStatus = {
  label: "Unavailable",
  bookable: false,
  badgeClass: "bg-zinc-100 text-zinc-500",
};

export function getVehicleStatus(status) {
  return vehicleStatusConfig[status] ?? unknownStatus;
}