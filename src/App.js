import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard'; // Import Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
        <Route path="/" element={<LoginForm />} /> {/* Default to LoginForm */}
      </Routes>
    </Router>
  );
};

export default App;
