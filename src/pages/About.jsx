import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function About() {
  return (
    <div style={{
      paddingTop: '6rem',
      color: 'white',
      minHeight: '100vh',
      background: '#0d1117',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
        I'm Alwaleed, a Software Engineering graduate from Philadelphia University with experience in full-stack web development using React, Node.js, and MongoDB.  
        I enjoy building smooth user experiences, solving problems, and I’m always eager to learn something new.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tech Stack</h2>
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontSize: '2rem'
      }}>
        <FaReact title="React" color="#61DBFB" />
        <FaNodeJs title="Node.js" color="#3C873A" />
        <FaJs title="JavaScript" color="#F0DB4F" />
        <FaHtml5 title="HTML5" color="#E34C26" />
        <FaCss3Alt title="CSS3" color="#264de4" />
        <SiTailwindcss title="Tailwind CSS" color="#38BDF8" />
        <SiMongodb title="MongoDB" color="#4DB33D" />
        <FaGithub title="GitHub" color="#fff" />
      </div>
    </div>
  );
}
