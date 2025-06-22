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
    <div style={{
      paddingTop: '6rem',
      background: '#0d1117',
      color: 'white',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Projects</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {projects.map((proj, index) => (
          <div key={index} style={{
            background: '#161b22',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            width: '300px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
            <div style={{ marginTop: '1rem' }}>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: '#58a6ff' }}>GitHub</a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#58a6ff' }}>Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
