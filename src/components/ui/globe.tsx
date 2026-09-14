import { useCallback, useEffect, useRef } from "react"
import createGlobe from "cobe"

interface GlobeMarker {
  location: [number, number]
}

interface GlobeProps {
  markers?: GlobeMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: GlobeMarker[] = [
  { location: [51.51, -0.13] },   // London
  { location: [35.68, 139.65] },  // Tokyo
  { location: [48.86, 2.35] },   // Paris
  { location: [40.71, -74.01] }, // New York
  { location: [-33.87, 151.21] },// Sydney
  { location: [12.97, 77.59] },  // Bengaluru
]

export function VictimLensGlobe({
  markers = defaultMarkers,
  className = "",
  speed = 0.0025,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const pointerInteracting = useRef(false)
  const pointerStart = useRef({ x: 0, y: 0 })

  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffset = useRef(0)
  const thetaOffset = useRef(0)

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      pointerInteracting.current = true

      pointerStart.current = {
        x: e.clientX,
        y: e.clientY,
      }

      if (canvasRef.current) {
        canvasRef.current.style.cursor = "grabbing"
      }
    },
    []
  )

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current) {
      phiOffset.current += dragOffset.current.phi
      thetaOffset.current += dragOffset.current.theta

      dragOffset.current = {
        phi: 0,
        theta: 0,
      }
    }

    pointerInteracting.current = false

    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab"
    }
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!pointerInteracting.current) return

      dragOffset.current = {
        phi: (e.clientX - pointerStart.current.x) / 300,
        theta: (e.clientY - pointerStart.current.y) / 1000,
      }
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerup", handlePointerUp)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    let globe: ReturnType<typeof createGlobe> | null = null
    let animationFrame = 0
    let phi = 0

    const initializeGlobe = () => {
      const width = canvas.offsetWidth

      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),

        width,
        height: width,

        phi: 0,
        theta: 0.15,

        dark: 0,
        diffuse: 1.4,

        mapSamples: 16000,
        mapBrightness: 4,

        baseColor: [0.88, 0.84, 0.68],

        markerColor: [0.78, 0.63, 0.15],

        glowColor: [0.78, 0.63, 0.15],

        markerElevation: 0.02,

        markers: markers.map((marker) => ({
          location: marker.location,
          size: 0.018,
        })),
      })

      const animate = () => {
        if (!pointerInteracting.current) {
          phi += speed
        }

        globe?.update({
          phi:
            phi +
            phiOffset.current +
            dragOffset.current.phi,

          theta:
            0.15 +
            thetaOffset.current +
            dragOffset.current.theta,
        })

        animationFrame = requestAnimationFrame(animate)
      }

      animate()

      setTimeout(() => {
        canvas.style.opacity = "1"
      }, 100)
    }

    if (canvas.offsetWidth > 0) {
      initializeGlobe()
    } else {
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver.disconnect()
          initializeGlobe()
        }
      })

      resizeObserver.observe(canvas)

      return () => {
        resizeObserver.disconnect()
        cancelAnimationFrame(animationFrame)
        globe?.destroy()
      }
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      globe?.destroy()
    }
  }, [markers, speed])

  return (
    <div
      className={`relative aspect-square w-full select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          cursor: "grab",
          transition: "opacity 1.2s ease",
          touchAction: "none",
          display: "block",
        }}
      />
    </div>
  )
}