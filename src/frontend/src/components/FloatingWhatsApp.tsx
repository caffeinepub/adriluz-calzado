import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/584125828010?text=%C2%A1Hola%20Luz!%20Me%20interesa%20tu%20servicio%20de%20creaci%C3%B3n%20de%20p%C3%A1ginas%20web.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre...";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-whatsapp shadow-elevated flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="WhatsApp"
      data-ocid="whatsapp.button"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </a>
  );
}
