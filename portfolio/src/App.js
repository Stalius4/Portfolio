import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ContactPage from './Pages/ContactPage/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} exact />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/projects" component={ProjectsPage} />
      </Routes>
    </Router>
  );
};

export default App;