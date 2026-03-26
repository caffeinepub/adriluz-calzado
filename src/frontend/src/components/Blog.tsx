import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import type { BlogPost } from "../hooks/useQueries";

const staticPosts = [
  {
    title: "Cómo elegir el zapato perfecto para cada ocasión",
    content:
      "Cada evento requiere el calzado adecuado. Desde una reunión de trabajo hasta una cena romántica, te enseñamos a combinar estilo y comodidad. Considera el tipo de suelo, la duración del evento y tu outfit para hacer la elección ideal.",
    author: "Luz Adriani",
    date: "Marzo 2026",
    image:
      "/assets/uploads/img-20260326-wa0079-019d2b57-0e65-73ed-8512-b3fb9c47c1e9-1.jpg",
  },
  {
    title: "Cuidado y mantenimiento de tus zapatos de cuero",
    content:
      "El cuero genuino puede durar años si lo cuidas bien. Aprende a limpiar, nutrir y almacenar tus zapatos de cuero para que siempre luzcan impecables. Los productos correctos marcan la diferencia.",
    author: "Luz Adriani",
    date: "Febrero 2026",
    image:
      "/assets/uploads/img-20260326-wa0044-019d2b57-11e6-7609-a833-4cfc8cc3fd06-11.jpg",
  },
  {
    title: "Tendencias en calzado femenino esta temporada",
    content:
      "Los tacones bloque regresan con fuerza, los animal prints dominan las pasarelas y las plataformas siguen siendo tendencia. Descubre qué estilos son los favoritos esta temporada y cómo llevarlos con tu guardarropa.",
    author: "Luz Adriani",
    date: "Enero 2026",
    image:
      "/assets/uploads/img-20260326-wa0072-019d2b57-101d-767b-bc07-b4a8df1988c1-7.jpg",
  },
];

interface BlogProps {
  posts: BlogPost[];
  isLoading: boolean;
}

export default function Blog({ posts: _posts, isLoading }: BlogProps) {
  const displayPosts = staticPosts;

  return (
    <section id="blog" className="py-16 bg-muted/40" data-ocid="blog.section">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Blog de Moda
          </h2>
          <p className="mt-2 font-body text-muted-foreground">
            Consejos y tendencias de Luz Adriani
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="blog.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-card"
              >
                <Skeleton className="aspect-video" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-5 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`blog.item.${i + 1}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs font-body text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
