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

<button>MY CV</button>
<footer>
  <img src={gitpng} alt="git"  />
  <img src={linkedinpng} alt="Linked in"  />
  </footer>
   </div>
</div>
  );
};

export default HomePage;