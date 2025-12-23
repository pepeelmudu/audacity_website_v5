import { useState, useEffect, useRef } from 'react'
import ojoV1 from './assets/ojo/ojo_v1.svg'
import pupilaV2 from './assets/ojo/pupila_v2.svg'
import brilloV1 from './assets/ojo/brillo_v1.svg'

/**
 * Componente de ojo animado que sigue el movimiento del mouse
 * 
 * @param {string} size - Tamaño del ojo (ej: '2rem', '3rem', '40px'). Por defecto: '2rem'
 * @param {number} maxMovementX - Movimiento máximo horizontal en píxeles. Por defecto: 15
 * @param {number} maxMovementYPercent - Porcentaje de movimiento vertical (0.2 = 20%). Por defecto: 0.2
 * @param {string} transitionSpeed - Velocidad de transición (ej: '0.1s', '0.15s'). Por defecto: '0.1s'
 * @param {string} className - Clases CSS adicionales
 * 
 * @example
 * // Uso básico
 * <AnimatedEye />
 * 
 * @example
 * // Con personalización
 * <AnimatedEye 
 *   size="3rem"
 *   maxMovementX={20}
 *   maxMovementYPercent={0.3}
 *   transitionSpeed="0.15s"
 *   className="my-custom-class"
 * />
 */
export default function AnimatedEye({ 
  size = '2rem',
  maxMovementX = 15,
  maxMovementYPercent = 0.2,
  transitionSpeed = '0.1s',
  className = ''
}) {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const ojoRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calcular la posición relativa del mouse respecto al centro de la pantalla
      const centerX = window.innerWidth / 2
      const relativeX = e.clientX - centerX
      
      // Normalizar: -1 (izquierda) a +1 (derecha)
      const normalizedX = relativeX / centerX
      
      // Calcular movimiento X
      const movementX = normalizedX * maxMovementX
      
      // Obtener la posición Y del vector ojo
      let movementY = 0
      if (ojoRef.current) {
        const ojoRect = ojoRef.current.getBoundingClientRect()
        const ojoCenterY = ojoRect.top + ojoRect.height / 2
        const ojoHeight = ojoRect.height
        
        // Solo mover hacia abajo si el cursor está por debajo del centro del ojo
        if (e.clientY > ojoCenterY) {
          const distanceBelow = e.clientY - ojoCenterY
          const maxMovementY = ojoHeight * maxMovementYPercent
          const normalizedDistance = Math.min(distanceBelow / (window.innerHeight / 2), 1)
          movementY = normalizedDistance * maxMovementY
        }
      }
      
      setMouseX(movementX)
      setMouseY(movementY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [maxMovementX, maxMovementYPercent])

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Capa base: ojo_v1 */}
      <img 
        ref={ojoRef}
        src={ojoV1} 
        alt="Ojo" 
        style={{ 
          height: size,
          width: 'auto',
          filter: 'brightness(0) saturate(100%) invert(100%)',
          position: 'relative',
          zIndex: 1,
          display: 'block'
        }}
      />
      
      {/* Capa intermedia: pupila_v2 */}
      <img 
        src={pupilaV2} 
        alt="Pupila" 
        style={{ 
          height: size,
          width: 'auto',
          filter: 'brightness(0) saturate(100%) invert(100%)',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translate(calc(-50% + ${mouseX}px), ${mouseY * 0.5}px)`,
          zIndex: 2,
          display: 'block',
          transition: `transform ${transitionSpeed} ease-out`
        }}
      />
      
      {/* Capa superior: brillo_v1 */}
      <img 
        src={brilloV1} 
        alt="Brillo" 
        style={{ 
          height: size,
          width: 'auto',
          filter: 'brightness(0) saturate(100%) invert(8%) sepia(4%) saturate(200%) hue-rotate(200deg) brightness(95%) contrast(95%)',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translate(calc(-50% + ${mouseX * 1.1}px), ${mouseY}px)`,
          zIndex: 3,
          display: 'block',
          transition: `transform ${transitionSpeed} ease-out`
        }}
      />
    </div>
  )
}

