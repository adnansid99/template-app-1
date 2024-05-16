import CTA1 from "./components/CTA/CTA1";
import CTA2 from "./components/CTA/CTA2";
import Contact1 from "./components/Contact/Contact1";
import Contact2 from "./components/Contact/Contact2";
import FAQ1 from "./components/FAQ/FAQ1";
import FAQ2 from "./components/FAQ/FAQ2";
import Features1 from "./components/Features/Features1";
import Features2 from "./components/Features/Features2";
import Footer1 from "./components/Footer/Footer1";
import Footer2 from "./components/Footer/Footer2";
import Gallery1 from "./components/Gallery/Gallery1";
import Gallery2 from "./components/Gallery/Gallery2";
import HeroSection1 from "./components/HeroSection/HeroSection1";
import HeroSection2 from "./components/HeroSection/HeroSection2";
import Logos1 from "./components/Logos/Logos1";
import Logos2 from "./components/Logos/Logos2";
import Navbar1 from "./components/Navbar/Navbar1";
import Navbar2 from "./components/Navbar/Navbar2";

// eslint-disable-next-line no-unused-vars
function Variant1() {
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
        title="Mountain Bikes"
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

// eslint-disable-next-line no-unused-vars
function Variant2() {
  return (
    <>
      <Navbar2 />
      <HeroSection2 />
      <Logos2 />
      <Gallery2 />
      <Features2
        isReverse={false}
        label="Ride in Style and Comfort"
        title="Premium Bikes"
        description="Explore our collection of premium bites that offer both style and cockpit for an exceptional writing experience."
        imageSrc="https://source.unsplash.com/random/600x500/?sports bikes"
      />
      <Features2
        isReverse={true}
        label="Ride in Style and Power"
        title="Mountain Bikes"
        description="Explore the great outdoors with our range of durable and high-performance mountain bikes. Designed to tackle rough terrains and steep inclines, these bikes are perfect for adventure seekers."
        imageSrc="https://source.unsplash.com/random/605x505/?sports bikes"
      />
      <Features2
        isReverse={false}
        label="Ride in style with our sleek and modern designs"
        title="Sleek Design"
        description="Our bikes are designed to not only perform well but also turn heads with their sleek and stylish appearance"
        imageSrc="https://source.unsplash.com/random/610x510/?sports bikes"
      />
      <CTA2 />
      <FAQ2 />
      <Contact2 />
      <Footer2 />
    </>
  );
}

export default function App() {
  return <Variant2 />;
}
