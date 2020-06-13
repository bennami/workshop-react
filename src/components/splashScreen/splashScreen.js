import React, {useRef} from 'react';
import {animated, useSpring} from "react-spring";
import "./splashScreen.scss";

function SplashScreen  (props){

    const textRef = useRef();

    const textStyle = useSpring({
        from:{
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });

    return(

        <>
            <section className={"splashScreen"}>
            <animated.h1 style={textStyle}>{`Hi, I'm ${props.name}`}</animated.h1>
            <animated.h2>I am a web developer</animated.h2>
            </section>
        </>
    );
}

export default SplashScreen;
