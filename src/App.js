import './App.css';

const projects = [
  {
    title: "📝 To-Do List App",
    description:
      "A simple, responsive To-Do List app built with HTML, CSS, and JavaScript. It supports editing, deletion, and local storage.",
    liveLink: "https://zekirya-sarwary.github.io/todo-list-app/",
    codeLink: "https://github.com/zekirya-sarwary/todo-list-app",
  },
  {
    title: "🏡 Real Estate Listing App (Coming Soon)",
    description:
      "A full-stack MERN application to manage and display property listings with authentication and database integration.",
    liveLink: "#",
    codeLink: "#",
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>🌟 About Me – Zekirya Sarwary</h1>
        <p>Software Developer | Web App Builder</p>
        
      </header>

      <section className="projects">
      <h1 class="section-title">About Me – Zekirya Sarwary</h1>
<h2 class="subheading">What I Do</h2>

<ul class="skills-list">
   <li>Web Development</li>
   <li>System Architecture</li>
   <li>App Development</li>
</ul>

<div class="project-card">
   <h3>Real Estate Listing Platform</h3>
   <p>A modern website for real estate agencies.</p>
   <div class="project-link"><a href="#">View Project</a></div>
</div>

<a class="contact-btn" href="#contact">Contact Me</a>


        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              🔗 View Live
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              💻 View Code
            </a>
          </div>
        ))}
      </section>

      <footer>
        <p>© 2025 Zekirya Sarwary | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
