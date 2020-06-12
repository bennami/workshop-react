import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Homepage/homepage";
import Profile from "./pages/profile/profile";

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/workshop-react/" component={Home}/>
        <Route path="/profile/:slug" component={Profile}/>
        <Route path="/react-portfolio" component={""}/>
        <Route exact path="/contact" component={""}/>
        <Route exact path="/projects" component={" "}/>

    </Switch>
)
};

export default Routes;
