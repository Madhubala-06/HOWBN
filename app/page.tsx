import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import Transformations from "../components/sections/Transformations";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
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
