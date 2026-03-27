import { motion } from "motion/react";

const WA_LINK = `https://wa.me/584266137046?text=${encodeURIComponent("¡Hola Yelier! 😊 Vi tu página de YilertBarber y me gustaría agendar un corte. ¡Gracias!")}`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-brand-dark overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Gold accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, oklch(0.65 0.18 220) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 bg-brand-sky/20 text-brand-sky border border-brand-sky/30 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              ✂️ Barbería Profesional a Domicilio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Tu barbero{" "}
              <em className="text-brand-gold not-italic">a domicilio</em>
            </h1>
            <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-8">
              Yelier Hernandez viene hasta tu casa para darte el corte que
              quieres. Sin colas, sin esperas.{" "}
              <span className="font-semibold text-white">
                ¡Solo agenda y listo!
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 bg-brand-sky hover:bg-brand-sky/90 text-white font-body font-bold text-base px-8 py-3.5 rounded-full shadow-elevated transition-colors"
              >
                ✂️ Agendar Corte
              </a>
              <a
                href="#galeria"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-body font-bold text-base px-8 py-3.5 rounded-full transition-colors"
              >
                Ver Galería
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: "100%", label: "A domicilio" },
              { value: "✂️", label: "Cortes profesionales" },
              { value: "📍", label: "Venezuela" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold text-brand-gold">
                  {value}
                </div>
                <div className="font-body text-sm text-white/60 mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
