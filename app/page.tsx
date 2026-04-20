import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Included from "@/components/Included";
import {
  VideoSection,
  Prices,
  Packages,
  Additional,
  Equipment,
  Guarantees,
  CTA,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Included />
        <VideoSection />
        <Prices />
        <Packages />
        <Additional />
        <Equipment />
        <Guarantees />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
