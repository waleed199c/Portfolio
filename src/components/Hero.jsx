import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// Data separated from component
const HERO_DATA = {
  name: "Alwaleed",
  avatar: "/images/Avatar.png",
  typewriterWords: [
    "Full Stack Developer",
    "React Enthusiast", 
    "Open to Work!",
  ],
  description: `Software engineering grad building modern web experiences with a 
    love for React and a curiosity for how things work under the hood, 
    I'm always exploring new tech and building things — sometimes 
    serious, sometimes just for fun.`,
  buttons: [
    { to: "/projects", text: "View Projects", className: "projects-button" },
    { to: "/resume", text: "Resume", className: "secondary-button" },
  ],
};

const TYPEWRITER_CONFIG = {
  loop: Infinity,
  cursor: true,
  cursorStyle: "|",
  typeSpeed: 70,
  deleteSpeed: 50,
  delaySpeed: 1500,
};

function HeroAvatar({ src, alt }) {
  return (
    <div className="avatar-wrapper">
      <img src={src} alt={alt} className="hero-avatar" />
    </div>
  );
}

function HeroButtons({ buttons }) {
  return (
    <div className="hero-buttons">
      {buttons.map(({ to, text, className }) => (
        <Link key={to} to={to} className={className}>
          {text}
        </Link>
      ))}
    </div>
  );
}

function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  
  return (
    <section className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <div className="hero-flex">
          <HeroAvatar 
            src={basePath + HERO_DATA.avatar} 
            alt={`${HERO_DATA.name} avatar`} 
          />
          
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{HERO_DATA.name}</span>{" "}
              <span className="wave">👋</span>
            </h1>
            
            <h2 className="hero-subtitle">
              <Typewriter
                words={HERO_DATA.typewriterWords}
                {...TYPEWRITER_CONFIG}
              />
            </h2>
            
            <p className="hero-desc">{HERO_DATA.description}</p>
            
            <HeroButtons buttons={HERO_DATA.buttons} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;