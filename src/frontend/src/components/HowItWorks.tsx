import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Escríbenos por WhatsApp",
    desc: "Envíanos un mensaje con tu disponibilidad y el corte que deseas. Te respondemos enseguida.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Agendamos tu cita",
    desc: "Coordinamos el día y la hora que mejor te convenga. Sin complicaciones.",
    icon: "📅",
  },
  {
    number: "03",
    title: "Yelier va a tu casa",
    desc: "Nuestro barbero llega puntual a tu domicilio con todos los equipos. ¡Disfruta el servicio!",
    icon: "🏠",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-brand-dark" data-ocid="howworks.section">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-sky/20 text-brand-sky font-body font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ¿Cómo Funciona?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            3 pasos para tu corte perfecto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`howworks.item.${i + 1}`}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/8 transition-colors"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="font-display text-4xl font-bold text-brand-gold/30 mb-2">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="font-body text-white/60 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
