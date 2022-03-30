import * as React from "react";

import ButtonComponent from "./components/atoms/Buttons";

import logo from "./logo.svg";
import "./App.css";

// JSX APP Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React With TS</p>
        <ButtonComponent text="Texto como prop" />
      </header>
    </div>
  );
}

export default App;
