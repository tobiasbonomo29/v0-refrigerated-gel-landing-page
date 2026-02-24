"use client"

import { useState, type FormEvent } from "react"
import { Send, MapPin, Mail, Phone } from "lucide-react"

const productOptions = [
  "RS2", "RS3", "RS4", "RS5", "RS6", "RS7",
  "RG1", "RG2", "RG3",
  "TB1", "TB2", "TB3", "TB1X20",
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left info */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contacto
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-balance">
                Solicite su presupuesto
              </span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Complete el formulario y nuestro equipo comercial le respondera en
              menos de 24 horas con una cotizacion personalizada.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Direccion
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Parque Industrial, Buenos Aires, Argentina
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    ventas@gelfrio.com.ar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Telefono
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +54 11 1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3
                    className="mt-6 text-2xl font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Nos pondremos en contacto con usted a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      placeholder="Juan Perez"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="empresa" className="text-sm font-medium text-foreground">
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      required
                      placeholder="Empresa S.A."
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="juan@empresa.com"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                      Telefono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="+54 11 1234-5678"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="producto" className="text-sm font-medium text-foreground">
                      Producto *
                    </label>
                    <select
                      id="producto"
                      required
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccionar producto
                      </option>
                      {productOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cantidad" className="text-sm font-medium text-foreground">
                      Cantidad requerida
                    </label>
                    <input
                      id="cantidad"
                      type="text"
                      placeholder="Ej: 1000 unidades"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Detalle su consulta o requerimientos especificos..."
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Solicitar presupuesto
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
