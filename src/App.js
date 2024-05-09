import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Logos from "./components/Logos";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";
import Features3 from "./components/Features3";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Logos />
      <Gallery />
      <Features1 />
      <Features2 />
      <Features3 />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
