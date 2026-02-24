import {
  FlaskConical,
  UtensilsCrossed,
  Pill,
  Droplets,
  Building2,
  Truck,
} from "lucide-react"

const industries = [
  {
    icon: Pill,
    title: "Farmaceutica",
    desc: "Transporte seguro de medicamentos, vacunas y muestras biologicas con temperatura controlada.",
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentos",
    desc: "Conservacion de productos perecederos, lacteos, carnes y congelados durante la distribucion.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorios",
    desc: "Envio de reactivos, cultivos y muestras clinicas con cadena de frio garantizada.",
  },
  {
    icon: Droplets,
    title: "Cosmetica",
    desc: "Proteccion termica para productos cosmeticos y dermocosmeticos sensibles a la temperatura.",
  },
  {
    icon: Truck,
    title: "Logistica",
    desc: "Soluciones integrales para operadores logisticos y empresas de transporte refrigerado.",
  },
  {
    icon: Building2,
    title: "Veterinaria",
    desc: "Cadena de frio para farmacos veterinarios, vacunas y muestras para analisis.",
  },
]

export function IndustriesSection() {
  return (
    <section id="industrias" className="relative overflow-hidden bg-[oklch(0.16_0.025_240)] py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7 0.1 210) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.1 210) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.7_0.13_210)]">
            Sectores
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[oklch(0.96_0.005_220)] sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-balance">
              Industrias que confian en nosotros
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[oklch(0.6_0.03_220)]">
            Proveemos geles refrigerantes a los sectores mas exigentes del
            mercado argentino y regional.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group rounded-xl border border-[oklch(0.99_0_0/0.08)] bg-[oklch(0.99_0_0/0.04)] p-8 backdrop-blur-sm transition-all hover:border-[oklch(0.7_0.13_210/0.3)] hover:bg-[oklch(0.99_0_0/0.07)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[oklch(0.7_0.13_210/0.12)]">
                <ind.icon className="h-6 w-6 text-[oklch(0.7_0.13_210)]" />
              </div>
              <h3
                className="mt-5 text-lg font-bold text-[oklch(0.94_0.005_220)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {ind.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[oklch(0.6_0.03_220)]">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
