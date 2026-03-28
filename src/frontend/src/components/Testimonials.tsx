import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "María González",
    role: "Dueña de Pastelería",
    text: "¡Luz me hizo una página increíble! Mis ventas aumentaron muchísimo desde que tengo mi web. La recomiendo al 100%.",
    initials: "MG",
    color: "bg-fuchsia-900 text-fuchsia-200",
  },
  {
    name: "Carlos Pérez",
    role: "Músico Independiente",
    text: "Tenía mis redes pero me faltaba algo propio. Luz me creó mi página artística y ahora mis fans me encuentran fácilmente.",
    initials: "CP",
    color: "bg-purple-900 text-purple-200",
  },
  {
    name: "Andreína Molina",
    role: "Emprendedora Digital",
    text: "Super profesional y rápida. Mi blog quedó exactamente como lo soñé. Además el precio en bolívares fue muy accesible.",
    initials: "AM",
    color: "bg-pink-900 text-pink-200",
  },
  {
    name: "José Ramírez",
    role: "Organizador de Eventos",
    text: "La página de mi empresa de eventos quedó espectacular. Elegante, profesional y muy fácil de usar. ¡Gracias Luz!",
    initials: "JR",
    color: "bg-violet-900 text-violet-200",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-garnet/20 border border-brand-garnet/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-gold text-sm font-semibold tracking-wide">
              Testimonios
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo que dicen{" "}
            <span className="text-brand-garnet italic">mis clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            La satisfacción de mis clientes es mi mejor carta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-elevated transition-all duration-300"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-0.5 mb-4">
                {STARS.map((n) => (
                  <Star
                    key={n}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
