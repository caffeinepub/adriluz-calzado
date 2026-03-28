import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const WA_LINK =
  "https://wa.me/584125828010?text=%C2%A1Hola%20Luz!%20Me%20interesa%20tu%20servicio%20de%20creaci%C3%B3n%20de%20p%C3%A1ginas%20web.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre...";

const questions = [
  "Tipo de página que necesito (negocio, evento, blog...)",
  "Presupuesto aproximado en USD o bolívares",
  "Plazo en el que necesito mi página lista",
  "Mis redes sociales o referencias de diseño",
  "Fotos, logo o imágenes para la página",
  "Cualquier idea especial o funcionalidad deseada",
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-black via-brand-garnet/10 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block bg-brand-garnet/20 border border-brand-garnet/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-gold text-sm font-semibold tracking-wide">
              Contacto
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Lista para impulsar{" "}
            <span className="text-brand-garnet italic">tu negocio?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Escríbeme por WhatsApp y con gusto te asesoro. Dime sobre tu
            proyecto y recibe tu cotización personalizada.
          </p>

          {/* Questions list */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-8 mb-8 text-left">
            <h3 className="font-display font-bold text-foreground text-lg mb-5 text-center">
              Puedes preguntarme sobre...
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {questions.map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-brand-garnet hover:bg-brand-garnet/90 text-white gap-2 shadow-elevated px-8 py-6 text-base"
                data-ocid="contact.primary_button"
              >
                <MessageCircle className="h-5 w-5" />
                Escribir por WhatsApp
              </Button>
            </a>
            <a href="mailto:dagneidgutierrez57@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-garnet text-brand-garnet hover:bg-brand-garnet/10 gap-2 px-8 py-6 text-base"
                data-ocid="contact.secondary_button"
              >
                <Mail className="h-5 w-5" />
                Enviar email
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
