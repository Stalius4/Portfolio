import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
      <p>Here you will find information about my background, skills, and projects.</p>
      <Link to="/">Home</Link>
      <Link to="/about">Learn more about me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">View my projects</Link>
    </div>
  );
};

export default ContactPage;