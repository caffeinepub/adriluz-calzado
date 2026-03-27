import { motion } from "motion/react";

const services = [
  {
    icon: "✂️",
    name: "Corte Clásico",
    desc: "Un corte limpio y elegante de siempre. Perfecto para cualquier ocasión.",
  },
  {
    icon: "💈",
    name: "Corte Moderno",
    desc: "Estilos actuales y tendencia. Yelier te asesora para el look ideal.",
  },
  {
    icon: "🪒",
    name: "Barba y Perfilado",
    desc: "Perfilado preciso de barba. Contornos definidos con técnica profesional.",
  },
  {
    icon: "👦",
    name: "Corte Infantil",
    desc: "Cortes especiales para los más pequeños. Paciencia y cuidado garantizados.",
  },
  {
    icon: "🎨",
    name: "Degradado (Fade)",
    desc: "Degradados suaves y limpios. Transiciones perfectas desde la piel hasta el cabello.",
  },
  {
    icon: "💎",
    name: "Afeitado Tradicional",
    desc: "Afeitado clásico con navaja y productos premium. Una experiencia única.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-20 bg-background"
      data-ocid="services.section"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-sky/10 text-brand-sky font-body font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            ¿Qué necesitas hoy?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
            Yelier lleva todos sus equipos a tu casa. Tú decides el estilo.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`services.item.${i + 1}`}
              className="bg-white rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-brand-sky/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-4 h-0.5 w-8 bg-brand-gold rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
