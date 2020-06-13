import React, {useState} from "react";
import  {SubMenu} from './subMenu';
import {IoIosArrowUp} from 'react-icons/io';
import {IconContext} from "react-icons";
import { Link} from  'react-router-dom';
import "./nav.scss"

function Nav(props) {

    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [rotate, setRotate]= useState('rotate(90deg)');

    const navSlide =() => {

         //open close nav on mobile
            if(!navClass){
               setClass(true);
               setBurgerClass(true);
            }else{
               setClass(false);
               setBurgerClass(false);
            }
    };

    function subMenu(){
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
                <li>
                    <Link to={'/'}>
                    <button>Home</button>
                    </Link>
                </li>
                <li>
                    <button onClick={subMenu}>
                    Overview
                    <IconContext.Provider
                    value={
                        {
                            style: {
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
                <SubMenu openSubMenu={openSubMenu}/>
            </ul >

            {/*nav bar for mobile*/}
            <div onClick={navSlide} className={burgerClass ? 'burger' : 'burger toggle'} >
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
            <ul className= {navClass ? 'nav-links-mobile': 'nav-links-mobile nav-active-mobile'}>
                <li>
                    <button>Examples</button>
                </li>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button onClick={subMenu}>
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
                <SubMenu openSubMenu={openSubMenu}/>
            </ul >
        </nav>

    )

}

export default Nav;
