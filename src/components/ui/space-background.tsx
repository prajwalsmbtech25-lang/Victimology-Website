import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import * as THREE from "three"
import "./space-background.css"

/* =========================================================
   SPACE BACKGROUND
   One fixed 3D star scene that sits behind every page.
   - Put it ONCE in App.tsx (not inside each page).
   - It is skipped on the Home page ("/"), which already
     has its own big 3D hero.
   ========================================================= */

const STAR_LAYERS = 2
const STARS_PER_LAYER = 2500

function SpaceScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let width = window.innerWidth
    let height = window.innerHeight

    // If the browser can't do WebGL, just keep the plain dark background
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(width, height, false)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 2000)
    camera.position.set(0, 0, 100)

    /* ----- Stars ----- */

    const stars: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>[] = []

    for (let layer = 0; layer < STAR_LAYERS; layer++) {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(STARS_PER_LAYER * 3)
      const colors = new Float32Array(STARS_PER_LAYER * 3)
      const sizes = new Float32Array(STARS_PER_LAYER)
      const color = new THREE.Color()

      for (let i = 0; i < STARS_PER_LAYER; i++) {
        const radius = 150 + Math.random() * 800
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        const pick = Math.random()
        if (pick < 0.72) color.setHSL(0, 0, 0.8 + Math.random() * 0.2)
        else if (pick < 0.9) color.setHSL(0.12, 0.6, 0.75) // gold tint
        else color.setHSL(0.6, 0.5, 0.8) // blue tint

        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b

        sizes[i] = Math.random() * 2 + 0.5
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          depth: { value: layer },
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float depth;

          void main() {
            vColor = color;
            vec3 pos = position;

            float angle = time * 0.03 * (1.0 - depth * 0.4);
            mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            pos.xy = rot * pos.xy;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
            gl_FragColor = vec4(vColor, opacity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      const points = new THREE.Points(geometry, material)
      scene.add(points)
      stars.push(points)
    }

    /* ----- Soft nebula clouds (kept dim so text stays readable) ----- */

    const nebula = new THREE.Mesh(
      new THREE.PlaneGeometry(6000, 3000, 60, 60),
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0x1030a0) },
          color2: { value: new THREE.Color(0x5a1a7a) },
          opacity: { value: 0.22 },
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float time;

          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;

          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    )
    nebula.position.z = -900
    scene.add(nebula)

    /* ----- Animation ----- */

    let frameId = 0
    let smoothZ = camera.position.z

    const draw = () => {
      const time = performance.now() * 0.001

      stars.forEach((field) => {
        field.material.uniforms.time.value = time
      })
      nebula.material.uniforms.time.value = time * 0.4

      // As you scroll down the page, the camera drifts slowly forward
      const targetZ = 100 - Math.min(window.scrollY, 6000) * 0.03
      smoothZ += (targetZ - smoothZ) * 0.05

      camera.position.set(
        Math.sin(time * 0.05) * 3,
        Math.cos(time * 0.07) * 2,
        smoothZ
      )
      camera.lookAt(0, 0, -600)

      renderer.render(scene, camera)
    }

    const loop = () => {
      frameId = requestAnimationFrame(loop)
      draw()
    }

    if (reduceMotion) draw()
    else loop()

    /* ----- Resize ----- */

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      if (reduceMotion) draw()
    }
    window.addEventListener("resize", handleResize)

    /* ----- Cleanup ----- */

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose()
          const material = object.material
          if (Array.isArray(material)) material.forEach((m) => m.dispose())
          else material.dispose()
        }
      })

      renderer.dispose()
    }
  }, [])

  return (
    <div className="space-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

function SpaceBackground() {
  const { pathname } = useLocation()

  // The Home page has its own 3D hero, so don't draw two scenes there
  if (pathname === "/") return null

  return <SpaceScene />
}

export default SpaceBackground
