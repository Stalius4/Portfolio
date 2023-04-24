import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import Navbar from './components/navbar';
import { useState } from 'react';
const App = () => {

  const [changePg, setChangePg] = useState()


  return (
    <Router>
    
      <Routes>
      <Route path="/" element={<HomePage changePg={changePg} setChangePg={setChangePg}/>} exact />
      <Route path="/about" element={<AboutPage changePg={changePg} setChangePg={setChangePg}/>} />
      <Route path="/contact" element={<ContactPage changePg={changePg} setChangePg={setChangePg}/>} />
      <Route path="/projects" element={<ProjectsPage changePg={changePg} setChangePg={setChangePg}/>} />
      </Routes>
    </Router>
  );
};

export default App;