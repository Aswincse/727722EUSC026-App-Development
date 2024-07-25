import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard'; // Import Dashboard component
import Jerrybox from './Components/Story1';
import Inspace from './Components/story2';
import How from './Components/Story3';
import Wonder from './Components/Story4';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
        <Route path="/" element={<LoginForm />} /> {/* Default to LoginForm */}
        <Route path="/s1" element={<Jerrybox/>} />
        <Route path="/s2" element={<Inspace />} />
        <Route path="/s3" element={<How />} />
        <Route path="/s4" element={<Wonder />} />
      </Routes>
    </Router>
  );
};

export default App;
