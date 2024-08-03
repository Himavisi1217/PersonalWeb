// src/components/NewProjectForm.js
import React, { useState } from 'react';
import './NewProjectForm.css';

const NewProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    purpose: '',
    venue: '',
    date: '',
    place: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save to database)
  };

  return (
    <div className="new-project-form">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Project Name"
        />
        <textarea
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          placeholder="Purpose"
        />
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          placeholder="Venue"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleChange}
          placeholder="Place"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProjectForm;
