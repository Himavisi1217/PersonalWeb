import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AchievementsPage from './components/pages/AchievementsPage';
import CharityPage from './components/pages/CharityPage';
import AboutPage from './components/pages/AboutPage';
import JoinProjectForm from './components/forms/JoinProjectFrom';
import NewProjectForm from './components/forms/NewProjectForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/charity" element={<CharityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/join/:id" component={JoinProjectForm} />
        <Route path="/add-charity" component={NewProjectForm} />
      </Routes>
    </Router>
  );
}

export default App;
