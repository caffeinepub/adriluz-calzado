import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const works = [
  {
    title: "Restaurante El Sabor Criollo",
    type: "Negocio",
    desc: "Menú digital, reservas y página de presentación para restaurante venezolano.",
    gradient: "from-fuchsia-700 to-pink-600",
    tag: "Negocio",
  },
  {
    title: "Boda Valeria & Carlos",
    type: "Evento",
    desc: "Página de boda elegante con cuenta regresiva, RSVP y galería de fotos.",
    gradient: "from-pink-700 to-rose-600",
    tag: "Matrimonio",
  },
  {
    title: "Danny Cruz — Artista Musical",
    type: "Música",
    desc: "Perfil artístico con discografía, videos y fechas de presentaciones.",
    gradient: "from-purple-700 to-violet-600",
    tag: "Música",
  },
  {
    title: "Blog Emprendimiento Digital VE",
    type: "Blog",
    desc: "Blog con más de 50 artículos sobre negocios digitales en Venezuela.",
    gradient: "from-fuchsia-600 to-purple-700",
    tag: "Blog",
  },
  {
    title: "Studio Nail Art Caracas",
    type: "Belleza",
    desc: "Catálogo de servicios, galería de trabajos y sistema de citas en línea.",
    gradient: "from-pink-600 to-fuchsia-700",
    tag: "Negocio",
  },
  {
    title: "Quinceañera Isabella 2026",
    type: "Evento",
    desc: "Página mágica con cuenta regresiva, mesa de regalos y confirmación de asistencia.",
    gradient: "from-violet-700 to-fuchsia-600",
    tag: "Evento",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-garnet/20 border border-brand-garnet/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-gold text-sm font-semibold tracking-wide">
              Portafolio
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mis <span className="text-brand-garnet italic">Trabajos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cada página que creo tiene alma propia. Aquí algunos ejemplos de lo
            que puedo hacer por tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300 bg-card"
              data-ocid={`portfolio.item.${i + 1}`}
            >
              {/* Color mockup */}
              <div
                className={`h-40 bg-gradient-to-br ${w.gradient} relative flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/10 rounded-t-2xl" />
                <div className="relative bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="w-32 h-4 bg-white/60 rounded mb-2 mx-auto" />
                  <div className="w-24 h-2 bg-white/40 rounded mb-1 mx-auto" />
                  <div className="w-28 h-2 bg-white/40 rounded mx-auto" />
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-bold text-foreground text-sm leading-tight flex-1">
                    {w.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="ml-2 text-xs bg-brand-garnet/20 text-brand-gold border-brand-garnet/40 shrink-0"
                  >
                    {w.tag}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
