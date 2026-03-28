import { Heart, Mail, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/584125828010?text=%C2%A1Hola%20Luz!%20Me%20interesa%20tu%20servicio%20de%20creaci%C3%B3n%20de%20p%C3%A1ginas%20web.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre...";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Fuchsia top line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-garnet to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-1">
              Luz Perez
            </h2>
            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Creadora Digital
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Impulso tu emprendimiento digital con páginas web profesionales,
              blogs y presencia en redes. Venezuela y el mundo.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold text-brand-gold uppercase tracking-wide text-xs mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                ["Inicio", "#inicio"],
                ["Servicios", "#servicios"],
                ["Portafolio", "#portafolio"],
                ["Calculadora", "#calculadora"],
                ["Blog", "#blog"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/70 text-sm hover:text-brand-gold transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-gold uppercase tracking-wide text-xs mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-brand-gold transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                +58 412 5828010
              </a>
              <a
                href="mailto:dagneidgutierrez57@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-brand-gold transition-colors text-sm"
              >
                <Mail className="h-4 w-4 shrink-0" />
                dagneidgutierrez57@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {year} Luz Perez Creadora Digital. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-xs">
            Hecho con{" "}
            <Heart className="inline h-3 w-3 text-brand-gold fill-brand-gold" />{" "}
            usando{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
