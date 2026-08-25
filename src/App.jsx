import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import FleetSection from "./components/sections/FleetSection";
import LocationSection from "./components/sections/LocationSection";
import WhatsAppButton from "./components/ui/WhatsAppButton";

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <FleetSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
