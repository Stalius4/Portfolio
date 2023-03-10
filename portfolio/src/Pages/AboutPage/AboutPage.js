import React from 'react';
import { Link } from 'react-router-dom';
import "../HomePage/mobile.css"
const AboutPage = () => {
  return (
    <div className='outer'>
     <div className='horizontal-flex'>
     <Link to="/"  className='home top-border-left'> <div className='circle'></div>HOME</Link>
     <Link to="/projects" className='about2'>PROJECTS</Link>
     <Link to="/contact" className='about2'>CONTACT</Link>
     <Link to="/about" className='about2 top-border-right targeted'>ABOUT  <div className='circle'></div></Link>
     </div>
   
       <div className='main-container'>
      </div>
   </div>
     );
   };

export default AboutPage;