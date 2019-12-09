import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClockPorClass from "./ClockPorClass";
import ClockPorFunction from "./ClockPorFunction";
import useWindowWidth from "./useWindowWidth";

function App() {
  const width = useWindowWidth()
  return (
    <div className="App">
      <h3>Window width is {width}</h3>
      <h1>Por Component</h1>
      <ClockPorClass />
      <h1>Por Function</h1>
      <ClockPorFunction />
    </div>
  );
}

export default App;
