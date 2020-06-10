import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./components/header/header";

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/workshop-react/" component={Home}/>
        <Route path="/react-portfolio" component={""}/>
        <Route exact path="/contact" component={""}/>
        <Route exact path="/projects" component={" "}/>
      
    </Switch>
)
};

export default Routes;
