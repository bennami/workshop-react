import React from 'react';

import Guide from '../../components/workshopContent/content';
import Footer from '../../components/footer/footer';
import  GithubApi  from '../../components/githubCards/githubApi'
import Header from '../../components/header/header'

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
