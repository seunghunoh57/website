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
          link: "https://www.wayfair.com",
        },
        {
          company: "Raytheon",
          role: "Software Engineer",
          term: "Aug '18 to Mar '19",
          link: "https://www.rtx.com/en",
        },
        {
          company: "BU School of Medicine",
          role: "Research Assistant",
          term: "Feb '18 to May '18",
          link: "https://www.bumc.bu.edu/busm/",
        },
        {
          company: "AlzCare Labs",
          role: "Software Engineer Intern",
          term: "May '17 to Aug '17",
          link: "https://alz.care/",
        },
        {
          company: "Tallan Inc",
          role: "Software Engineer Intern",
          term: "May '16 to Aug '16",
          link: "https://www.tallan.com/",
        },
        {
          company: "BU Questrom School of Business",
          role: "Student Employee",
          term: "Sep '15 to Dec '17",
          link: "http://www.bu.edu/questrom/",
        },
        {
          company: "JEI Learning",
          role: "Tutor & Instructor",
          term: "Jul '15 to Aug '15",
          link: "https://jeilearning.com/saratoga/index.do",
        },
      ],
    };
  }

  createExperience = (experience, index) => {
    return (
      <li key={index} className="experience">
        <p className="exp-company">
          {experience.role} |{" "}
          <a
            className="exp-link"
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience.company}
          </a>
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
            <p id="name">Seunghun Oh</p>
            <div className="experience-container">
              <p className="title">EXPERIENCE</p>
              <ul className="experience-list">
                {this.state.experiences.map((exp, idx) => {
                  return this.createExperience(exp, idx);
                })}
              </ul>
            </div>
            <div className="App-footer">
              <p className="footer-title">CONTACTS</p>
              <a
                className="App-link"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="App-link"
                href="https://github.com/seunghunoh57"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="App-link"
                href="https://linkedin.com/in/seunghunoh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                className="App-link"
                href="mailto:seunghun.oh57@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
