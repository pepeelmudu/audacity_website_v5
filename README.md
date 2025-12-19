# AUDACITY Landing Page

Landing page moderna para AUDACITY, una herramienta de reclutamiento con IA.

## 🚀 Tecnologías

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS**
- **framer-motion** (animaciones)
- **shadcn/ui** (componentes UI)

## 📁 Estructura del Proyecto

```
audacity_website_v4/
├── app/
│   ├── layout.tsx          # Layout principal con ModeProvider
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Header con toggle Company/Candidate
│   ├── Hero.tsx            # Sección hero con contenido dinámico
│   └── ui/                 # Componentes shadcn/ui
│       └── button.tsx
├── contexts/
│   └── ModeContext.tsx     # Contexto para modo Company/Candidate
└── lib/
    └── utils.ts            # Utilidades (cn helper)
```

## 🎨 Modos

El sitio tiene dos modos que cambian el contenido y los colores de acento:

- **Company Mode** (por defecto): Azul (#3B82F6)
- **Candidate Mode**: Verde (#10B981)

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## ✨ Características Implementadas

- ✅ Sistema de modo Company/Candidate con React Context
- ✅ Header con toggle de modo y glassmorphism
- ✅ Hero section con contenido dinámico según modo
- ✅ Animaciones con framer-motion
- ✅ Diseño responsive
- ✅ Fondo azul oscuro con gradientes
- ✅ Efectos glassmorphism

## 📝 Próximos Pasos

- [ ] Sección de logos
- [ ] Value props
- [ ] Matchmaking
- [ ] How it works
- [ ] Testimonials
- [ ] FAQ
- [ ] Footer
