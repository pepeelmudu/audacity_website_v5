# AnimatedEye Component

Componente React reutilizable de un ojo animado que sigue el movimiento del mouse.

## 📁 Estructura de archivos

```
EXPORT/
├── AnimatedEye.jsx          # Componente principal
├── assets/
│   └── ojo/
│       ├── ojo_v1.svg       # Capa base del ojo
│       ├── pupila_v2.svg    # Capa de la pupila (se mueve)
│       └── brillo_v1.svg    # Capa de brillo (se mueve)
└── README.md                # Este archivo
```

## 🚀 Instalación

1. Copia la carpeta `EXPORT` completa a tu proyecto
2. Asegúrate de tener React instalado (`react` y `react-dom`)

## 📦 Uso básico

```jsx
import AnimatedEye from './EXPORT/AnimatedEye'

function App() {
  return (
    <div>
      <AnimatedEye />
    </div>
  )
}
```

## ⚙️ Props disponibles

| Prop | Tipo | Por defecto | Descripción |
|------|------|-------------|-------------|
| `size` | `string` | `'2rem'` | Tamaño del ojo (ej: `'2rem'`, `'3rem'`, `'40px'`) |
| `maxMovementX` | `number` | `15` | Movimiento máximo horizontal en píxeles |
| `maxMovementYPercent` | `number` | `0.2` | Porcentaje de movimiento vertical (0.2 = 20%) |
| `transitionSpeed` | `string` | `'0.1s'` | Velocidad de transición (ej: `'0.1s'`, `'0.15s'`) |
| `className` | `string` | `''` | Clases CSS adicionales |

## 📝 Ejemplos

### Uso básico
```jsx
<AnimatedEye />
```

### Tamaño personalizado
```jsx
<AnimatedEye size="3rem" />
```

### Movimiento más amplio
```jsx
<AnimatedEye 
  maxMovementX={25}
  maxMovementYPercent={0.3}
/>
```

### Transición más lenta
```jsx
<AnimatedEye transitionSpeed="0.2s" />
```

### Con clases CSS personalizadas
```jsx
<AnimatedEye 
  className="my-custom-class"
  size="4rem"
/>
```

### Ejemplo completo
```jsx
import AnimatedEye from './EXPORT/AnimatedEye'

function Header() {
  return (
    <header>
      <div className="logo-container">
        <AnimatedEye 
          size="2rem"
          maxMovementX={15}
          maxMovementYPercent={0.2}
          transitionSpeed="0.1s"
          className="eye-logo"
        />
      </div>
    </header>
  )
}
```

## 🎨 Características

- ✅ Seguimiento suave del mouse
- ✅ Movimiento horizontal y vertical
- ✅ Transiciones personalizables
- ✅ Tamaño configurable
- ✅ Sin dependencias externas (solo React)
- ✅ Completamente responsive

## 🔧 Cómo funciona

El componente utiliza tres capas SVG superpuestas:

1. **ojo_v1.svg**: Capa base estática del ojo
2. **pupila_v2.svg**: Pupila que se mueve siguiendo el mouse
3. **brillo_v1.svg**: Brillo que se mueve con un efecto parallax

El movimiento se calcula basándose en:
- La posición del mouse relativa al centro de la pantalla (eje X)
- La posición del mouse relativa al centro del ojo (eje Y, solo hacia abajo)

## 📄 Licencia

Este componente es parte del proyecto Audacity Web v1.

