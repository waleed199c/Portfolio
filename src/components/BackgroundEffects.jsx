import { useLocation } from "react-router-dom";
import { useIsDarkMode } from "../hooks/useIsDarkMode";
import ParticlesBackground from "./ParticlesBackground";
import CelestialBodies from "./CelestialBodies";
import DriftingLeaves from "./DriftingLeaves";

function BackgroundEffects() {
  const location = useLocation();
  const isDark = useIsDarkMode();
  const isResumePage = location.pathname === "/resume";

  return (
    <>
      <ParticlesBackground key={location.pathname} />
      {!isResumePage && <CelestialBodies />}
      {!isResumePage && !isDark && <DriftingLeaves />}
    </>
  );
}

export default BackgroundEffects;
