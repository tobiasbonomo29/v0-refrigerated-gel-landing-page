#!/usr/bin/env python3
"""
Script para generar favicons a partir del logo principal
"""
try:
    from PIL import Image
except ImportError:
    import subprocess
    import sys
    print("Instalando Pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "-q"])
    from PIL import Image

import os

# Ruta del logo
logo_path = os.path.join(os.path.dirname(__file__), 'public/images/logo.png')
favicon_dir = os.path.join(os.path.dirname(__file__), 'public')

# Abrir logo original
logo = Image.open(logo_path)
print(f"Logo original: {logo.size}")

# Convertir a RGBA si es necesario
if logo.mode != 'RGBA':
    logo = logo.convert('RGBA')

# 1. Icon 32x32 (light y dark)
favicon_32 = logo.resize((32, 32), Image.Resampling.LANCZOS)
favicon_32_path = os.path.join(favicon_dir, 'icon-light-32x32.png')
favicon_32.save(favicon_32_path, 'PNG')
print(f"✅ Creado: icon-light-32x32.png (32x32)")

# Copiar al dark también (mismo icono)
favicon_32_dark_path = os.path.join(favicon_dir, 'icon-dark-32x32.png')
favicon_32.save(favicon_32_dark_path, 'PNG')
print(f"✅ Creado: icon-dark-32x32.png (32x32)")

# 2. Apple icon 180x180
apple_icon = logo.resize((180, 180), Image.Resampling.LANCZOS)
apple_icon_path = os.path.join(favicon_dir, 'apple-icon.png')
apple_icon.save(apple_icon_path, 'PNG')
print(f"✅ Creado: apple-icon.png (180x180)")

print("\n✨ Todos los favicons han sido generados exitosamente!")
print(f"Ubicación: {favicon_dir}/")
