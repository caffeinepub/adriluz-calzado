import { motion } from "motion/react";
import { useState } from "react";

const WA_LINK = `https://wa.me/584266137046?text=${encodeURIComponent("¡Hola Yelier! 😊 Vi tu página de YilertBarber y me gustaría agendar un corte. ¡Gracias!")}`;

const cortes = [
  { src: "/assets/generated/corte1.dim_600x600.jpg", label: "Fade Clásico" },
  {
    src: "/assets/generated/corte2.dim_600x600.jpg",
    label: "Low Fade Texturizado",
  },
  {
    src: "/assets/generated/corte3.dim_600x600.jpg",
    label: "Skin Fade & Pompadour",
  },
  {
    src: "/assets/generated/corte4.dim_600x600.jpg",
    label: "Taper Fade Rizado",
  },
  { src: "/assets/generated/corte5.dim_600x600.jpg", label: "Corte Caballero" },
  {
    src: "/assets/generated/corte6.dim_600x600.jpg",
    label: "Mid Fade & Waves",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

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
            Inspírate con nuestros estilos y agenda tu corte por WhatsApp.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
          data-ocid="gallery.list"
        >
          {cortes.map(({ src, label }, i) => (
            <motion.button
              type="button"
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              data-ocid={`gallery.item.${i + 1}`}
              onClick={() => setSelected(i)}
              className="aspect-square rounded-2xl overflow-hidden border-2 border-brand-sky/30 hover:border-brand-gold hover:shadow-card transition-all cursor-pointer group relative w-full"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="font-body text-white text-sm font-semibold">
                  {label}
                </span>
              </div>
            </motion.button>
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
            📸 Agendar mi corte por WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <dialog
          open
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 w-full h-full max-w-none m-0 border-0"
          onClick={() => setSelected(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelected(null)}
        >
          <div className="max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={cortes[selected].src}
              alt={cortes[selected].label}
              className="w-full h-auto"
            />
            <div className="bg-white px-4 py-3 flex justify-between items-center">
              <span className="font-body font-semibold text-brand-dark">
                {cortes[selected].label}
              </span>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Cerrar ✕
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
