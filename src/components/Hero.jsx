import { Typewriter } from "react-simple-typewriter";
function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Alwaleed</span> 👋
          </h1>
          <h2 className="hero-subtitle">
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
          <p className="hero-desc">
            Software engineering grad building modern web experiences. I love
            minimal UI, clean code, and hacking projects just to see what’s
            possible.
          </p>
          <div className="hero-buttons">
            <a href="/projects" className="resume-button">
              View Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
