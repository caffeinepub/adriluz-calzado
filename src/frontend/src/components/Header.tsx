import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="bg-white border-b border-border sticky top-0 z-40 shadow-xs"
      data-ocid="header.panel"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-baseline gap-1.5 leading-tight shrink-0"
          >
            <span className="font-display text-2xl font-bold text-brand-sky tracking-tight">
              Yilert
            </span>
            <span className="font-display text-2xl font-bold text-brand-gold tracking-tight">
              Barber
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-body font-medium text-foreground hover:text-brand-sky transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/584266137046?text=${encodeURIComponent("¡Hola Yelier! 😊 Vi tu página de YilertBarber y me gustaría agendar un corte. ¡Gracias!")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="header.primary_button"
              className="hidden md:inline-flex items-center gap-2 bg-brand-sky text-white font-body font-semibold text-sm px-5 py-2 rounded-full hover:bg-brand-sky/90 transition-colors"
            >
              Agendar ✂️
            </a>
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body font-medium text-foreground hover:text-brand-sky transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/584266137046?text=${encodeURIComponent("¡Hola Yelier! 😊 Vi tu página de YilertBarber y me gustaría agendar un corte. ¡Gracias!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-sky text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full mt-1"
              onClick={() => setMobileOpen(false)}
            >
              Agendar Corte ✂️
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
