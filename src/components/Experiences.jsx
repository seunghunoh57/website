import React from "react";

const Experiences = ({experience, index}) => {
  console.log(experience, index);
  return (
    <li key={index} className="experience">
      <p className="exp-company">
        {experience.role} | {" "}
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

export default Experiences;