import { BookOpen, Globe, Heart, Music, Share2, Video } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web para Negocios",
    desc: "Presencia digital profesional para tu empresa, tienda o emprendimiento. Atrae más clientes 24/7.",
    gradient: "from-fuchsia-950/60 to-fuchsia-900/40",
  },
  {
    icon: Heart,
    title: "Matrimonios y Eventos",
    desc: "Páginas elegantes para bodas, quinceañeras, cumpleaños y todo tipo de eventos especiales.",
    gradient: "from-pink-950/60 to-rose-900/40",
  },
  {
    icon: Music,
    title: "Músicos y Cantantes",
    desc: "Tu perfil artístico en la web. Galería, discografía, fechas de shows y contacto con fans.",
    gradient: "from-purple-950/60 to-violet-900/40",
  },
  {
    icon: BookOpen,
    title: "Blogs Profesionales",
    desc: "Posiciónate como experto en tu área con un blog atractivo, bien organizado y optimizado.",
    gradient: "from-fuchsia-900/50 to-pink-950/40",
  },
  {
    icon: Share2,
    title: "Presencia en Redes Sociales",
    desc: "Estrategia y diseño para Instagram, TikTok, Facebook y más. Conecta con tu audiencia.",
    gradient: "from-pink-900/50 to-fuchsia-950/40",
  },
  {
    icon: Video,
    title: "Creadores de Contenido",
    desc: "Tu hub digital: portfolio, links, canal de YouTube, colaboraciones y monetización.",
    gradient: "from-violet-900/50 to-fuchsia-950/40",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-garnet/20 border border-brand-garnet/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-gold text-sm font-semibold tracking-wide">
              Mis Servicios
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Qué puedo crear{" "}
            <span className="text-brand-garnet italic">para ti?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada proyecto es único. Diseño páginas que reflejan tu identidad y
            convierten visitantes en clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-gradient-to-br ${s.gradient} border border-border p-6 hover:shadow-elevated transition-all duration-300 group`}
              data-ocid="services.card"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-garnet/20 flex items-center justify-center mb-4 group-hover:bg-brand-garnet/40 transition-colors">
                <s.icon className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
