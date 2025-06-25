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
import { useTypewriter } from "../hooks/useTypewriter";

// Data separated from component
const INTRO_TEXT = "I'm a full stack developer who fell in love with the craft of building.";

const TECH_STACK = [
  { Icon: FaReact, title: "React", color: "#61DBFB" },
  { Icon: FaNodeJs, title: "Node.js", color: "#3C873A" },
  { Icon: FaJs, title: "JavaScript", color: "#F0DB4F" },
  { Icon: FaHtml5, title: "HTML5", color: "#E34C26" },
  { Icon: FaCss3Alt, title: "CSS3", color: "#264de4" },
  { Icon: SiTailwindcss, title: "Tailwind CSS", color: "#38BDF8" },
  { Icon: SiMongodb, title: "MongoDB", color: "#4DB33D" },
  { Icon: FaGithub, title: "GitHub", color: "currentColor" },
];

const ABOUT_CARDS = [
  {
    emoji: "🎯",
    title: "Goals",
    items: [
      "Break into the tech industry with a dev role",
      "Contribute to real-world projects",
      "Keep learning — always",
    ],
  },
  {
    emoji: "🌱",
    title: "Currently Learning",
    items: [
      "TypeScript + Strong Typing in React",
      "Framer Motion for subtle animations",
      "Backend workflows with Node.js & MongoDB",
    ],
  },
];

const QUOTES = {
  dark: "Even in the dark, I build with light.",
  light: "In light, I chase simplicity — not because it's easy, but because it's right.",
};

function TechIcon({ Icon, title, color }) {
  return <Icon className="tech-icon" title={title} color={color} />;
}

function AboutCard({ emoji, title, items, delay }) {
  return (
    <div className="about-card" data-aos="fade-up" data-aos-delay={delay}>
      <h3>
        {emoji} {title}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function TechStack() {
  return (
    <div className="tech-icons" data-aos="fade-up" data-aos-delay="400">
      {TECH_STACK.map(({ Icon, title, color }) => (
        <TechIcon key={title} Icon={Icon} title={title} color={color} />
      ))}
    </div>
  );
}

export default function About() {
  const { displayedText, isComplete } = useTypewriter(INTRO_TEXT);

  return (
    <div className="page about-grid">
      {/* LEFT COLUMN – Intro */}
      <div className="about-left" data-aos="fade-right" data-aos-duration="800">
        <h1 className="section-title">About Me</h1>
        
        <div className="typing-wrapper">
          <p className={`section-text typing-line ${isComplete ? "typing-done" : ""}`}>
            {displayedText}
          </p>
        </div>

        <p className="section-text fade-paragraph">
          My passion isn't just writing clean code — it's turning complex
          problems into experiences that feel seamless, intuitive, and sometimes
          even magical. Whether I'm deep in a Node.js backend or animating UI
          elements in React, I'm always aiming to blend logic with creativity.
          <br />
          <br />
          Outside of code, I'm someone who values storytelling, art, and all the
          strange beauty that comes with being human. Every line I write is part
          of a bigger goal: to make useful things, grow beyond limits, and one
          day build something that makes someone's day better — even if just a
          little.
        </p>

        <div className="about-details">
          {ABOUT_CARDS.map((card, index) => (
            <AboutCard
              key={card.title}
              {...card}
              delay={200 + index * 200}
            />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN – Tech + Quote */}
      <div className="about-right" data-aos="fade-left" data-aos-duration="1000">
        <h2 className="section-subtitle">Tech Stack</h2>
        <TechStack />

        <div className="about-quote" data-aos="fade-up" data-aos-delay="600">
          <p className="quote dark-quote">
            <em>"{QUOTES.dark}"</em>
          </p>
          <p className="quote light-quote">
            <em>"{QUOTES.light}"</em>
          </p>
        </div>
      </div>
    </div>
  );
}