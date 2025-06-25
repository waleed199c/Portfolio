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

export default function About() {
  return (
    <div className="page about-grid" data-aos="fade-up">
      {/* LEFT COLUMN – Personal / Narrative */}
      <div className="about-left">
        <h1 className="section-title">About Me</h1>
        <p className="section-text">
          Hey, I’m Alwaleed — a full stack developer with a passion for building
          modern, elegant, and performant web apps. I love solving real problems,
          creating delightful user experiences, and constantly pushing myself to learn new things.
        </p>

        <div className="about-details">
          <h3>🎯 Goals</h3>
          <ul>
            <li>Break into the tech industry with a dev role</li>
            <li>Contribute to real-world projects</li>
            <li>Keep learning — always</li>
          </ul>

          <h3>🌱 Currently Learning</h3>
          <ul>
            <li>TypeScript + Strong Typing in React</li>
            <li>Framer Motion for subtle animations</li>
            <li>Backend workflows with Node.js & MongoDB</li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN – Tech / Fun / Visual */}
      <div className="about-right">
        <h2 className="section-subtitle">Tech Stack</h2>
        <div className="tech-icons">
          <FaReact title="React" color="#61DBFB" />
          <FaNodeJs title="Node.js" color="#3C873A" />
          <FaJs title="JavaScript" color="#F0DB4F" />
          <FaHtml5 title="HTML5" color="#E34C26" />
          <FaCss3Alt title="CSS3" color="#264de4" />
          <SiTailwindcss title="Tailwind CSS" color="#38BDF8" />
          <SiMongodb title="MongoDB" color="#4DB33D" />
          <FaGithub title="GitHub" color="currentColor" />
        </div>

        <div className="about-quote">
          <p>
            “I believe the best web experiences are built with care, creativity, and clean code.”
          </p>
        </div>
      </div>
    </div>
  );
}
