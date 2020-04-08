import React from "react";
import "./App.css";
import profile from "./resources/profile.jpg";
import resume from "./resources/resume.pdf";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          company: "Wayfair LLC",
          role: "Software Engineer",
          term: "May '19 to Sep '19",
        },
        {
          company: "Raytheon Company",
          role: "Software Engineer",
          term: "Aug '18 to Mar '19",
        },
        {
          company: "BU School of Medicine",
          role: "Research Assistant",
          term: "Feb '18 to May '18",
        },
        {
          company: "AlzCare Labs",
          role: "Software Engineer Intern",
          term: "May '17 to Aug '17",
        },
        {
          company: "Tallan Inc",
          role: "Software Engineer Intern",
          term: "May '16 to Aug '16",
        },
        {
          company: "BU Questrom School of Business",
          role: "Student Employee",
          term: "Sep '15 to Dec '17",
        },
        {
          company: "JEI Learning",
          role: "Tutor & Instructor",
          term: "Jul '15 to Aug '15",
        },
      ],
    };
  }

  createExperience = (experience, index) => {
    return (
      <li key={index} className="experience">
        <p className="exp-company">
          {experience.role} | {experience.company}
        </p>
        <p className="exp-term">{experience.term}</p>
      </li>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-fixed-picture-div">
            <img src={profile} className="App-portrait" alt="profile" />
          </div>
          <div className="App-content-div">
            <p id="name">SEUNGHUN OH</p>
            <div className="experience-container">
              <p id="experience-title">Experience</p>
              <ul className="experience-list">
                {this.state.experiences.map((exp, idx) => {
                  return this.createExperience(exp, idx);
                })}
              </ul>
            </div>
          </div>
        </header>
        <footer className="App-footer">
          <a
            className="App-link"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
          <a
            className="App-link"
            href="https://github.com/seunghunoh57"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="App-link"
            href="https://linkedin.com/in/seunghunoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
