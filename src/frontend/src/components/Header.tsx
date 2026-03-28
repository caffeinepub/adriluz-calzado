import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Presupuesto", href: "#calculadora" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const WA_LINK =
  "https://wa.me/584125828010?text=%C2%A1Hola%20Luz!%20Me%20interesa%20tu%20servicio%20de%20creaci%C3%B3n%20de%20p%C3%A1ginas%20web.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre...";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#inicio" className="flex flex-col" data-ocid="nav.link">
          <span className="font-display text-xl font-bold text-brand-garnet leading-tight">
            Luz Perez
          </span>
          <span className="text-xs font-body text-brand-gold font-semibold tracking-widest uppercase">
            Creadora Digital
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-brand-garnet transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-brand-garnet hover:bg-brand-garnet/90 text-white gap-2 shadow-elevated"
              data-ocid="nav.primary_button"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-brand-garnet"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          data-ocid="nav.toggle"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-border shadow-elevated px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-brand-garnet transition-colors"
              onClick={() => setOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full bg-brand-garnet hover:bg-brand-garnet/90 text-white gap-2"
              data-ocid="nav.primary_button"
            >
              <MessageCircle className="h-4 w-4" />
              Contactar por WhatsApp
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
