import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const services = [
  { label: "Página Web Básica", value: "basic", usd: 30 },
  { label: "Página Web Estándar", value: "standard", usd: 60 },
  { label: "Página Web Premium (con blog)", value: "premium", usd: 100 },
  { label: "Blog Profesional", value: "blog", usd: 50 },
  { label: "Página Matrimonio / Evento", value: "wedding", usd: 80 },
  { label: "Página Músico / Cantante", value: "musician", usd: 70 },
  {
    label: "Paquete Completo (web + blog + redes)",
    value: "complete",
    usd: 150,
  },
  { label: "Mantenimiento Mensual", value: "maintenance", usd: 20 },
];

// Tasa BCV aproximada al 27/03/2026
const BCV_RATE = "468.51";

export default function BudgetCalculator() {
  const [service, setService] = useState("basic");
  const [rate, setRate] = useState(BCV_RATE);

  const selected = services.find((s) => s.value === service) ?? services[0];
  const usdPrice = selected.usd;
  const bsPrice = usdPrice * (Number.parseFloat(rate) || 0);

  const waMessage = encodeURIComponent(
    `¡Hola Luz! Me interesa el servicio: ${selected.label}. Presupuesto estimado: $${usdPrice} USD / Bs. ${bsPrice.toLocaleString("es-VE", { maximumFractionDigits: 2 })}. Quisiera más información.`,
  );

  return (
    <section
      id="calculadora"
      className="py-24 bg-gradient-to-br from-black via-brand-garnet/30 to-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-garnet to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-garnet to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-wrap items-center gap-2 bg-brand-garnet/20 border border-brand-garnet/50 rounded-full px-4 py-1.5 mb-4">
              <Calculator className="h-4 w-4 text-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold">
                Calculadora de Presupuesto
              </span>
              <span className="bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-bold px-2 py-0.5 rounded-full">
                ✓ Tarifas actualizadas 2026
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Calcula Tu
              <br />
              <span className="text-brand-gold italic">Presupuesto</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Ingresa la tasa del dólar BCV del día y selecciona el servicio que
              necesitas. Te damos el precio en USD y en bolívares al instante.
            </p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Tasa BCV actualizada
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Cálculo en bolívares y dólares
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Solicita tu cotización personalizada por WhatsApp
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-elevated p-8 border border-border"
            data-ocid="calculator.panel"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-foreground font-semibold">
                  Tipo de servicio
                </Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger
                    className="border-border focus:ring-brand-garnet"
                    data-ocid="calculator.select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label} — ${s.usd} USD
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-semibold">
                  Tasa BCV (Bs. por $1)
                </Label>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="Ej: 468.51"
                  className="border-border focus:ring-brand-garnet"
                  data-ocid="calculator.input"
                />
                <p className="text-xs text-muted-foreground">
                  Tasa BCV referencial al 27/03/2026. Puedes actualizarla cada
                  día.
                </p>
              </div>

              <div className="bg-background rounded-xl p-5 space-y-3 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm font-medium">
                    Precio en USD:
                  </span>
                  <span className="font-display font-bold text-2xl text-brand-garnet">
                    ${usdPrice.toFixed(2)}
                  </span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm font-medium">
                    Precio en Bs.:
                  </span>
                  <span className="font-display font-bold text-2xl text-brand-gold">
                    Bs.{" "}
                    {bsPrice.toLocaleString("es-VE", {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/584125828010?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full bg-brand-garnet hover:bg-brand-garnet/90 text-white font-bold gap-2 shadow-elevated"
                  data-ocid="calculator.submit_button"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar por WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
