import { projects } from '../Data/ProjectsData';

  export default function Projects() {
  return (
    <div className="page">
      <h1 className="section-title">Projects</h1>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}