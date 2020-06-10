import React from 'react';
import {IconContext} from "react-icons"
import {IoIosArrowUp} from 'react-icons/io';
import {useWindowScroll} from "react-use";

export const ScrollToTop = () =>{

  const {y: pageYOffset}= useWindowScroll();

  return(
    <div className='scrollToTop cursorPointer textCenter'>
      <icon>
      <IconContext.Provider
        value={
          { style: {
              fontSize: '25px', 
              color: "whitesmoke", 
              marginLeft: "5px"
              }
          }
        }
      >
        <IoIosArrowUp/>
      </IconContext.Provider>
      </icon>
    </div>
  )
}