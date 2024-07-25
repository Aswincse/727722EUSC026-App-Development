import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('home');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <div className="content-panel">Welcome to the EduPortal Home</div>;
      case 'educational-content':
        return <div className="content-panel">Educational Content</div>;
      case 'lms':
        return <div className="content-panel">Learning Management System</div>;
      case 'online-classes':
        return <div className="content-panel">Online Classes and Courses</div>;
      case 'sis':
        return <div className="content-panel">Student Information System</div>;
      case 'communication-tools':
        return <div className="content-panel">Communication Tools</div>;
      case 'assessment':
        return <div className="content-panel">Assessment and Evaluation</div>;
      case 'resource-library':
        return <div className="content-panel">Resource Library</div>;
      case 'collaboration-tools':
        return <div className="content-panel">Collaboration Tools</div>;
      case 'settings':
        return <div className="content-panel">Settings</div>;
      default:
        return <div className="content-panel">Select a section</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-logo">EduPortal</div>
        <div className="navbar-links">
          <a href="#profile" className="navbar-link">Profile</a>
          <a href="#settings" className="navbar-link">Settings</a>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="dashboard-content">
        <aside className="side-panel">
          <h3 className="side-panel-title">Navigation</h3>
          <ul className="side-panel-links">
            <li>
              <button className={`side-panel-link ${activeView === 'home' ? 'active' : ''}`} onClick={() => setActiveView('home')}>Home</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'educational-content' ? 'active' : ''}`} onClick={() => setActiveView('educational-content')}>Educational Content</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'lms' ? 'active' : ''}`} onClick={() => setActiveView('lms')}>LMS</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'online-classes' ? 'active' : ''}`} onClick={() => setActiveView('online-classes')}>Online Classes</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'sis' ? 'active' : ''}`} onClick={() => setActiveView('sis')}>SIS</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'communication-tools' ? 'active' : ''}`} onClick={() => setActiveView('communication-tools')}>Communication Tools</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'assessment' ? 'active' : ''}`} onClick={() => setActiveView('assessment')}>Assessment</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'resource-library' ? 'active' : ''}`} onClick={() => setActiveView('resource-library')}>Resource Library</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'collaboration-tools' ? 'active' : ''}`} onClick={() => setActiveView('collaboration-tools')}>Collaboration Tools</button>
            </li>
            <li>
              <button className={`side-panel-link ${activeView === 'settings' ? 'active' : ''}`} onClick={() => setActiveView('settings')}>Settings</button>
            </li>
          </ul>
        </aside>
        <main className="main-section">
          <h1 className="main-title">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h1>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
