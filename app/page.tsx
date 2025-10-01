import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Partners from "./components/Partners";
import CtaBanner from "./components/CtaBanner";

export default function Home() {
  return (
    <>

    {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />




 {/* About Section (band with background) */}

 <About />




{/* Features Section */}
      <Features />


{/* Services Section */}
      <Services />







{/* Process Section */}
      <Process />



    

     
{/* Partners Section */}
      <Partners />

      {/* Testimonials (carousel + ratings) */}
      <Testimonials />

     

{/* FAQ Section */}
      <FAQ />

{/* Cta Banner Section */}
      {/* <CtaBanner /> */}

{/* Contact Section */}
<Contact />

{/* Footer Section */}
      <Footer />
    </>
  );
}
