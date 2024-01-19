import './MyWork.css';

/* import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; */

import firstProject from '../assets/images/first-Project.png';
import QuizApp from '../assets/images/quizApp.png';
import Project2 from '../assets/images/project2.png';
import fitness from '../assets/images/endor-fitness.png';
import DayPlanner from '../assets/images/dayPlanner.png';
import matrix from '../assets/images/giphy-matrix.gif';
const projects = [
  {
    image: firstProject,
    title: 'First Project',
    link: 'https://motty-mandel.github.io/Travelers-guide/',
    description: 'The first project that I have done with APIs and others together.',
  },
  {
    image: fitness,
    title: 'Endor Fitness',
    link: 'https://next-level-fitness.onrender.com/',
    description: 'final project created fitness site. ',
  },
  {
    image: Project2,
    title: 'Kanban Board',
    link: 'http://fierce-plateau-02428-54755b726de9.herokuapp.com/',
    description: 'To be more organized.',
  },
  {
    image: DayPlanner,
    title: 'Work Day Planner',
    link: 'https://2dogsandaguy.github.io/day-tracker/',
    description: 'This is to keep my day organized.',
  },
  {
    image: QuizApp,
    title: 'JavaScript Quiz',
    link: 'https://2dogsandaguy.github.io/nerd-quiz/',
    description: 'This is a fun quiz app about JavaScript.',
  },
];

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
      <h2 id="My-Work">My Work</h2>

      <section className="wrapper">
        <section className="container">
          {projects.map((project, index) => (
            <section className="projects" key={index}>
              <img src={project.image} alt={project.title} width="200px" height="200px" />
              <div className="info">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3>{project.title}</h3>
                </a>
                <p>{project.description}</p>
              </div>
            </section>
          ))}
        </section>
      </section>
    </section></div>
  );
};

export default MyWork;
