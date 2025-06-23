// src/components/Hero.jsx
import { Typewriter } from "react-simple-typewriter";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#0d1117",
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
      number: {
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 2,
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
  };

  return (
    <>
      <Particles init={particlesInit} options={particlesOptions} />
      <div
        className="hero-container"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          padding: "0 1rem",
          backdropFilter: "blur(4px)",
          textShadow: "0 0 10px rgba(255,255,255,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Hi, I'm <span style={{ color: "#58a6ff" }}>Alwaleed</span>
          </h1>
          <h2 style={{ fontSize: "1.5rem" }}>
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Enthusiast",
                "Open to Work!",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          padding: "0 1rem",
          textAlign: "center",
          maxWidth: "700px",
        }}
        data-aos="fade-up"
      >
        <h2 className="section-subtitle">A Bit About Me</h2>
        <p className="section-text">
          I'm a software engineering grad who loves building modern web
          experiences. I'm passionate about clean code, minimal UI, and solving
          interesting problems — whether that's a to-do app or hacking a game
          with no mod support.
        </p>
        <a
          href="#/about"
          className="resume-button"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          Learn More
        </a>
      </div>
    </>
  );
}

export default Hero;
