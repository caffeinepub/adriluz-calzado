import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const WA_LINK =
  "https://wa.me/584125828010?text=%C2%A1Hola%20Luz!%20Me%20interesa%20tu%20servicio%20de%20creaci%C3%B3n%20de%20p%C3%A1ginas%20web.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre...";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-luz-perez.dim_1200x600.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-brand-garnet/60 to-black/80" />
      {/* Fuchsia accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <div className="relative z-10 container mx-auto text-center px-4 py-32">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-garnet/20 border border-brand-garnet/50 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-brand-gold text-sm font-semibold tracking-wide">
            Creadora Digital en Venezuela
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Impulsa Tu
          <br />
          <span className="text-brand-gold italic">Emprendimiento</span>
          <br />
          Digital
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Creo páginas web profesionales para negocios, matrimonios, músicos y
          creadores de contenido. Tu presencia digital, a tu medida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-brand-garnet hover:bg-brand-garnet/90 text-white font-bold gap-2 shadow-elevated px-8 py-6 text-base"
              data-ocid="hero.primary_button"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar mi página ahora
            </Button>
          </a>
          <a href="#servicios">
            <Button
              size="lg"
              variant="outline"
              className="border-brand-gold/60 text-white hover:bg-brand-garnet/20 px-8 py-6 text-base"
              data-ocid="hero.secondary_button"
            >
              Ver servicios
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#servicios"
            className="text-white/60 hover:text-brand-gold transition-colors"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
