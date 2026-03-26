import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

const WA_GREETING =
  "¡Hola Luz Adriani! 😊 Visité la tienda de Adriluz Calzado y me gustaría recibir más información sobre sus productos. ¡Gracias!";

export default function WhatsAppButton() {
  const href = `https://wa.me/584245488229?text=${encodeURIComponent(WA_GREETING)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-whatsapp text-white px-5 py-3 rounded-full shadow-elevated font-body font-semibold text-sm"
    >
      <SiWhatsapp className="h-5 w-5" />
      ¡Contáctanos por WhatsApp!
    </motion.a>
  );
}
