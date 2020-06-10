import React from 'react';
import logo from './logo.svg';
import Nav from './components/nav/nav'
import './App.css';
import Home from './components/main/What';
import  Routes from  './routes'



function App() {
  return (
    <div className="App">
       <Nav/>
      <Routes/>
    </div>
  );
}

export default App;
