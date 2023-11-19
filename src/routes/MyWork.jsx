import './MyWork.css';

import firstProject from '../assets/images/first-project.png';
import QuizApp from '../assets/images/quizApp.png';
import Project2 from '../assets/images/project2.png';
import StudyTips from '../assets/images/studyTips.png';
import DayPlanner from '../assets/images/dayPlanner.png';
const MyWork = () => {
  return (
    <section className="flex-row">
      <h2 id="My-Work">My Work</h2>

      <section className="wrapper">
        <section className="container">
          <section className="projects">
            <img src={firstProject} alt="First Project" />
            <div className="info">
              <a href="https://motty-mandel.github.io/Travelers-guide/" target="_blank" rel="noopener noreferrer">
                <h3>First project</h3>
              </a>
              <p>The first project that I have done with APIs and others together.</p>
            </div>
          </section>
        </section>

        <section className="wrapper-2">
          <section className="projects">
            <img src={StudyTips} width="200px" height="200px" alt="prework-study-guide-website" />
            <div className="info">
              <a href="https://2dogsandaguy.github.io/prework-study-guide/" target="_blank" rel="noopener noreferrer">
                <h3>Prework study guide</h3>
              </a>
              <p>The work up to the program.</p>
            </div>
          </section>

          <section className="projects">
            <img src={Project2} width="200px" height="200px" alt="colorful website" />
            <div className="info">
              <a href="http://fierce-plateau-02428-54755b726de9.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h3>kanban Board</h3>
              </a>
              <p>To be more organized.</p>
            </div>
          </section>

          <section className="projects">
            <img src={DayPlanner} width="200px" height="200px" alt="work day planner" />
            <div className="info">
              <a href="https://2dogsandaguy.github.io/day-tracker/" target="_blank" rel="noopener noreferrer">
                <h3>Work Day planner</h3>
              </a>
              <p>This is to keep my day organized.</p>
            </div>
          </section>

          <section className="projects">
          <img src={QuizApp} width="200px" height="200px" alt="Quiz App" />
            <div className="info">
              <a href="https://2dogsandaguy.github.io/nerd-quiz/" target="_blank" rel="noopener noreferrer">
                <h3>Java script quiz</h3>
              </a>
              <p>This is a fun quiz app about JavaScript.</p>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default MyWork;
