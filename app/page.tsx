import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import Transformations from "../components/sections/Transformations";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import { homeMetadata } from "./metadata";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <div className="min-h-screen font-inter-display">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Transformations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
