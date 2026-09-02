import { createContext, useContext, useMemo, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [selectedCar, setSelectedCar] = useState("");

  const chooseCar = (carName) => {
    setSelectedCar(carName);
    requestAnimationFrame(() => {
      document.querySelector("#booking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const value = useMemo(
    () => ({ selectedCar, setSelectedCar, chooseCar }),
    [selectedCar],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking harus digunakan di dalam BookingProvider");
  }

  return context;
}
