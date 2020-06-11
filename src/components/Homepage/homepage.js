import React from 'react';
import logo from '../../logo.svg';
import Guide from '../workshopContent/content';
import Footer from '../footer/footer';
import { ScrollToTop } from '../scrollToTop/scrollToTop';
import "./header.scss"

function Home(){

return(
  <>
   <header className= "header">
       <img src={logo} className="react-logo" alt="logo" />
       <h1>Welcome to the react crash course</h1>
       <h4>The perfect place to get started</h4>
        <a
          className="header-link"
          href="#sectionIntro"
        >
          Let's get to it
        </a>
      </header>
      <ScrollToTop/>
      <section id="sectionIntro">
        <Guide/>
      </section>
      <Footer/>
  
  </>
)

}

export default Home;