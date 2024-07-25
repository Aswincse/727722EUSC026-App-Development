// SidePanel.js
import React from 'react';
import { FaHome, FaBook, FaChalkboardTeacher, FaGraduationCap, FaUser, FaEnvelope, FaCheckCircle, FaBookOpen, FaUsers, FaCog, FaAlignLeft } from 'react-icons/fa';
import './SidePanel.css';

const SidePanel = ({ activeView, onViewChange, onCollapse, collapsed }) => {
  return (
    <aside className={`side-panel-container ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={onCollapse}>
        <FaAlignLeft />
      </button>
      <h3 className={`side-panel-title ${collapsed ? 'collapsed' : ''}`}></h3>
      <ul className="side-panel-links">
        <li>
          <button
            className={`side-panel-link ${activeView === 'home' ? 'active' : ''}`}
            onClick={() => onViewChange('home')}
          >
            <div className={`side-panel-icon ${activeView === 'home' ? 'active' : ''}`}>
              <FaHome />
            </div>
            <span className="side-panel-text">Home</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'educational-content' ? 'active' : ''}`}
            onClick={() => onViewChange('educational-content')}
          >
            <div className={`side-panel-icon ${activeView === 'educational-content' ? 'active' : ''}`}>
              <FaBook />
            </div>
            <span className="side-panel-text">Educational Content</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'lms' ? 'active' : ''}`}
            onClick={() => onViewChange('lms')}
          >
            <div className={`side-panel-icon ${activeView === 'lms' ? 'active' : ''}`}>
              <FaChalkboardTeacher />
            </div>
            <span className="side-panel-text">LMS</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'online-classes' ? 'active' : ''}`}
            onClick={() => onViewChange('online-classes')}
          >
            <div className={`side-panel-icon ${activeView === 'online-classes' ? 'active' : ''}`}>
              <FaGraduationCap />
            </div>
            <span className="side-panel-text">Online Classes</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'sis' ? 'active' : ''}`}
            onClick={() => onViewChange('sis')}
          >
            <div className={`side-panel-icon ${activeView === 'sis' ? 'active' : ''}`}>
              <FaUser />
            </div>
            <span className="side-panel-text">SIS</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'communication-tools' ? 'active' : ''}`}
            onClick={() => onViewChange('communication-tools')}
          >
            <div className={`side-panel-icon ${activeView === 'communication-tools' ? 'active' : ''}`}>
              <FaEnvelope />
            </div>
            <span className="side-panel-text">Communication Tools</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'assessment' ? 'active' : ''}`}
            onClick={() => onViewChange('assessment')}
          >
            <div className={`side-panel-icon ${activeView === 'assessment' ? 'active' : ''}`}>
              <FaCheckCircle />
            </div>
            <span className="side-panel-text">Assessment</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'resource-library' ? 'active' : ''}`}
            onClick={() => onViewChange('resource-library')}
          >
            <div className={`side-panel-icon ${activeView === 'resource-library' ? 'active' : ''}`}>
              <FaBookOpen />
            </div>
            <span className="side-panel-text">Resource Library</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'collaboration-tools' ? 'active' : ''}`}
            onClick={() => onViewChange('collaboration-tools')}
          >
            <div className={`side-panel-icon ${activeView === 'collaboration-tools' ? 'active' : ''}`}>
              <FaUsers />
            </div>
            <span className="side-panel-text">Collaboration Tools</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'storybook' ? 'active' : ''}`}
            onClick={() => onViewChange('storybook')}
          >
            <div className={`side-panel-icon ${activeView === 'storybook' ? 'active' : ''}`}>
              <FaBookOpen />
            </div>
            <span className="side-panel-text">Storybook</span>
          </button>
        </li>
        <li>
          <button
            className={`side-panel-link ${activeView === 'settings' ? 'active' : ''}`}
            onClick={() => onViewChange('settings')}
          >
            <div className={`side-panel-icon ${activeView === 'settings' ? 'active' : ''}`}>
              <FaCog />
            </div>
            <span className="side-panel-text">Settings</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SidePanel;
