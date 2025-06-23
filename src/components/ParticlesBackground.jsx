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
  background: { color: "#0d1117" },
  fpsLimit: 60,
  detectRetina: true,

  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 800 },
    },
    color: { value: ["#ffffff", "#afffff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: true,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      outModes: { default: "bounce" },
    },
    links: { enable: false },
  },

  emitters: [
    {
      // COMET
      direction: "right",
      position: { x: 0, y: 30 },
      rate: { delay: 3, quantity: 1 },
      particles: {
        color: { value: "#ffffff" },
        size: { value: 4 },
        opacity: { value: 1 },
        move: {
          speed: 5,
          straight: true,
          direction: "right",
          outModes: { default: "out" },
        },
        trail: {
          enable: true,
          length: 20,
          fillColor: "#0d1117",
        },
      },
    },
    {
      // TWINKLES
      rate: { delay: 1.5, quantity: 2 },
      size: { width: "100%", height: "100%" },
      particles: {
        size: { value: 5 },
        color: { value: "#ffffff" },
        opacity: {
          value: 1,
          animation: {
            enable: true,
            speed: 3,
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
