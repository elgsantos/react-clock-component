import React from "react";
import {BrowserRouter, Link, Route} from 'react-router-dom';

import "./App.css";
import ClockPorClass from "./ClockPorClass";
import ClockPorFunction from "./ClockPorFunction";
import useWindowWidth from "./useWindowWidth";

function Home(){
  const width = useWindowWidth()
  return (
    <>
      <h1>Custom width hook</h1>
      <h3>Window width is {width}</h3>
    </>
  );
}

function About({match}){
  return(
    <h1>About {match.params.name}</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/Eduardo">About</Link></li>
        <li><Link to="/clockclass">Clock Class Component</Link></li>
        <li><Link to="/clockfunction">Clock Function Component</Link></li>
      </ul>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about/:name" component={About}></Route>
      <Route path="/clockclass" component={ClockPorClass}></Route>
      <Route path="/clockfunction" component={ClockPorFunction}></Route>
    </BrowserRouter>
  );
}

export default App;
