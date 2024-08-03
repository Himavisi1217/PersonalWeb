// src/components/Achievements.js
import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <div className="past-work">
        {/* Add past work here */}
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
