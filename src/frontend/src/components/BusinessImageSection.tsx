import { motion } from "motion/react";

export default function BusinessImageSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-garnet/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-garnet/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <img
            src="/assets/generated/business-hero.dim_1200x600.jpg"
            alt="Luz Perez - Creadora de páginas web y blogs profesionales en Venezuela"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-brand-garnet/30 to-transparent" />
          <div className="absolute inset-0 rounded-3xl ring-2 ring-brand-garnet/50 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-brand-garnet rounded-full mb-4" />
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Transformo ideas en{" "}
                <span className="text-brand-gold italic">
                  presencia digital
                </span>
              </h2>
              <p className="text-white/85 text-base md:text-lg max-w-xl">
                Más de 3 años creando páginas web y blogs profesionales en
                Venezuela
              </p>
            </motion.div>
          </div>

          <div className="absolute top-6 right-6">
            <span className="inline-flex items-center gap-1.5 bg-brand-garnet text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              ✦ Creado con IA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
