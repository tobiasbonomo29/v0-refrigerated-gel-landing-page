import {
  RefreshCcw,
  ThermometerSnowflake,
  ShieldCheck,
  Truck,
} from "lucide-react"

const benefits = [
  {
    icon: RefreshCcw,
    title: "Reutilizable",
    desc: "Nuestros geles pueden utilizarse multiples veces, reduciendo costos y generando menor impacto ambiental.",
    stat: "Hasta 100 ciclos",
  },
  {
    icon: ThermometerSnowflake,
    title: "Cadena de frio segura",
    desc: "Mantienen la temperatura requerida durante horas, garantizando la integridad de productos sensibles.",
    stat: "2°C a 8°C por 48hs",
  },
  {
    icon: ShieldCheck,
    title: "Grado industrial",
    desc: "Fabricados bajo estrictos controles de calidad. Aptos para farmacos, alimentos y muestras biologicas.",
    stat: "Certificado",
  },
  {
    icon: Truck,
    title: "Entrega rapida",
    desc: "Despacho inmediato a todo el territorio argentino con logistica propia y red de distribuidores.",
    stat: "24-72hs",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Ventajas
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-balance">
              Por que elegir FRI O PACK
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Number accent */}
              <span
                className="absolute right-6 top-6 text-5xl font-bold text-muted/60"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>

              <h3
                className="mt-6 text-lg font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>

              <div className="mt-6 inline-flex rounded-full bg-primary/5 px-3 py-1">
                <span className="text-xs font-semibold text-primary">
                  {b.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
