import React from 'react';
import { Link } from 'react-router-dom';
import "../HomePage/mobile.css"
const ProjectsPage = () => {
  return (
    <div className='outer'>
     <div className='horizontal-flex'>
     <Link to="/"  className='home top-border-left '>HOME</Link>
     <Link to="/about" className='about2'>ABOUT</Link>
     <Link to="/contact" className='about2'>CONTACT</Link>
     <Link to="/projects" className='about2 top-border-right targeted'> PROJECTS</Link>
     </div>
   
       <div className='main-container'>
      </div>
   </div>
     );
   };

export default ProjectsPage;