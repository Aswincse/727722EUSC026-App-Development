import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationMessage('Passwords do not match');
      return;
    }

    // Store user data in local storage
    const userData = { firstName, lastName, mobile, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setRegistrationMessage('Registration successful');

    // Clear form fields
    setFirstName('');
    setLastName('');
    setMobile('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">Register</h1>
        <input
          className="register-input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="text"
          placeholder="Mobile No"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="register-button" type="submit">Register</button>
        <div className="register-signin-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
        {registrationMessage && <p className="register-message">{registrationMessage}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
