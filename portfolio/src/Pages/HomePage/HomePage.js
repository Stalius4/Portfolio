import React from 'react';
import { Link } from 'react-router-dom';
import "./mobile.css"
const HomePage = () => {
  return (
 <div className='outer'>
    <div className='main-container'>
        <nav>
      <Link to="/" className='nav-decoration home'>HOME</Link>
      <Link to="/about" className='nav-decoration'>ABOUT</Link>
      <Link to="/contact" className='nav-decoration'>CONTACT</Link>
      <Link to="/projects" className='nav-decoration'>MY PROJECTS</Link>
      </nav>
    </div>
</div>
  );
};

export default HomePage;