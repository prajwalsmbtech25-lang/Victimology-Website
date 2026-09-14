import "./App.css"

import Victimology from "./pages/Victimology"
import Types from "./pages/Types"
import Rights from "./pages/Rights"
import Impact from "./pages/Impact"
import Prevention from "./pages/Prevention"
import Cases from "./pages/Cases"
import Resources from "./pages/Resources"
import Law from "./pages/Law"
import About from "./pages/About"

function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="nav-logo">
        Victim<span>Lens</span>
      </a>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/victimology">Victimology</a>
        <a href="/types">Types</a>
        <a href="/rights">Rights</a>
        <a href="/impact">Impact</a>
        <a href="/prevention">Prevention</a>
        <a href="/law">Law</a>
        <a href="/cases">Cases</a>
        <a href="/resources">Resources</a>
        <a href="/about">About</a>
      </div>

 <a href="/about#contact" className="nav-contact">
  Contact
</a>

    </nav>
  )
}

function Home() {
  return (
    <main className="victimlens">

      <Navbar />

      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/victimlens-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">

          <span className="eyebrow">
            VICTIMOLOGY • LEARNING • JUSTICE
          </span>

          <h1>
            Understanding Victims.
            <br />
            <span>Advancing Justice.</span>
          </h1>

          <p>
            Explore victimology, understand the experiences of victims,
            discover their rights, and learn how prevention and justice
            can create safer communities.
          </p>

          <div className="hero-buttons">

            <a
              href="/victimology"
              className="primary-button"
            >
              Explore Victimology
            </a>

            <a
              href="/rights"
              className="secondary-button"
            >
              Discover Victim Rights
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="victimlens">
      <Navbar />
      {children}
    </main>
  )
}

function App() {

  const path = window.location.pathname

  if (path === "/victimology") {
    return <Page><Victimology /></Page>
  }

  if (path === "/types") {
    return <Page><Types /></Page>
  }

  if (path === "/rights") {
    return <Page><Rights /></Page>
  }

  if (path === "/impact") {
    return <Page><Impact /></Page>
  }

  if (path === "/prevention") {
    return <Page><Prevention /></Page>
  }

  if (path === "/law") {
    return <Page><Law /></Page>
  }

  if (path === "/cases") {
    return <Page><Cases /></Page>
  }

  if (path === "/resources") {
    return <Page><Resources /></Page>
  }

  if (path === "/about") {
    return <Page><About /></Page>
  }

  return <Home />

}

export default App