import { CreditCard, MousePointer, ShoppingBag, Truck } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: MousePointer,
    title: "Elige tu modelo",
    desc: "Explora nuestro catálogo y selecciona el par perfecto para ti",
  },
  {
    icon: ShoppingBag,
    title: "Agrega al carrito",
    desc: "Añade tus productos favoritos y revisa tu pedido",
  },
  {
    icon: Truck,
    title: "Enviamos a tu puerta",
    desc: "Hacemos el envío directo a tu domicilio, rápido y seguro",
  },
  {
    icon: CreditCard,
    title: "Paga al recibir",
    desc: "Sin pagos anticipados — pagas cuando recibas tu pedido",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-background" data-ocid="howworks.section">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            ¿Cómo funciona?
          </h2>
          <p className="mt-2 font-body text-muted-foreground">
            Comprar tus zapatos es muy fácil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-rose/10 text-brand-rose mb-4">
                <step.icon className="h-7 w-7" />
              </div>
              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-rose text-white text-xs font-body font-bold mb-3">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
