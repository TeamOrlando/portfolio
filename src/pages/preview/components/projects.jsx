
import ScrollAnimation from './scrollAnimation';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase my skills, projects, and work experience.',
    technologies: 'HTML, CSS, JavaScript, React, Tailwind CSS',
  },
  {
    title: 'E-commerce Web Application',
    description: 'Built a responsive e-commerce web application with product listings, shopping cart functionality, and a checkout process.',
    technologies: 'React, Redux, Tailwind CSS, Node.js, Express.js',
  },
  {
    title: 'Task Management Tool',
    description: 'Developed a task management tool to help users organize and prioritize their tasks.',
    technologies: 'HTML, CSS, JavaScript, React, Firebase',
  },
  {
    title: 'Weather App',
    description: 'Created a weather application that allows users to search for current weather conditions by city.',
    technologies: 'HTML, CSS, JavaScript, React, OpenWeatherMap API',
  },
  {
    title: 'Blog Platform',
    description: 'Developed a blog platform where users can read, write, and comment on blog posts.',
    technologies: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB',
  },
];

const Projects = () => {
  return (
    <ScrollAnimation>
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-lg">{project.description}</p>
              <p className="mt-2 text-sm text-gray-600">Technologies: {project.technologies}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;
