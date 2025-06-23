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
    <div className="page" data-aos="fade-up">
      <h1 className="section-title">About Me</h1>
      <p className="section-text">
        I'm Alwaleed, a Software Engineering graduate from Philadelphia
        University with experience in full-stack web development using React,
        Node.js, and MongoDB. I enjoy building smooth user experiences, solving
        problems, and I’m always eager to learn something new.
      </p>
      <a
        href="/Alwaleed-Khaled-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View / Download Resume
      </a>
      <h2 className="section-subtitle">Tech Stack</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        <FaReact title="React" color="#61DBFB" />
        <FaNodeJs title="Node.js" color="#3C873A" />
        <FaJs title="JavaScript" color="#F0DB4F" />
        <FaHtml5 title="HTML5" color="#E34C26" />
        <FaCss3Alt title="CSS3" color="#264de4" />
        <SiTailwindcss title="Tailwind CSS" color="#38BDF8" />
        <SiMongodb title="MongoDB" color="#4DB33D" />
        <FaGithub title="GitHub" color="#fff" />
      </div>
      <div
        style={{ marginTop: "3rem", textAlign: "center" }}
        data-aos="fade-up"
      >
        <h2 className="section-subtitle">Currently Learning</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li>TypeScript & Strong Typing in React</li>
          <li>Framer Motion for Animations</li>
          <li>Building Fullstack Apps with Node.js + MongoDB</li>
        </ul>

        <h2 className="section-subtitle" style={{ marginTop: "2rem" }}>
          Goals
        </h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li>Land a frontend, backend, fullstack internship or junior role</li>
          <li>Learn design systems and component libraries</li>
          <li>Collaborate on real-world team projects</li>
        </ul>
      </div>
    </div>
  );
}
