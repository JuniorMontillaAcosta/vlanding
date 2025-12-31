# VeraciousVision Landing Page

Landing page profesional para VeraciousVision, una startup de computer vision que detecta mentiras con IA en entrevistas laborales.

## Tecnologías Utilizadas

- **React 18+** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TypeScript** - Type safety
- **TailwindCSS** - Framework CSS utility-first
- **Lucide React** - Iconos modernos

## Características

- Diseño responsive (mobile-first)
- Paleta de colores morada con gradientes modernos
- Animaciones sutiles y transiciones suaves
- Modal de video educativo integrado
- Formulario de contacto funcional
- Optimización SEO básica
- Accesibilidad web

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Hero.tsx            # Sección hero con CTA
│   ├── VideoSection.tsx    # Botón y modal de video
│   ├── Benefits.tsx        # Beneficios clave
│   ├── HowItWorks.tsx      # Proceso en 4 pasos
│   ├── Testimonials.tsx    # Casos de uso y testimonios
│   ├── ContactForm.tsx     # Formulario de demo
│   └── Footer.tsx          # Footer con links
├── App.tsx                 # Componente principal
├── main.tsx               # Entry point
└── index.css              # Estilos globales y animaciones
```

## Instalación

### Requisitos previos

- Node.js 18+
- npm o yarn

### Pasos

1. Clona el repositorio o descarga los archivos

2. Instala las dependencias:
```bash
npm install
```

## Ejecución

### Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview del Build

```bash
npm run preview
```

## Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`. Puedes modificar la paleta de colores editando el objeto `primary`:

```javascript
colors: {
  primary: {
    50: '#faf5ff',
    // ... más tonos
  },
}
```

### Contenido

Cada componente en `src/components/` contiene su propio contenido que puede ser fácilmente modificado:

- Textos y títulos
- Imágenes (actualmente usando Pexels)
- Enlaces y rutas
- Datos de testimonios

### Video

El video en `VideoSection.tsx` actualmente apunta a un video de YouTube de ejemplo. Reemplaza la URL en:

```typescript
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

## SEO

Los meta tags están configurados en `index.html`:

- Title y description optimizados
- Open Graph tags para redes sociales
- Twitter Card tags
- Keywords relevantes

## Accesibilidad

- Navegación por teclado
- Labels apropiados en formularios
- Atributos ARIA donde es necesario
- Contraste de colores adecuado

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Contacto

Para más información sobre VeraciousVision:
- Email: info@veraciousvision.com
- Teléfono: +34 900 000 000
- Ubicación: Barcelona, España
