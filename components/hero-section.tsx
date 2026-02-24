import { ArrowRight, ThermometerSnowflake } from "lucide-react"

const basePath = process.env.NODE_ENV === 'production' ? '/v0-refrigerated-gel-landing-page' : ''

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={`${basePath}/images/hero-bg.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.03_240/0.92)] via-[oklch(0.14_0.03_240/0.8)] to-[oklch(0.14_0.03_240/0.5)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.99_0_0/0.15)] bg-[oklch(0.99_0_0/0.08)] px-4 py-1.5 backdrop-blur-sm">
            <ThermometerSnowflake className="h-4 w-4 text-[oklch(0.7_0.1_210)]" />
            <span className="text-sm font-medium text-[oklch(0.85_0.04_220)]">
              FRI O PACK - Geles refrigerantes industriales
            </span>
          </div>

          <h1
            className="text-4xl font-bold leading-tight tracking-tight text-[oklch(0.98_0.005_220)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-balance">
              Cadena de frio{" "}
              <span className="text-[oklch(0.7_0.13_210)]">segura</span> para
              su industria
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[oklch(0.75_0.03_220)]">
            Producimos geles refrigerantes de alta calidad para laboratorios,
            alimentos, logistica y mas. Soluciones confiables para mantener la
            temperatura que su producto necesita.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[oklch(0.99_0_0/0.2)] px-7 py-3.5 text-base font-medium text-[oklch(0.85_0.04_220)] backdrop-blur-sm transition-all hover:bg-[oklch(0.99_0_0/0.08)]"
            >
              Ver productos
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[oklch(0.99_0_0/0.1)] pt-8">
            {[
              { value: "+15", label: "Anos de experiencia" },
              { value: "+500", label: "Clientes activos" },
              { value: "100%", label: "Calidad garantizada" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold text-[oklch(0.7_0.13_210)] sm:text-3xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[oklch(0.65_0.03_220)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
