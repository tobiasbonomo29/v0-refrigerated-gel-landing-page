import Image from "next/image"
import { Shield, Factory, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about-factory.jpg"
                alt="Planta de produccion de geles refrigerantes GelFrio"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl border border-border bg-card p-5 shadow-lg sm:-right-8">
              <p
                className="text-3xl font-bold text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                +15
              </p>
              <p className="text-sm text-muted-foreground">
                Anos en el mercado argentino
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Sobre nosotros
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-balance">
                Especialistas en soluciones de cadena de frio
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Desde nuestra planta en Argentina, fabricamos geles refrigerantes
              que cumplen con los estandares mas exigentes de la industria.
              Nuestro compromiso es garantizar la integridad termica de sus
              productos durante el transporte y almacenamiento.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Con una capacidad de produccion que abarca todas las lineas RS, RG
              y TB, ofrecemos soluciones a medida para empresas de todo el pais.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Certificados",
                  desc: "Calidad garantizada bajo normas industriales",
                },
                {
                  icon: Factory,
                  title: "Produccion propia",
                  desc: "Control total de la cadena de manufactura",
                },
                {
                  icon: Award,
                  title: "Confianza",
                  desc: "Mas de 500 empresas nos eligen",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
