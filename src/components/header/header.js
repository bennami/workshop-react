

import React from 'react';
import  './header.scss';
import {IoIosArrowUp} from 'react-icons/io';
import {IconContext} from "react-icons";
import logo from '../../logo.svg';
export const Header = () => {
  return (
    <header className= "header">
    <img src={logo} className="react-logo" alt="logo" />
    <h1>Welcome to the react crash course</h1>
    <h4>The perfect place to get started</h4>
     <a
       className="header-link"
       href="#sectionIntro"
     >
     Let's get to it <br/> 
                    <IconContext.Provider
                      value={
                          { style: {
                              fontSize: "25px", 
                              transform:`rotate(180deg)`,
                              marginLeft: "5px",
                              color: "blue"
                              }
                          }
                      }>
                      <IoIosArrowUp/>
                    </IconContext.Provider>
     </a>
   </header>
  )
}

export default  Header;