import { MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA_GREETING =
  "¡Hola Yelier! 😊 Vi tu página de YilertBarber y me gustaría agendar un corte. ¡Gracias!";

function waLink() {
  return `https://wa.me/584266137046?text=${encodeURIComponent(WA_GREETING)}`;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      id="contacto"
      className="bg-brand-dark text-white"
      data-ocid="footer.section"
    >
      {/* CTA strip */}
      <div className="bg-brand-sky py-10">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            ¿Listo para tu corte?
          </h2>
          <p className="font-body text-white/80 mb-5">
            ¡Escríbenos por WhatsApp! Yelier Hernandez te atenderá de inmediato
            💈
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.primary_button"
            className="inline-flex items-center gap-2 bg-white text-brand-sky font-body font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <SiWhatsapp className="h-5 w-5" /> WhatsApp · +58 424 613 7046
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="font-display text-3xl font-bold text-brand-sky">
                Yilert
              </span>
              <span className="font-display text-3xl font-bold text-brand-gold">
                Barber
              </span>
            </div>
            <p className="font-body text-sm text-white/50 uppercase tracking-widest mb-3">
              Barbería a domicilio
            </p>
            <p className="font-body text-white/70 text-sm leading-relaxed">
              Servicio profesional de barbería a domicilio por Yelier Hernandez.
              Venezuela — atendemos en tu hogar.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="p-2 rounded-full bg-white/10 hover:bg-brand-sky transition-colors"
              >
                <SiWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Navegar
            </h4>
            <ul className="space-y-2 font-body text-sm text-white/70">
              {[
                ["Inicio", "#inicio"],
                ["Servicios", "#servicios"],
                ["Galería", "#galeria"],
                ["Blog", "#blog"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    data-ocid="footer.link"
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-sky shrink-0" />
                <a
                  href={waLink()}
                  className="hover:text-white transition-colors"
                >
                  +58 424 613 7046
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-sky shrink-0" />
                <span>Venezuela · Servicio a domicilio</span>
              </li>
              <li className="flex items-start gap-2 mt-2 bg-white/5 rounded-lg p-3">
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wide">
                    Barbero
                  </p>
                  <p className="text-white/80">Yelier Hernandez</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container max-w-7xl mx-auto px-4 text-center font-body text-xs text-white/40">
          © {year} YilertBarber — Yelier Hernandez. Construido con ❤️ usando{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
