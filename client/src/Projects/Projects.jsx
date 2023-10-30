import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects_list">
        <h3>Projects</h3>
        <div className="projects_lists">
          <NavLink to="/WeatherWatch">Weather Watch</NavLink>
          <NavLink to="/WeatherCheck">Weather Check</NavLink>
          <NavLink to="/ToDoList">To Do List</NavLink>
        </div>
      </div>
    </>
  );
};

export default Projects;
