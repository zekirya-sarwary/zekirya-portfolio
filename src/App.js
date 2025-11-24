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
      <header>
        <h1>🌟 About Me – Zekirya Sarwary</h1>
        <p>Software Developer | Web App Builder</p>
        
      </header>

      <section className="projects">
        <div>
        I’m Zekirya Sarwary, a passionate Web Developer, System Designer, and App Developer with 6+ years of professional experience in building modern, scalable, and high-performance digital products.
I specialize in crafting smart, user-focused software solutions that help businesses grow, automate, and operate more efficiently.

My development style is built on:

Clean, optimized, and scalable code

Professional system architecture

High-quality UI/UX

Clear communication & full project transparency

I enjoy turning complex ideas into simple, powerful, and fully functional applications.

🚀 What I Do
🔹 Web Development

Custom websites & dashboards

Enterprise-level web applications

Responsive, fast, and secure frontends

MERN stack applications (React, Node, Express, MongoDB)

🔹 System Design & Architecture

Database modeling

Backend structure planning

API development

High-performance scalable systems

🔹 App Development

Cross-platform applications

Custom business apps

Automation tools

Real-time data apps

🔹 Business-Focused Solutions

CRM systems

Inventory & billing systems

Real estate platforms

Rental management systems

Financial & trading tools

My mission is simple: build powerful solutions that solve real business problems and deliver measurable results.

💡 Why Clients Work With Me

✔ 6+ years of hands-on experience
✔ Clean and professional programming style
✔ Strong problem-solving skills
✔ Fast turnaround & reliable communication
✔ On-time delivery with long-term support

I combine technical expertise with a business mindset — helping clients not just create software, but build systems that scale their business.

🧩 Featured Projects

Here are some of the projects I've built (replace links with yours):

🔗 Real Estate Listing Platform

A modern, responsive real estate website with property search, filters, and admin controls.
Demo: [Insert link]

🔗 Rental Property Management System

A complete CRM to manage tenants, properties, rents, and monthly reports.
Demo: [Insert link]

🔗 Exchange Office Database System

A custom database solution for tracking transactions, customers, and financial records.
Demo: [Insert link]

🔗 Business CRM & Dashboard

A professional dashboard for managing customers, sales, and team data securely.
Demo: [Insert link]

🔗 Web Applications & Custom Tools

Various full-stack applications built for small and medium businesses.
Portfolio: [Insert link]

✨ Let’s Build Something Great Together

If you need:

A modern website

A custom CRM

A fully functional app
A business automation tool
Or a complete software system
I’m ready to bring your ideas to life with clean code, strong architecture, and a professional workflow.
📩 Contact me today — let’s start your project!
        </div>

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
