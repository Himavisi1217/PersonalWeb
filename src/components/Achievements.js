// src/components/Achievements.js
import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newAchievement, setNewAchievement] = useState({
    photo: '',
    description: ''
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleAchievementSubmit = (e) => {
    e.preventDefault();
    setAchievements([...achievements, newAchievement]);
    setNewAchievement({ photo: '', description: '' });
  };

  const handleAchievementChange = (e) => {
    const { name, value, files } = e.target;
    setNewAchievement({
      ...newAchievement,
      [name]: files ? URL.createObjectURL(files[0]) : value
    });
  };

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <div className="add-achievement">
        <h3>Add New Achievement</h3>
        <form onSubmit={handleAchievementSubmit}>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleAchievementChange}
            required
          />
          <textarea
            name="description"
            value={newAchievement.description}
            onChange={handleAchievementChange}
            placeholder="Description about the work"
            required
          />
          <button type="submit">Add Achievement</button>
        </form>
      </div>
      <div className="past-work">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <img src={achievement.photo} alt="Achievement" className="achievement-photo" />
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your comment"
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
