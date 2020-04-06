import React from "react";
import "./App.css";
import profile from "./resources/profile.jpg";
import resume from "./resources/resume.pdf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-fixed-picture-div">
          <img src={profile} className="App-portrait" alt="profile" />
        </div>
        <div className="App-content-div">
          <p>SEUNGHUN OH</p>
          <div className="experience-container"></div>
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

export default App;
