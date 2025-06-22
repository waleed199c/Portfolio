export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio to showcase my skills, projects, and contact info.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/waleed199c",
      demo: "#"
    },
    {
      title: "To-Do Planner App",
      description: "A modern task manager with tags, theme switching, and scheduling.",
      tech: ["React", "CSS", "LocalStorage"],
      github: "https://github.com/waleed199c",
      demo: "#"
    }
  ];

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
