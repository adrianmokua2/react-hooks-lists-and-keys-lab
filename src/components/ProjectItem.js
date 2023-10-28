import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <h3>technologies</h3>
        {technologies.map((technologies) => (
          <span key={technologies}>{technologies}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
