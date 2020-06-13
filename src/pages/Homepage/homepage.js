import React from 'react';

import Guide from '../../components/workshopContent/content';
import Footer from '../../components/footer/footer';

import Header from '../../components/header/header'

export default function Home(){
    return(
      <>
          <section >
            <Header/>
            <Guide />
          </section>
          <Footer/>
      </>
    );
}

