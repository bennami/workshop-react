import React from 'react';
import logo from '../../logo.svg';
import Guide from '../workshopContent/content';
import Footer from '../footer/footer';
import { ScrollToTop } from '../scrollToTop/scrollToTop';

function Home(){

return(
  <>
  
   <header className="App-header">
   
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Welcome to the react crash course</h1>
       <h5>The perfect place to get started</h5>
        <a
          className="App-link"
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