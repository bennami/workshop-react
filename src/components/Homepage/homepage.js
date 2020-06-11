import React from 'react';

import Guide from '../workshopContent/content';
import Footer from '../footer/footer';
import  GithubApi  from '../githubCards/githubApi'
import Header from '../header/header'

function Home(){

return(
  <>
  
      
      <section >
        
        <Header/>
        <GithubApi/>
        <Guide />
      </section>
      <Footer/>
  
  </>
)

}

export default Home;