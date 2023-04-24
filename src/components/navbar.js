import React from 'react';
import { Link } from 'react-router-dom';
import "../Pages/HomePage/mobile.css"
import "./navbar.css"
import { useState } from 'react';
const Navbar = () => {
    const [changePg, setChangePg] = useState()


const changePage = (value) => {

    setChangePg(value)
}

  return (
    <div className='navbar'>
     <div className='horizontal-flex'>
     <Link to="/"  className='home top-border-left ' onClick={changePage}><div className='circle'></div>HOME</Link>
     <Link to="/projects" className='about2'>PROJECTS</Link>
     <Link to="/contact" className='about2 '>CONTACT</Link>
     <Link to="/about" className='about2 top-border-right'> ABOUT <div className='circle'></div></Link>
  </div>

   </div>
     );
   };

export default Navbar;