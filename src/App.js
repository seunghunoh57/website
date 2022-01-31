import React from "react";
import "./App.css";
import profile from "./resources/profile.jpg";
import resume from "./resources/resume.pdf";
import experiences from "./resources/experiences.json";
import Experiences from "./components/Experiences";
import Button from "@mui/material/Button";
import GithubIcon from "@mui/icons-material/GitHub";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { experiences };
	}

	// var Footer = ({link, title}) => <Button href={link}>{title}</Button>;

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
									return <Experiences experience={exp} index={idx} />;
								})}
							</ul>
						</div>
						<div className="App-footer">
							<p className="footer-title">CONTACTS</p>
							<Button href={resume}>
								<HistoryEduIcon
									sx={{ fontSize: 30, color: "#09d3ac" }}
								></HistoryEduIcon>
							</Button>
							<Button href="https://github.com/seunghunoh57">
								<GithubIcon
									sx={{ fontSize: 30, color: "#09d3ac" }}
								></GithubIcon>
							</Button>
							<Button href="https://linkedin.com/in/seunghunoh">
								<LinkedInIcon
									sx={{ fontSize: 30, color: "#09d3ac" }}
								></LinkedInIcon>
							</Button>
							<Button href="mailto:seunghun.oh57@gmail.com">
								<EmailIcon sx={{ fontSize: 30, color: "#09d3ac" }}></EmailIcon>
							</Button>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
