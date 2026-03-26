import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onViewCatalog: () => void;
}

export default function Hero({ onViewCatalog }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative bg-brand-cream overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, oklch(0.52 0.068 12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-sm font-body text-brand-tan font-semibold uppercase tracking-widest">
              📍 Venezuela · Envíos a Domicilio
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Zapatos para{" "}
              <em className="text-brand-rose not-italic">toda tu familia</em>
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Descubre nuestra colección de calzado para damas, caballeros,
              niñas y niños. Hacemos envíos a domicilio —{" "}
              <span className="font-semibold text-foreground">
                ¡pagas al recibir!
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={onViewCatalog}
                data-ocid="hero.primary_button"
                size="lg"
                className="bg-brand-rose hover:bg-brand-rose/90 text-white font-body font-semibold rounded-full px-8 shadow-elevated"
              >
                Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href="https://wa.me/584245488229"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-rose text-brand-rose font-body font-semibold hover:bg-brand-rose hover:text-white transition-colors text-base"
              >
                Haz tu Pedido
              </a>
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute inset-0 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden h-48 shadow-card">
                  <img
                    src="/assets/uploads/img-20260326-wa0079-019d2b57-0e65-73ed-8512-b3fb9c47c1e9-1.jpg"
                    alt="Tacón Zafiro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-card">
                  <img
                    src="/assets/uploads/img-20260326-wa0060_1-019d2b57-1037-7387-871b-6132749c2c38-6.jpg"
                    alt="Zapatillas cuero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-2xl overflow-hidden h-40 shadow-card">
                  <img
                    src="/assets/uploads/img-20260326-wa0069-019d2b57-0f96-7003-a8d5-54f3f2221f22-4.jpg"
                    alt="Colección sandalias"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-44 shadow-card">
                  <img
                    src="/assets/uploads/img-20260326-wa0056-019d2b57-0fbc-74de-a35c-47285ae6832d-5.jpg"
                    alt="Zapatos hombre"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
