"use client"

import { useState } from "react"
import { Snowflake, Package } from "lucide-react"

type ProductLine = "all" | "RS" | "RG" | "TB"

interface Product {
  code: string
  line: ProductLine
  name: string
  desc: string
  weight: string
}

const products: Product[] = [
  { code: "RS2", line: "RS", name: "RS2", desc: "Gel refrigerante rigido compacto", weight: "200g" },
  { code: "RS3", line: "RS", name: "RS3", desc: "Gel refrigerante rigido estandar", weight: "300g" },
  { code: "RS4", line: "RS", name: "RS4", desc: "Gel refrigerante rigido mediano", weight: "400g" },
  { code: "RS5", line: "RS", name: "RS5", desc: "Gel refrigerante rigido grande", weight: "500g" },
  { code: "RS6", line: "RS", name: "RS6", desc: "Gel refrigerante rigido XL", weight: "600g" },
  { code: "RS7", line: "RS", name: "RS7", desc: "Gel refrigerante rigido XXL", weight: "700g" },
  { code: "RG1", line: "RG", name: "RG1", desc: "Gel refrigerante flexible chico", weight: "250g" },
  { code: "RG2", line: "RG", name: "RG2", desc: "Gel refrigerante flexible mediano", weight: "500g" },
  { code: "RG3", line: "RG", name: "RG3", desc: "Gel refrigerante flexible grande", weight: "750g" },
  { code: "TB1", line: "TB", name: "TB1", desc: "Tubo refrigerante compacto", weight: "150g" },
  { code: "TB2", line: "TB", name: "TB2", desc: "Tubo refrigerante estandar", weight: "300g" },
  { code: "TB3", line: "TB", name: "TB3", desc: "Tubo refrigerante grande", weight: "450g" },
  { code: "TB1X20", line: "TB", name: "TB1X20", desc: "Tubo refrigerante pack x20", weight: "20x150g" },
]

const filters: { value: ProductLine; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "RS", label: "Linea RS" },
  { value: "RG", label: "Linea RG" },
  { value: "TB", label: "Linea TB" },
]

function getLineColor(line: ProductLine) {
  switch (line) {
    case "RS":
      return "bg-primary/10 text-primary"
    case "RG":
      return "bg-accent/10 text-accent"
    case "TB":
      return "bg-[oklch(0.55_0.12_160)] bg-opacity-10 text-[oklch(0.45_0.1_160)]"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function ProductsSection() {
  const [active, setActive] = useState<ProductLine>("all")

  const filtered =
    active === "all" ? products : products.filter((p) => p.line === active)

  return (
    <section id="productos" className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Catalogo
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-balance">Nuestros productos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Tres lineas de geles refrigerantes disenados para cada necesidad
            industrial. Desde packs rigidos hasta tubos flexibles.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.code}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Product icon area */}
              <div className="flex h-32 items-center justify-center rounded-lg bg-muted/60">
                <div className="flex flex-col items-center gap-2">
                  {product.line === "TB" ? (
                    <Package className="h-10 w-10 text-primary/60" />
                  ) : (
                    <Snowflake className="h-10 w-10 text-primary/60" />
                  )}
                  <span
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {product.code}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${getLineColor(product.line)}`}
                  >
                    {product.line}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {product.weight}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.desc}
                </p>
              </div>

              <a
                href="#contacto"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Consultar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
