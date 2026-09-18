import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from "three"
import { gsap } from "gsap"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import "./horizon-hero-section.css"

/* =========================================================
   SETTINGS YOU CAN TWEAK
   ========================================================= */

// Where the camera sits at the start, middle, and end of the scroll.
const CAMERA_KEYS = [
  { x: 0, y: 30, z: 300 },
  { x: 0, y: 40, z: -50 },
  { x: 0, y: 50, z: -700 },
]

const TOTAL_PANELS = 3

/* =========================================================
   SMALL HELPER: splits a line of text into letters
   so GSAP can animate them one by one
   ========================================================= */

function SplitLine({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <span className="hz-line" aria-hidden="true">
      {words.map((word, w) => (
        <span key={w}>
          <span className="hz-word">
            {word.split("").map((char, i) => (
              <span className="hz-char" key={i}>
                {char}
              </span>
            ))}
          </span>
          {w < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  )
}

/* =========================================================
   THE HERO
   ========================================================= */

type Stat = {
  number: string
  label: string
}

function HorizonHero({ stats = [] }: { stats?: Stat[] }) {
  const rootRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0) // 0 → 1 while scrolling through the hero

  const [activePanel, setActivePanel] = useState(0)

  /* ---------- 0. LET THE HERO STAY PINNED ---------- */
  // "Pinning" (position: sticky) stops working if any parent element has
  // overflow: hidden / auto / scroll. This finds such parents and switches
  // them to overflow: clip (looks identical, but doesn't block pinning).
  // It puts everything back when you leave the page.

  useLayoutEffect(() => {
    const changed: { element: HTMLElement; previous: string }[] = []
    const blocksPinning = (value: string) => value !== "visible" && value !== "clip"

    let parent: HTMLElement | null = rootRef.current?.parentElement ?? null
    while (parent && parent !== document.body && parent !== document.documentElement) {
      const style = window.getComputedStyle(parent)
      if (blocksPinning(style.overflowX) || blocksPinning(style.overflowY)) {
        changed.push({ element: parent, previous: parent.style.overflow })
        parent.style.overflow = "clip"
      }
      parent = parent.parentElement
    }

    return () => {
      changed.forEach(({ element, previous }) => {
        element.style.overflow = previous
      })
    }
  }, [])

  /* ---------- 1. THREE.JS SCENE ---------- */

  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    if (!canvas || !stage) return

    let width = stage.clientWidth
    let height = stage.clientHeight

    // Scene + camera + renderer
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.00025)

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000)
    camera.position.set(CAMERA_KEYS[0].x, CAMERA_KEYS[0].y, CAMERA_KEYS[0].z)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.5

    // Glow effect
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(
      new UnrealBloomPass(new THREE.Vector2(width, height), 0.8, 0.4, 0.85)
    )

    /* ----- Stars (3 layers) ----- */

    const stars: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>[] = []
    const starCount = 5000

    for (let layer = 0; layer < 3; layer++) {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(starCount * 3)
      const colors = new Float32Array(starCount * 3)
      const sizes = new Float32Array(starCount)
      const color = new THREE.Color()

      for (let j = 0; j < starCount; j++) {
        const radius = 200 + Math.random() * 800
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)

        positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[j * 3 + 2] = radius * Math.cos(phi)

        const pick = Math.random()
        if (pick < 0.7) color.setHSL(0, 0, 0.8 + Math.random() * 0.2)
        else if (pick < 0.9) color.setHSL(0.08, 0.5, 0.8) // warm gold tint
        else color.setHSL(0.6, 0.5, 0.8) // cool blue tint

        colors[j * 3] = color.r
        colors[j * 3 + 1] = color.g
        colors[j * 3 + 2] = color.b

        sizes[j] = Math.random() * 2 + 0.5
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

            float angle = time * 0.05 * (1.0 - depth * 0.3);
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

    /* ----- Nebula (the coloured cloud far away) ----- */

    const nebula = new THREE.Mesh(
      new THREE.PlaneGeometry(8000, 4000, 100, 100),
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0x0033ff) },
          color2: { value: new THREE.Color(0xff0066) },
          opacity: { value: 0.3 },
        },
        vertexShader: `
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;

          void main() {
            vUv = uv;
            vec3 pos = position;

            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;

          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);

            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;

            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    )
    nebula.position.z = -1050
    scene.add(nebula)

    /* ----- Mountains (4 layers) ----- */

    const mountains: THREE.Mesh<THREE.ShapeGeometry, THREE.MeshBasicMaterial>[] = []
    const mountainLayers = [
      { distance: -50, height: 60, color: 0x1a1a2e, opacity: 1 },
      { distance: -100, height: 80, color: 0x16213e, opacity: 0.8 },
      { distance: -150, height: 100, color: 0x0f3460, opacity: 0.6 },
      { distance: -200, height: 120, color: 0x0a4668, opacity: 0.4 },
    ]

    mountainLayers.forEach((layer) => {
      const points: THREE.Vector2[] = []
      const segments = 50

      for (let i = 0; i <= segments; i++) {
        const x = (i / segments - 0.5) * 1000
        const y =
          Math.sin(i * 0.1) * layer.height +
          Math.sin(i * 0.05) * layer.height * 0.5 +
          Math.random() * layer.height * 0.2 -
          100
        points.push(new THREE.Vector2(x, y))
      }

      points.push(new THREE.Vector2(5000, -300))
      points.push(new THREE.Vector2(-5000, -300))

      const mountain = new THREE.Mesh(
        new THREE.ShapeGeometry(new THREE.Shape(points)),
        new THREE.MeshBasicMaterial({
          color: layer.color,
          transparent: true,
          opacity: layer.opacity,
          side: THREE.DoubleSide,
        })
      )
      mountain.position.z = layer.distance
      mountain.userData.baseOpacity = layer.opacity
      scene.add(mountain)
      mountains.push(mountain)
    })

    /* ----- Atmosphere (soft blue glow around everything) ----- */

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(600, 32, 32),
      new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vNormal;

          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          uniform float time;

          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;

            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;

            gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      })
    )
    scene.add(atmosphere)

    /* ----- Animation loop ----- */

    const smooth = { ...CAMERA_KEYS[0] }
    let frameId = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      const time = Date.now() * 0.001
      const p = progressRef.current

      stars.forEach((field) => {
        field.material.uniforms.time.value = time
      })
      nebula.material.uniforms.time.value = time * 0.5
      atmosphere.material.uniforms.time.value = time

      // Work out where the camera SHOULD be for the current scroll amount
      const seg = p * (CAMERA_KEYS.length - 1)
      const i = Math.min(Math.floor(seg), CAMERA_KEYS.length - 2)
      const t = seg - i
      const a = CAMERA_KEYS[i]
      const b = CAMERA_KEYS[i + 1]
      const target = {
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t,
        z: a.z + (b.z - a.z) * t,
      }

      // Glide toward that spot (0.05 = smoothness; lower = slower glide)
      smooth.x += (target.x - smooth.x) * 0.05
      smooth.y += (target.y - smooth.y) * 0.05
      smooth.z += (target.z - smooth.z) * 0.05

      camera.position.set(
        smooth.x + Math.sin(time * 0.1) * 2,
        smooth.y + Math.cos(time * 0.15) * 1,
        smooth.z
      )
      camera.lookAt(0, 10, -600)

      // Mountains sway a little, then fade out once the camera flies past them
      const fade = Math.min(Math.max((0.75 - p) / 0.1, 0), 1)
      mountains.forEach((mountain, index) => {
        const parallax = 1 + index * 0.5
        mountain.position.x = Math.sin(time * 0.1) * 2 * parallax
        mountain.position.y = 50 + Math.cos(time * 0.15) * parallax
        mountain.material.opacity = mountain.userData.baseOpacity * fade
        mountain.visible = fade > 0
      })

      composer.render()
    }

    animate()

    /* ----- Resize ----- */

    const handleResize = () => {
      width = stage.clientWidth
      height = stage.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      composer.setSize(width, height)
    }
    window.addEventListener("resize", handleResize)

    /* ----- Cleanup (runs when leaving the page) ----- */

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

      composer.dispose()
      renderer.dispose()
    }
  }, [])

  /* ---------- 2. SCROLL TRACKING ---------- */

  useEffect(() => {
    const handleScroll = () => {
      const section = rootRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1)

      progressRef.current = p

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${p})`
      }

      setActivePanel(Math.min(Math.floor(p * TOTAL_PANELS), TOTAL_PANELS - 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  /* ---------- 3. INTRO ANIMATION (GSAP) ---------- */

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.2 })
        .from(".hz-char", {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.03,
          ease: "power4.out",
        })
        .from(
          ".hz-fade",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.7"
        )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  /* ---------- 4. WHAT YOU SEE ---------- */

  const panelClass = (index: number) =>
    `hz-panel${activePanel === index ? " is-active" : ""}`

  return (
    <section className="hz-hero" ref={rootRef}>
      <div className="hz-stage" ref={stageRef}>
        <canvas className="hz-canvas" ref={canvasRef} aria-hidden="true" />
        <div className="hz-shade" />

        {/* ===== PANEL 1 — main hero ===== */}
        <div className={panelClass(0)} aria-hidden={activePanel !== 0}>
          <div className="home-hero-content">
            <div className="home-eyebrow hz-fade">
              <span className="home-eyebrow-line" />
              <span>VICTIMOLOGY • LEARNING • JUSTICE</span>
            </div>

            <h1
              className="home-hero-title"
              aria-label="Understanding Victims. Advancing Justice."
            >
              <SplitLine text="Understanding Victims." />
              <span className="hz-gold">
                <SplitLine text="Advancing Justice." />
              </span>
            </h1>

            <p className="home-hero-description hz-fade">
              Explore victimology, understand the lived experiences of
              victims, discover their rights, and learn how prevention
              and justice can create safer, more compassionate communities.
            </p>

            <div className="home-hero-buttons hz-fade">
              <Link to="/victimology" className="home-btn home-btn-gold">
                Explore Victimology
                <span>→</span>
              </Link>

              <Link to="/rights" className="home-btn home-btn-outline">
                Discover Victim Rights
                <span>→</span>
              </Link>
            </div>

            <div className="home-hero-info hz-fade">
              <div className="home-info-item">
                <strong>GLOBAL</strong>
                <span>Perspective</span>
              </div>
              <div className="home-info-divider" />
              <div className="home-info-item">
                <strong>JUSTICE</strong>
                <span>Focused</span>
              </div>
              <div className="home-info-divider" />
              <div className="home-info-item">
                <strong>AWARENESS</strong>
                <span>Driven</span>
              </div>
            </div>
          </div>

          <div className="home-hero-stats hz-fade">
            <div className="home-stats-container">
              {stats.map((stat) => (
                <div className="home-stat" key={stat.number}>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== PANEL 2 — rights ===== */}
        <div className={panelClass(1)} aria-hidden={activePanel !== 1}>
          <div className="home-hero-content">
            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>VICTIM RIGHTS</span>
            </div>

            <h2 className="home-hero-title hz-title-sm">
              Every victim deserves
              <br />
              <span className="hz-gold">to be heard.</span>
            </h2>

            <p className="home-hero-description">
              Learn about the protections, support, and access to justice
              that the 1985 UN Declaration set out for victims of crime.
            </p>

            <div className="home-hero-buttons">
              <Link to="/rights" className="home-btn home-btn-gold">
                Discover Victim Rights
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ===== PANEL 3 — prevention ===== */}
        <div className={panelClass(2)} aria-hidden={activePanel !== 2}>
          <div className="home-hero-content">
            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>PREVENTION & IMPACT</span>
            </div>

            <h2 className="home-hero-title hz-title-sm">
              Awareness can
              <br />
              <span className="hz-gold">create change.</span>
            </h2>

            <p className="home-hero-description">
              See how crime affects people and communities, and how early
              intervention and community action can reduce victimization.
            </p>

            <div className="home-hero-buttons">
              <Link to="/prevention" className="home-btn home-btn-gold">
                Explore Prevention
                <span>→</span>
              </Link>

              <Link to="/impact" className="home-btn home-btn-outline">
                See Crime Impact
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Scroll progress (right edge) ===== */}
        <div className="hz-progress" aria-hidden="true">
          <span className="hz-progress-count">
            {String(activePanel + 1).padStart(2, "0")} /{" "}
            {String(TOTAL_PANELS).padStart(2, "0")}
          </span>
          <div className="hz-progress-track">
            <div className="hz-progress-fill" ref={fillRef} />
          </div>
          <span className="hz-progress-label">SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default HorizonHero
