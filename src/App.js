import CTA1 from "./components/CTA/CTA1";
import Contact1 from "./components/Contact/Contact1";
import FAQ1 from "./components/FAQ/FAQ1";
import Features1 from "./components/Features/Features1";
import Footer1 from "./components/Footer/Footer1";
import Gallery1 from "./components/Gallery/Gallery1";
import HeroSection1 from "./components/HeroSection/HeroSection1";
import Logos1 from "./components/Logos/Logos1";
import Navbar1 from "./components/Navbar/Navbar1";

export default function App() {
  return (
    <>
      <Navbar1 />
      <HeroSection1 />
      <Logos1 />
      <Gallery1 />
      <Features1
        isReverse={false}
        label="Ride in Style and Comfort"
        title="Premium Bikes"
        description="Explore our collection of premium bites that offer both style and cockpit for an exceptional writing experience."
        imageSrc="https://source.unsplash.com/random/500x300/?sports bikes"
      />
      <Features1
        isReverse={true}
        label="Mountain Bikes"
        title="Premium Bikes"
        description="Explore the great outdoors with our range of durable and high-performance mountain bikes. Designed to tackle rough terrains and steep inclines, these bikes are perfect for adventure seekers."
        imageSrc="https://source.unsplash.com/random/500x301/?sports bikes"
      />
      <Features1
        isReverse={false}
        label="Ride in style with our sleek and modern designs"
        title="Sleek Design"
        description="Our bikes are designed to not only perform well but also turn heads with their sleek and stylish appearance"
        imageSrc="https://source.unsplash.com/random/500x302/?sports bikes"
      />
      <CTA1 />
      <FAQ1 />
      <Contact1 />
      <Footer1 />
    </>
  );
}
