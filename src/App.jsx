import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Resume from "./pages/Resume";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import CelestialBodies from "./components/CelestialBodies";
import { useIsDarkMode } from "./hooks/useIsDarkMode";
import DriftingLeaves from "./components/DriftingLeaves";

// Move this into a wrapper inside the Router
function AppContent() {
  const location = useLocation();
  const isDark = useIsDarkMode();
  const isResumePage = location.pathname === "/resume";

  return (
    <>
      <ParticlesBackground key={location.pathname} />
      {!isResumePage && <CelestialBodies />}
      {!isResumePage && !isDark && <DriftingLeaves />}
      <ThemeToggle />
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

const basename = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

export default App;
