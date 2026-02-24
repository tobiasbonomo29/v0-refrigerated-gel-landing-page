# FRI O PACK - Landing Page

Landing page profesional para FRI O PACK, fabricante de geles refrigerantes industriales en Argentina.

## 🚀 Características

- **Next.js 16** con App Router
- **TypeScript** para type-safety
- **Tailwind CSS 4** para estilos
- **Componentes UI** con Radix UI
- **Responsive** y optimizado para móviles
- **Dark mode** compatible

## 📦 Productos

- **Línea RS**: Geles refrigerantes rígidos (200g - 700g)
- **Línea RG**: Geles refrigerantes flexibles (250g - 750g)
- **Línea TB**: Tubos refrigerantes (150g - 450g)

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build
```

El sitio estará disponible en `http://localhost:3000`

## 🌐 Deploy en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Pasos para el primer deploy:

1. **Crear un repositorio en GitHub** con el nombre `v0-refrigerated-gel-landing-page`

2. **Inicializar Git y subir el código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/v0-refrigerated-gel-landing-page.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - En "Source", selecciona "GitHub Actions"

4. **El sitio se desplegará automáticamente** en:
   ```
   https://TU_USUARIO.github.io/v0-refrigerated-gel-landing-page/
   ```

### Deploy manual:

Si prefieres deploy manual:
```bash
pnpm run build
```

Los archivos estáticos se generarán en la carpeta `out/`

## 📝 Estructura del Proyecto

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── hero-section.tsx   # Sección hero
│   ├── about-section.tsx  # Sobre nosotros
│   ├── products-section.tsx # Productos
│   ├── benefits-section.tsx # Beneficios
│   ├── industries-section.tsx # Industrias
│   ├── contact-section.tsx # Contacto
│   ├── navbar.tsx         # Navegación
│   ├── footer.tsx         # Pie de página
│   ├── whatsapp-button.tsx # Botón WhatsApp
│   └── ui/                # Componentes UI reutilizables
├── public/                # Archivos estáticos
│   └── images/            # Imágenes
└── .github/workflows/     # GitHub Actions
    └── deploy.yml         # Workflow de deploy
```

## 🎨 Personalización

Para personalizar el contenido, edita los archivos en `components/`:

- **Textos**: Modificar directamente en cada componente
- **Colores**: Ajustar en `app/globals.css`
- **Imágenes**: Reemplazar en `public/images/`
- **Productos**: Editar array en `components/products-section.tsx`

## 📧 Contacto

Para más información sobre FRI O PACK y sus productos de geles refrigerantes para cadena de frío.

---

Desarrollado con ❤️ usando Next.js
