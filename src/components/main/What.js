import React from 'react';
import logo from '../../logo.svg';
import Guide from '../guide/guide';

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
      <section id="sectionIntro">
        <Guide/>
      </section>

  </>
)

}

export default Home;