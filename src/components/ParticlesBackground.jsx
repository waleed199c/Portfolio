import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const [showParticles, setShowParticles] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme = html.getAttribute("data-theme");
          setShowParticles(newTheme === "dark");
        }
      });
    });

    observer.observe(html, { attributes: true });

    // Set initial state
    setShowParticles(html.getAttribute("data-theme") === "dark");

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!showParticles) return null;
 
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,

        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#ffffff", "#afffff", "#ffffaa"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 1 },
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          links: { enable: false },
        },

        emitters: [
          {
            // SHOOTING STAR
            direction: "bottom-right",
            position: { x: 10, y: 10 },
            rate: { delay: 8, quantity: 1 },
            particles: {
              color: { value: "#ffffff" },
              size: { value: 3 },
              opacity: { value: 1 },
              move: {
                speed: 8,
                straight: true,
                direction: "bottom-right",
                outModes: { default: "destroy" },
              },
              trail: {
                enable: true,
                length: 30,
                fillColor: "#0d1117",
              },
            },
          },
          {
            // BRIGHT TWINKLES
            rate: { delay: 3, quantity: 1 },
            size: { width: "100%", height: "100%" },
            particles: {
              size: { value: 4 },
              color: { value: ["#ffffff", "#afffff"] },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 0.1,
              },
            },
          },
        ],
      }}
    />
  );
}

export default ParticlesBackground;