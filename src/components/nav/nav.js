import React, {useState} from "react";
import {Link} from "react-router-dom";
import  {SubMenu} from './subMenu';
import {IoIosArrowUp} from 'react-icons/io';
import {IconContext} from "react-icons"

import "./nav.scss"

function Nav(props) {

    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [rotate, setRotate]= useState('rotate(90deg)');

    const navSlide =() => {
        const navLinks = document.querySelectorAll('.nav-links li');
         //open close nav on mobile
            if(!navClass){
               setClass(true);
               setBurgerClass(true);
            }else{
               setClass(false);
               setBurgerClass(false);
            }

            //animate links
            navLinks.forEach((link,index) =>{
                if(link.style.animation){
                    link.style.animation ='';
                }else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 5 + 0.2}s`;
                }
            });

    };

    function checkBool(){
        if(openSubMenu){
            setRotate('rotate(90deg)');
            console.log(rotate);
            setOpenSubMenu(false);
        }else{
            setRotate('rotate(180deg)');
            console.log(rotate);
            setOpenSubMenu(true)
           
        }
    }


    return(
        <nav>
            <ul className= {"nav-desktop"}>
                <li><Link to={''}>examples</Link></li>
                <li><Link to ={''}>Home</Link></li>
                <li>
                    <button onClick={checkBool}>
                    Overview 
                    <IconContext.Provider
                    value={
                        { style: {
                            fontSize: '20px', 
                            color: "whitesmoke", 
                            transform:`${rotate}`,
                            marginLeft: "5px"
                            }
                        }
                    }>
                        <IoIosArrowUp/>
                    </IconContext.Provider>
                    </button>
                </li>    
            </ul >
            <SubMenu openSubMenu={openSubMenu}/>
            <div onClick={navSlide} className={burgerClass ? 'burger' : 'burger toggle'} >
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
            <ul className= {navClass ? 'nav-links-mobile': 'nav-links-mobile nav-active-mobile'}>
                <li><Link to={''}>examples</Link></li>
                <li><Link to ={''}>Home</Link></li>
                <li>
                    <button onClick={checkBool}>
                        Overview 
                        <IconContext.Provider
                        value={
                            { style: {
                                fontSize: '20px', 
                                color: "whitesmoke", 
                                transform:"rotate(180deg)",
                                marginLeft: "5px"
                                }
                            }
                        }>
                            <IoIosArrowUp/>
                        </IconContext.Provider>
                    </button>
                </li> 
            </ul >
        </nav>

    )

}

export default Nav;