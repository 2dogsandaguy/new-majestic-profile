import './MyWork.css';

import firstProject from '../assets/images/first-Project.png';
import QuizApp from '../assets/images/quizApp.png';
import Project2 from '../assets/images/project2.png';
import StudyTips from '../assets/images/studyTips.png';
import DayPlanner from '../assets/images/dayPlanner.png';

const projects = [
  {
    image: firstProject,
    title: 'First Project',
    link: 'https://motty-mandel.github.io/Travelers-guide/',
    description: 'The first project that I have done with APIs and others together.',
  },
  {
    image: StudyTips,
    title: 'Prework study guide',
    link: 'https://2dogsandaguy.github.io/prework-study-guide/',
    description: 'The work up to the program.',
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
    </section>
  );
};

export default MyWork;
