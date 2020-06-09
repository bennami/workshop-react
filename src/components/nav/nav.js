import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./nav.scss"

function Nav(props) {

    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);

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


    return(
        <nav>
            <ul className= {"nav-desktop"}>
                <li><a href="#about">About</a></li>
               <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to ="/">Home</Link></li>
            </ul >
            <div onClick={navSlide} className={burgerClass ? 'burger' : 'burger toggle'} >
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
            <ul className= {navClass ? 'nav-links-mobile': 'nav-links-mobile nav-active-mobile'}>
            <li><a href="#about">About</a></li>
               <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to ="/">Home</Link></li>
            </ul >
        </nav>

    )

}

export default Nav;