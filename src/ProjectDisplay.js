import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./Helpers/ProjectList";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
    <a href={project.link}><img src={project.image} /></a>  
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <i class="fa-brands fa-github"></i>
    </div>
  );
}

export default ProjectDisplay;