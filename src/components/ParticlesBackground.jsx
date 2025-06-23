import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    (container) => console.log(container),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0d1117" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false },
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: {
            enable: false, // 👈 disables the connecting lines
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
