import { motion } from "motion/react";

const categories = [
  {
    id: "damas",
    label: "Damas",
    desc: "Tacones, sandalias y m\u00e1s",
    image:
      "/assets/uploads/img-20260326-wa0073-019d2b57-0f0e-76be-aa40-f8521e1d39a8-3.jpg",
  },
  {
    id: "caballeros",
    label: "Caballeros",
    desc: "Formales y casuales",
    image:
      "/assets/uploads/img-20260326-wa0055-019d2b57-1073-74b8-a1d8-dc782c57dd7e-8.jpg",
  },
  {
    id: "ninos",
    label: "Ni\u00f1os y Ni\u00f1as",
    desc: "Comodidad y estilo",
    image:
      "/assets/uploads/img-20260326-wa0044-019d2b57-11e6-7609-a833-4cfc8cc3fd06-11.jpg",
  },
];

interface CategoryTilesProps {
  onFilter: (cat: string) => void;
}

export default function CategoryTiles({ onFilter }: CategoryTilesProps) {
  return (
    <section className="py-16 bg-background" data-ocid="categories.section">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nuestras Categor\u00edas
          </h2>
          <p className="mt-2 font-body text-muted-foreground">
            Calzado para cada miembro de tu familia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onFilter(cat.id)}
              data-ocid="categories.button"
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-shadow cursor-pointer text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-display text-2xl font-bold text-white">
                  {cat.label}
                </h3>
                <p className="font-body text-white/80 text-sm mt-1">
                  {cat.desc}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-brand-rose text-white text-xs font-body font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Ver colecci\u00f3n
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
