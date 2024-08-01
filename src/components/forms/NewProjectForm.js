import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'projects'), formData);
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="new-project-form">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Purpose:
          <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} />
        </label>
        <label>
          Venue:
          <input type="text" name="venue" value={formData.venue} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Place:
          <input type="text" name="place" value={formData.place} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProjectForm;
