import React from 'react';
import { Link } from 'react-router-dom';
import "../HomePage/mobile.css"
import gitpng from "../images/Vector.png"
import linkedinpng from "../images/LinkedIn.png"

const HomePage = () => {


  return (
 <div className='outer'>
  <div className='horizontal-flex'>
  <Link to="/"  className='home top-border-left targeted'><div className='circle'></div>HOME </Link>
  <Link to="/projects" className='about2'>PROJECTS</Link>
  <Link to="/contact" className='about2'>CONTACT</Link>
  <Link to="/about" className='about2 top-border-right'> ABOUT <div className='circle'></div></Link>
  </div>

    <div className='main-container'>
<div className='home-text'>
<div className='hi'> Hi,</div>
<div> I'm Deivydas,</div>

a front-end developer with a passion for creating great user experiences. <br/>I have experience with <br/> <spam className="white-bright"> HTML, CSS, JavaScript,</spam> and I am constantly learning new technologies. <br/>My portfolio showcases my projects, including responsive websites and web applications built with modern <br/>frameworks like React. 

<div className='thanks'>Thank you for visiting!</div>

</div>
<button><Link className='myCV' to="/cv.pdf" target="_blank" download>MY CV</Link></button>

   </div>
   <footer>
  <div className='left-footer'> 
  <div className='bottom-circle-left'></div>
   <a href="https://github.com/Stalius4 " target="_blank">
    <img className="git" src={gitpng} alt="git"/>
    </a></div>
<div className='right-footer'> 
<a href="https://www.linkedin.com/in/deivydas-rimgaila-8aa787218/" target="_blank">
 <img  className="linked-in" src={linkedinpng} alt="Linked in" /></a></div>
 <div className='bottom-circle-right'></div>
  </footer>
</div>
  );
};

export default HomePage;