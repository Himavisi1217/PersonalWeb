import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Welcome To My Website</h1>
    <div className="quote">
      <p>Motivational Quote</p>
    </div>
    <div className="introduction">
      <p>Introduction about Buaneka Arangalla</p>
    </div>
    <div className="profile-photo">
      <img src="path/to/profile/photo.jpg" alt="Profile" />
    </div>
  </div>
);

export default Home;
