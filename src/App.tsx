import React from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useSecurity } from "./hooks/useSecurity";

export default function App() {
  // Activate client-side protections (right-click, hotkeys, dragging)
  useSecurity();

  return (
    <div className="min-h-screen bg-oxum-bg text-oxum-charcoal select-none selection:bg-transparent selection:text-inherit relative flex flex-col overflow-x-hidden w-full">
      {/* Header element */}
      <Header />

      {/* Main content elements */}
      <main className="grow overflow-x-hidden w-full">
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services / Atendimentos Section */}
        <Services />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials / Depoimentos Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

      </main>

      {/* Footer element */}
      <Footer />

      {/* Sticky floating WhatsApp button for mobile conversion */}
      <WhatsAppButton />
    </div>
  );
}
