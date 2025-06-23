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
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: { enable: false }
        },
        detectRetina: true
      }}
    />
  );
}

export default ParticlesBackground;
