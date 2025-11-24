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
    title: "Calculator App",
    description:
      "A simple, responsive Calculator app built with HTML, CSS, and JavaScript. It supports Addition, Minus, Multiply, Division, and Percentage",
    liveLink: "https://zekirya-sarwary.github.io/calculator-app/",
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
      
      <section className="projects">

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
