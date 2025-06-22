import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
   return (
    <div className="page" data-aos="fade-up">
      <h1 className="section-title">Contact Me</h1>
      <p className="section-text">Feel free to reach out via any of the platforms below!</p>
      <div className="contact-icons">
        <a href="mailto:alwaleedshg@gmail.com" style={{ color: '#fff' }}><FaEnvelope /></a>
        <a href="https://linkedin.com/in/alwaleed-alshaghnoubi" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}><FaLinkedin /></a>
        <a href="https://github.com/waleed199c" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaGithub /></a>
      </div>
    </div>
  );
}
