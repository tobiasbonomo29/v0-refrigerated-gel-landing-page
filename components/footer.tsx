import { Snowflake } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Snowflake className="h-5 w-5 text-primary" strokeWidth={2.5} />
            <span
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              GelFrio
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
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

          <p className="text-sm text-muted-foreground">
            {'© 2026 GelFrio Argentina. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
