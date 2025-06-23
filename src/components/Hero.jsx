import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "#0d1117" } },
    fpsLimit: 60,
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        options: {
          polygon: { sides: 5 }
        }
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: { min: 1, max: 3 },
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: { default: "bounce" }
      }
    },
    detectRetina: true
  };

  return (
    <>
      <Particles init={particlesInit} options={particlesOptions} />
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Alwaleed</span> 👋
          </h1>
          <h2 className="hero-subtitle">
            <Typewriter
              words={["Full Stack Developer", "React Enthusiast", "Open to Work!"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="hero-desc">
            Software engineering grad building modern web experiences. I love minimal UI,
            clean code, and hacking projects just to see what’s possible.
          </p>
          <div className="hero-buttons">
            <a href="/projects" className="resume-button">View Projects</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
