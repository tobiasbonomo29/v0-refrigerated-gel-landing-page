# 📋 INSTRUCCIONES PARA DESPLEGAR EN GITHUB PAGES

## ✅ Configuración Completada

He configurado tu proyecto para que se pueda desplegar en GitHub Pages. Los cambios incluyen:

1. ✅ Configuración de Next.js para exportación estática
2. ✅ GitHub Actions workflow para deploy automático  
3. ✅ Scripts de build optimizados
4. ✅ Archivos necesarios (.nojekyll)

## 🚀 Pasos para Desplegar

### Opción A: Usando el Repositorio Existente (si ya tienes uno)

Si ya tienes un repositorio de GitHub, sigue estos pasos:

1. **Abrir la terminal de PowerShell en VS Code** (Ctrl + `)

2. **Verificar que estés en la carpeta del proyecto:**
   ```powershell
   cd c:\Users\user\v0-refrigerated-gel-landing-page
   ```

3. **Inicializar Git (si no está inicializado):**
   ```powershell
   git init
   ```

4. **Agregar todos los archivos:**
   ```powershell
   git add .
   ```

5. **Hacer commit de los cambios:**
   ```powershell
   git commit -m "Configuracion para GitHub Pages"
   ```

6. **Conectar con tu repositorio en GitHub:**
   ```powershell
   git remote add origin https://github.com/TU_USUARIO/v0-refrigerated-gel-landing-page.git
   ```
   ⚠️ **IMPORTANTE**: Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub

7. **Subir los cambios:**
   ```powershell
   git branch -M main
   git push -u origin main
   ```

### Opción B: Crear un Nuevo Repositorio desde Cero

1. **Ve a GitHub.com** e inicia sesión

2. **Crear nuevo repositorio:**
   - Click en el botón "+" arriba a la derecha → "New repository"
   - Nombre del repositorio: `v0-refrigerated-gel-landing-page`
   - Descripción: "Landing page para FRI O PACK - Geles Refrigerantes"
   - Público o Privado (tu elección)
   - **NO** marcar "Add README" ni ".gitignore" ni "license"
   - Click en "Create repository"

3. **En tu terminal de VS Code, ejecuta:**
   ```powershell
   cd c:\Users\user\v0-refrigerated-gel-landing-page
   git init
   git add .
   git commit -m "Initial commit - FRI O PACK landing page"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/v0-refrigerated-gel-landing-page.git
   git push -u origin main
   ```

## ⚙️ Configurar GitHub Pages

Después de subir el código:

1. **Ve a tu repositorio en GitHub**

2. **Click en "Settings"** (Configuración)

3. **En el menú lateral, click en "Pages"**

4. **En "Source" (Fuente):**
   - Selecciona "GitHub Actions"
   - **NO** selecciones "Deploy from a branch"

5. **¡Listo!** El deploy se ejecutará automáticamente

## 🌐 URL de tu Sitio

Una vez desplegado, tu sitio estará disponible en:

```
https://TU_USUARIO.github.io/v0-refrigerated-gel-landing-page/
```

Por ejemplo, si tu usuario es "juanperez":
```
https://juanperez.github.io/v0-refrigerated-gel-landing-page/
```

## 📊 Ver el Progreso del Deploy

1. Ve a tu repositorio en GitHub
2. Click en la pestaña "Actions"
3. Verás el workflow "Deploy to GitHub Pages" ejecutándose
4. Cuando termine (símbolo ✅ verde), tu sitio estará listo
5. El proceso toma aproximadamente 2-3 minutos

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios y los subas a GitHub, se desplegará automáticamente:

```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

## ❗ Solución de Problemas Comunes

### Error: "Permission denied"
Necesitas configurar tus credenciales de GitHub:
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Error: "remote origin already exists"
Elimina el remote existente:
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/v0-refrigerated-gel-landing-page.git
```

### El sitio no carga bien (404 en recursos)
Verifica que el nombre del repositorio sea exactamente `v0-refrigerated-gel-landing-page`

### GitHub Pages no está disponible
En Settings → Pages, asegúrate de que:
- Source esté en "GitHub Actions"
- El workflow haya terminado exitosamente (Actions tab)

## 📧 Compartir con tu Cliente

Una vez desplegado, comparte con tu cliente el link:
```
https://TU_USUARIO.github.io/v0-refrigerated-gel-landing-page/
```

El sitio es completamente funcional y profesional, listo para mostrar.

## 🎯 Próximos Pasos Recomendados

1. ✅ **Desplegar el sitio** siguiendo estas instrucciones
2. 📸 **Agregar imágenes reales** de los productos en `public/images/`
3. 📝 **Personalizar contenido** según necesidades específicas
4. 🌐 **Dominio personalizado** (opcional): Puedes configurar un dominio propio en Settings → Pages → Custom domain

---

**¿Necesitas ayuda?** Si tienes algún problema durante el despliegue, avísame y te ayudaré a resolverlo.
