import { Toaster } from "@/components/ui/sonner";
import AnnouncementBar from "./components/AnnouncementBar";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <HowItWorks />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}
