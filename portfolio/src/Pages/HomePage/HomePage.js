import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../HomePage/mobile.css"
import gitpng from "../images/Vector.png"
import linkedinpng from "../images/LinkedIn.png"

const HomePage = () => {

const [page, setPage] = useState(1)

const changePage = (value) => {
setPage(value)

}







  return (
 <div className='outer'>

  <div className='horizontal-flex'>
  <spam className={page ==1 ?"active position":
      page ==2? "active positionProjects" :
      page ==3? "active positionContact" :
      page ==4? "active positionAbout" : "active position"}></spam>
  <div   className={page==1  ?'home top-border-left targeted' :'home top-border-left' } onClick={ () =>changePage(1)}><div className='circle'></div>HOME </div>
  <div  className={page==2  ?'about2 targeted' :'about2' } onClick={ () =>changePage(2)}>PROJECTS</div>
  <div  className={page==3  ?'about2 targeted' :'about2' }  onClick={ () =>changePage(3)}>CONTACT</div>
  <div  className={page==4  ?'about2 top-border-right targeted' :'about2 top-border-right' } onClick={ (e) =>changePage(4)}> ABOUT <div className='circle'></div></div>
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