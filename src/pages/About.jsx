import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import "../App.css";
import { useEffect, useState } from "react";

export default function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const fullText =
    "I'm a full stack developer who fell in love with the craft of building.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typing);
        setDoneTyping(true);
      }
    }, 40);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="page about-grid">
      {/* LEFT COLUMN – Intro */}
      <div className="about-left" data-aos="fade-right" data-aos-duration="800">
        <h1 className="section-title">About Me</h1>
        <div className="typing-wrapper">
          <p
            className={`section-text typing-line ${
              doneTyping ? "typing-done" : ""
            }`}
          >
            {displayedText}
          </p>
        </div>

        <p className="section-text fade-paragraph">
          My passion isn’t just writing clean code — it’s turning complex
          problems into experiences that feel seamless, intuitive, and sometimes
          even magical. Whether I’m deep in a Node.js backend or animating UI
          elements in React, I’m always aiming to blend logic with creativity.
          <br />
          <br />
          Outside of code, I’m someone who values storytelling, art, and all the
          strange beauty that comes with being human. Every line I write is part
          of a bigger goal: to make useful things, grow beyond limits, and one
          day build something that makes someone’s day better — even if just a
          little.
        </p>

        <div className="about-details">
          <div className="about-card" data-aos="fade-up" data-aos-delay="200">
            <h3>🎯 Goals</h3>
            <ul>
              <li>Break into the tech industry with a dev role</li>
              <li>Contribute to real-world projects</li>
              <li>Keep learning — always</li>
            </ul>
          </div>

          <div className="about-card" data-aos="fade-up" data-aos-delay="400">
            <h3>🌱 Currently Learning</h3>
            <ul>
              <li>TypeScript + Strong Typing in React</li>
              <li>Framer Motion for subtle animations</li>
              <li>Backend workflows with Node.js & MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN – Tech + Quote */}
      <div
        className="about-right"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="section-subtitle">Tech Stack</h2>
        <div className="tech-icons" data-aos="fade-up" data-aos-delay="400">
          <FaReact className="tech-icon" title="React" color="#61DBFB" />
          <FaNodeJs className="tech-icon" title="Node.js" color="#3C873A" />
          <FaJs className="tech-icon" title="JavaScript" color="#F0DB4F" />
          <FaHtml5 className="tech-icon" title="HTML5" color="#E34C26" />
          <FaCss3Alt className="tech-icon" title="CSS3" color="#264de4" />
          <SiTailwindcss
            className="tech-icon"
            title="Tailwind CSS"
            color="#38BDF8"
          />
          <SiMongodb className="tech-icon" title="MongoDB" color="#4DB33D" />
          <FaGithub className="tech-icon" title="GitHub" color="currentColor" />
        </div>

        <div className="about-quote" data-aos="fade-up" data-aos-delay="600">
          {/* Dark mode quote */}
          <p className="quote dark-quote">
            <em>“Even in the dark, I build with light.”</em>
          </p>

          {/* Light mode quote */}
          <p className="quote light-quote">
            <em>“In light, I chase simplicity — not because it’s easy, but because it’s right.”</em>
          </p>
        </div>
      </div>
    </div>
  );
}
