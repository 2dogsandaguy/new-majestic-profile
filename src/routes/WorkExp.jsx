import { useState } from 'react';
import './WorkExp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "../assets/images/Resume-background.png"
const WorkExp = () => {
  // State to manage the visibility of references
  const [showReferences, setShowReferences] = useState(false);


  return (
    <div
      className="create-container"
      style={{
        backgroundImage: `url(${Resume})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
    <div className="container text-white">
      <h2 className="text-center mt-4 ">Robert Frisco</h2>
      <p className="text-center">Service Technician | Team Leader | Fabricator | Inspiring Web Developer</p>

      <section className="contact-info mt-4">
        <h3>Contact:</h3>
        <p>Phone #: <a href="tel:+15512215702">+1 551 221 5702</a>  | Email: <a href="mailto:neverclear@ymail.com">neverclear@ymail.com</a> | Location: Bayonne, NJ 07002</p>
        <p> 
          <a href="https://www.linkedin.com/in/robert-frisco-b287272a6/" 
          target="_blank" 
          rel="noopener noreferrer">
          My LinkedIn
          </a> | <a href="https://frabjous-frangipane-e462c2.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer">
          Portfolio</a> | <a href="https://github.com/2dogsandaguy" 
          target="_blank" 
          rel="noopener noreferrer">
            GitHub</a> 
        </p>
      </section> 

      <section className="summary mt-4">
        <h3>Summary:</h3>
        <p>
          Dedicated and industrious professional committed to delivering outstanding results.
          Thrives in dynamic and challenging work settings, actively seeking opportunities for continuous
          learning and skill mastery. Proficient in collaborative teamwork, contributing to project success.
          Seeking to join a growth-oriented company where I can contribute my utmost, take pride in delivering
          excellence, and always strive for perfection. Punctual and committed to being early.
        </p>
      </section>

      <section className="work-experience mt-4">
        <h3>Work Experience</h3>
        <h4>Excel inc - Springfield, TN  </h4>
        <p>Service Tech - Nashville area Plus | February 2024 - Present </p>
        <ul>
          <li>Build cranes wire the systems up to work.</li>
          <li>Test the cranes and all the functions are working.</li>
          <li>Service side go to sites and repair or get the crane functional locate the problem with it.</li>
        </ul>
        <h4>PCS CRANE SERVICES - Oakland, NJ</h4>
        <p>Team Leader - Various Locations, Tri-State Area | February 2020 - January 2024  </p>
        <ul>
          <li>Led teams in successful crane installation projects, demonstrating leadership and project management skills.</li>
          <li>Multi-talented professional, serving as a fabricator, service technician, and assisting in managerial tasks.</li>
          <li>Managed responsibilities, including parts ordering and inventory control.</li>
          <li>Executed offshore work on a windmill project, showcasing adaptability and commitment.</li>
          <li>Extensive travel across the Tri-State Area for project assignments.</li>
        </ul>

        <h4>Service Technician - Maximum Material Handling, Parsippany, NJ | August 2017 - February 2020</h4>
        <ul>
          <li>Repaired and installed cranes and material handling devices.</li>
          <li>Juggled multiple roles, spearheading projects, managing client relationships, and contributing to marketing strategies.</li>
          <li>Broadened skill set and strengthened ability to thrive in dynamic work environments.</li>
        </ul>

        <h4>Machinist, Welder, Fabricator - Electrolift, Clifton, NJ | 2009 - 2017</h4>
        <ul>
          <li>Managed levels of inventory of product lines to meet demand.</li>
          <li>Received, inspected, and properly stored deliveries.</li>
          <li>Assembled Overhead Cranes.</li>
        </ul>
      </section>

      <section className="skills mt-4">
        <h3>Skills</h3>
        <ul>
          <li>Communication - 14 years</li>
          <li>Equipment Repair - 14 years</li>
          <li>Blueprint Reading</li>
          <li> Low Voltage - 14 years</li> 
          <li>High Voltage - 10 years</li> 
          <li> Fabrication - 10 years</li>
          <li> Hand Tools - 14 years</li> 
          <li> Materials Handling - 10 years</li> 
          <li> Service Technician Experience - 10 years</li> 
          <li> Maintenance - 10 years</li> 
          <li>Forklift Operation - 10 years</li> 
          <li>Welding</li> 
          <li>JavaScript</li>
          <li>Electrical - 14 years</li> 
          <li>Plumbing</li>
          <li>Machining</li>
          {/* Include other skills with bullet points */}
        </ul>
      </section>

      <section className="education mt-4">
        <h3>Education</h3>
        <p>Coding School in Web Development Full Stack - Rutgers | May 2023 - Present</p>
        <p>High School or Equivalent in Electric - Hohokus School of Trade and Technical Sciences, Paterson, NJ</p>
      </section>

      <section className="links mt-4">
        <h3>Certification</h3>
        
        <li>GWO Training (August 2023) - Off shore Training</li>
        <li>Forklift Training  </li>
        <li>TWIC card</li>
        <li>PVSC (Passaic Valley Sewerage Commission) Card</li>
        {/* Include other links or awards */}
      </section>
      
      <section className="additional-info mt-4">
        <h3>References</h3>
        <p></p>
        {/* Show references only when showReferences is true */}
        {showReferences && (
          <ul>
            <li>Maximum Material Handling Reference: Jason Mayhan - Service Manager - (973) 610-7468</li>
            <li>Electrolift Reference: Jerome - Co-worker - 732-514-2485</li> 
            <li>PCS Cranes Reference: Jhon Rueda - Co-worker - 201-921-3059</li> 
            <li>Electrolift & PCS Cranes Reference: Chris Bruce - Leader and Co-worker - 973-796-6132</li> 
            <li>Multiple Locations Reference: Carlos - Supervisor & Co-worker - 321-566-9005</li>
            {/* Include other references */}
          </ul>
        )}

        {/* Show/hide references button */}
        <button onClick={() => setShowReferences(!showReferences)}>
          {showReferences ? 'Hide References' : 'Show References'}
        </button>
      </section>
    </div></div>
  );
};

export default WorkExp;
