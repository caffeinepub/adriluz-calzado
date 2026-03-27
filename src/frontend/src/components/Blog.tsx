import { motion } from "motion/react";

const posts = [
  {
    title: "Cómo mantener tu corte fresco por más tiempo",
    excerpt:
      "Después de un buen corte, lo importante es mantenerlo. Aquí te damos los mejores consejos de Yelier para que tu estilo dure semanas.",
    date: "15 de Marzo, 2026",
    category: "Consejos",
    gradient: "from-brand-sky/80 to-brand-sky",
  },
  {
    title: "Los mejores estilos para 2026",
    excerpt:
      "Desde degradados suaves hasta cortes clásicos reinventados: conoce las tendencias de este año y descubre cuál es tu estilo.",
    date: "8 de Marzo, 2026",
    category: "Tendencias",
    gradient: "from-brand-gold/70 to-brand-gold",
  },
  {
    title: "Consejos de Yelier para el cuidado de la barba",
    excerpt:
      "Una barba bien cuidada hace la diferencia. Yelier comparte su rutina profesional para tener una barba siempre impecable.",
    date: "1 de Marzo, 2026",
    category: "Barbería",
    gradient: "from-brand-dark/80 to-brand-navy",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-background" data-ocid="blog.section">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-sky/10 text-brand-sky font-body font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Artículos de YilertBarber
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="blog.list"
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`blog.item.${i + 1}`}
              className="bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
            >
              {/* Gradient placeholder */}
              <div
                className={`h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
              >
                <span className="text-6xl">✂️</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-body font-semibold bg-brand-sky/10 text-brand-sky px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs font-body text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-sky/20 flex items-center justify-center text-xs">
                    Y
                  </div>
                  <span className="font-body text-xs font-medium text-muted-foreground">
                    Yelier Hernandez
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
