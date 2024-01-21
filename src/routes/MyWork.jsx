/* import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; */
// Importing CSS file for styling
// Importing CSS file for styling
import './MyWork.css';

// Importing images for projects
import firstProject from '../assets/images/first-Project.png';
import QuizApp from '../assets/images/quizApp.png';
import Project2 from '../assets/images/project2.png';
import fitness from '../assets/images/endor-fitness.png';
import DayPlanner from '../assets/images/dayPlanner.png';
import matrix from '../assets/images/giphy-matrix.gif';

// Array of project details with GitHub links
const projects = [
  {
    image: firstProject,
    title: 'First Project',
    link: 'https://motty-mandel.github.io/Travelers-guide/',
    github: 'https://github.com/motty-mandel/Travelers-guide',
    description: 'The first project that I have done with APIs and others together.',
    techStack: ['Javascript', 'APIs', 'Group Project', 'CSS'],
  },
  {
    image: fitness,
    title: 'Endor Fitness',
    link: 'https://next-level-fitness.onrender.com/',
    github: 'https://github.com/2dogsandaguy/Code-war-2',
    description: 'Final project created fitness site.',
    techStack: ['React', 'Node.js','Vite' ,'Passport', 'Bootstrap'],
  },
  {
    image: Project2,
    title: 'Kanban Board',
    link: 'http://fierce-plateau-02428-54755b726de9.herokuapp.com/',
    github: 'https://github.com/yourusername/kanban-board-repo',
    description: 'To be more organized.',
    techStack: ['React', 'Node.js', 'Handlebars'],
  },
  {
    image: DayPlanner,
    title: 'Work Day Planner',
    link: 'https://2dogsandaguy.github.io/day-tracker/',
    github: 'https://github.com/2dogsandaguy/day-tracker',
    description: 'This is to keep my day organized.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    image: QuizApp,
    title: 'JavaScript Quiz',
    link: 'https://2dogsandaguy.github.io/nerd-quiz/',
    github: 'https://github.com/2dogsandaguy/nerd-quiz',
    description: 'This is a fun quiz app about JavaScript.',
    techStack: ['HTML', 'CSS', 'Jquery'],
  },
];

// React functional component for displaying projects
const MyWork = () => {
  return (
    <div
      className="create-container"
      style={{
        backgroundImage: `url(${matrix})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        Height: '100vh',
        position: 'relative',
        overflowY: 'auto',
      }}
    >
      <section className="flex-row">
        <h2 id="My-Work">My Coding Projects</h2>

        <section className="wrapper">
          <section className="container">
            {/* Mapping through projects array to display project details */}
            {projects.map((project, index) => (
              <section className="projects" key={index}>
                <img src={project.image} alt={project.title} width="200px" height="200px" />
                <div className="info">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h3>{project.title}</h3>
                  </a>
                  <p>{project.description}</p>
                  {project.github && (
                     <p>
                     <i className="bi bi-github"></i>
                     <a href={project.github} target="_blank" rel="noopener noreferrer">
                       {' '}
                       GitHub
                     </a>
                   </p>
                 )}
                  {project.techStack && (
                    <p>Tech Stack: {project.techStack.join(', ')}</p>
                  )}
                </div>
              </section>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};

export default MyWork;
