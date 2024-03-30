import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Donate from "@/components/donate";
import HeroSection from "@/components/hero-section";
export default function Home() {
  return (
    <main className="w-full pt-4">
      <HeroSection />
      <AboutUs />
      <Donate />
      <ContactUs />
    </main>
  );
}
