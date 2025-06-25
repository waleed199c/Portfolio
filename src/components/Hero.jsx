import { Typewriter } from "react-simple-typewriter";

const isProd = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <div className="hero-flex">
          <div className="avatar-wrapper">
            <img
              src={isProd + "/images/Avatar.png"}
              alt="Alwaleed avatar"
              className="hero-avatar"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Alwaleed</span>{" "}
              <span className="wave">👋</span>
            </h1>
            <h2 className="hero-subtitle">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Enthusiast",
                  "Open to Work!",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="hero-desc">
              Software engineering grad building modern web experiences with a
              love for React and a curiosity for how things work under the hood,
              I'm always exploring new tech and building things — sometimes
              serious, sometimes just for fun.
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="projects-button">
                View Projects
              </a>
              <a href="/resume" className="secondary-button" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
