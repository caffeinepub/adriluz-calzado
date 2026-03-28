import { Toaster } from "@/components/ui/sonner";
import BlogSection from "./components/BlogSection";
import BudgetCalculator from "./components/BudgetCalculator";
import BusinessImageSection from "./components/BusinessImageSection";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <BusinessImageSection />
        <Portfolio />
        <BudgetCalculator />
        <BlogSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}
