import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NcomCalculator from "./components/NcomCalculator";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Ncom </h1>
        <NcomCalculator />
      </div>
    );
  }
}

export default App;
