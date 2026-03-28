import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const WA_LINK =
  "https://wa.me/584125828010?text=%C2%A1Hola%20Luz!%20Le%C3%AD%20tu%20blog%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20c%C3%B3mo%20crear%20mi%20p%C3%A1gina%20web.";

const posts = [
  {
    cat: "Emprendimiento",
    date: "15 Mar 2026",
    title: "Cómo crear tu presencia digital desde cero",
    excerpt:
      "Guía paso a paso para emprendedores venezolanos que quieren tener su propio espacio en internet sin necesitar conocimientos técnicos.",
    color: "bg-fuchsia-950 text-fuchsia-300 border-fuchsia-800",
  },
  {
    cat: "Negocios",
    date: "08 Mar 2026",
    title: "5 razones por qué tu negocio necesita una página web",
    excerpt:
      "En 2026, no tener página web es dejar dinero sobre la mesa. Descubre cómo una web profesional multiplica tus ventas.",
    color: "bg-pink-950 text-pink-300 border-pink-800",
  },
  {
    cat: "Creadores",
    date: "01 Mar 2026",
    title: "Estrategias digitales para músicos y creadores de contenido",
    excerpt:
      "Tu talento merece ser visto. Aprende cómo construir tu marca personal en línea y conectar con fans y colaboradores.",
    color: "bg-purple-950 text-purple-300 border-purple-800",
  },
  {
    cat: "Marketing",
    date: "22 Feb 2026",
    title: "Cómo atraer clientes con un blog profesional",
    excerpt:
      "El contenido de calidad es el imán más poderoso para atraer clientes. Aprende a crear un blog que venda por ti.",
    color: "bg-violet-950 text-violet-300 border-violet-800",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-garnet/20 border border-brand-garnet/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-gold text-sm font-semibold tracking-wide">
              Blog de Emprendimiento
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog de{" "}
            <span className="text-brand-garnet italic">
              Emprendimiento Digital
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Artículos, consejos y estrategias para crecer en el mundo digital
            venezolano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-elevated transition-all duration-300"
              data-ocid={`blog.item.${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="outline"
                  className={`text-xs border ${p.color}`}
                >
                  {p.cat}
                </Badge>
                <span className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Calendar className="h-3 w-3" />
                  {p.date}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-brand-garnet transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {p.excerpt}
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-brand-garnet hover:bg-brand-garnet/10 gap-1 px-0 font-semibold"
                  data-ocid="blog.secondary_button"
                >
                  Leer más <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
