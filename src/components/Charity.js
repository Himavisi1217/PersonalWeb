// src/components/Charity.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Charity.css';

const Charity = () => {
  const [projects, setProjects] = useState([
    // Add sample projects here
  ]);

  return (
    <div className="charity">
      <h2>Charity Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.purpose}</p>
            <p>{project.venue}</p>
            <Link to={`/join/${project.id}`} className="join-button">Join Project</Link>
          </div>
        ))}
      </div>
      <Link to="/add-charity" className="add-charity-button">Create New Project</Link>
    </div>
  );
};

export default Charity;
