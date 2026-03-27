import { motion } from "motion/react";

const WA_LINK = `https://wa.me/584266137046?text=${encodeURIComponent("¡Hola Yelier! 😊 Vi tu página de YilertBarber y me gustaría agendar un corte. ¡Gracias!")}`;

const placeholders = [
  { emoji: "✂️", label: "Corte Clásico" },
  { emoji: "💈", label: "Degradado Fade" },
  { emoji: "🪒", label: "Barba Perfilada" },
  { emoji: "💎", label: "Corte Moderno" },
  { emoji: "👦", label: "Corte Infantil" },
  { emoji: "🎨", label: "Afeitado Tradicional" },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 bg-muted"
      data-ocid="gallery.section"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-gold/15 text-brand-dark font-body font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Galería de Cortes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nuestros Mejores Trabajos
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
            📸 Próximamente: fotos de nuestros mejores cortes. ¡Envíanos tus
            fotos de referencia por WhatsApp!
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
          data-ocid="gallery.list"
        >
          {placeholders.map(({ emoji, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              data-ocid={`gallery.item.${i + 1}`}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-brand-sky/40 bg-white hover:border-brand-sky hover:shadow-card transition-all cursor-default"
            >
              <span className="text-4xl md:text-5xl">{emoji}</span>
              <span className="font-body text-sm font-medium text-muted-foreground">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="gallery.primary_button"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-body font-bold px-8 py-3.5 rounded-full hover:bg-brand-gold/90 shadow-elevated transition-colors"
          >
            📸 Enviar foto de referencia por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
