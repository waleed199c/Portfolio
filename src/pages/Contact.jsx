import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div style={{
      paddingTop: '6rem',
      color: 'white',
      minHeight: '100vh',
      background: '#0d1117',
      textAlign: 'center'
    }}>
      <h1>Contact Me</h1>
      <p>Feel free to reach out via any of the platforms below!</p>
      <div style={{ fontSize: '2rem', marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="mailto:alwaleedshg@gmail.com" style={{ color: '#fff' }}><FaEnvelope /></a>
        <a href="https://linkedin.com/in/alwaleed-alshaghnoubi" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}><FaLinkedin /></a>
        <a href="https://github.com/waleed199c" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaGithub /></a>
      </div>
    </div>
  );
}
