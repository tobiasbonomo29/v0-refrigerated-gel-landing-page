import { MapPin, Mail, Phone } from "lucide-react"

const basePath = process.env.NODE_ENV === 'production' ? '/v0-refrigerated-gel-landing-page' : ''

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={`${basePath}/images/logo.png`}
                alt="FRI O PACK logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span
                className="text-lg font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                FRI O PACK
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fabricantes de geles refrigerantes industriales para toda la Argentina.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground">Navegacion</p>
            <nav className="mt-3 flex flex-col gap-2">
              {["Inicio", "Nosotros", "Productos", "Beneficios", "Industrias", "Contacto"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-sm font-semibold text-foreground">Contacto</p>
            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Blanco Encalada 80, Villa Martelli
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:friopack4@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  friopack4@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+5491164360896" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +54 9 11 6436-0896
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {'© 2026 FRI O PACK. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
