import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';  
import Header from './Component/Header';
import Dashboard from './Component/Dashboard';
import Language from './Pages/Language';
import Project from './Pages/Project';
import Certification from './Pages/Certification';
import Calendar from './Pages/Calendar';
import WorkingExperience from './Pages/WorkingExperience';
import AboutMe from './Pages/AboutMe';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <React.StrictMode>
    <Header />
    <AnchorLink href='#language'/>
    <AnchorLink href='#home' />
    <AnchorLink href='#project'/>
    <AnchorLink href='#certification'/>
    <AnchorLink href='#calendar'/>
    <AnchorLink href='#working'/>
    <AnchorLink href='#contact'/>
      <section id="home" className='mb-20'>
        <Dashboard />
      </section>
      <section id="language">
        <Language />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="certification">
        <Certification />
      </section>
      <section id="calendar">
        <Calendar />
      </section>
      <section id="working">
        <WorkingExperience />
      </section>
      <section id="contact">
        <AboutMe />
      </section>
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
