import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "@mui/material/Slider";

function App() {
  return (
    <div className="App">
      <h1>React Playground</h1>
      <div className="ButtonList">
        <p>Background Color</p>
        <Button>Red</Button>
        <Button>Green</Button>
        <Button>Blue</Button>
      </div>
      <div className="Slider">
        <p>Opacity</p>
        <Slider></Slider>
      </div>
    </div>
  );
}

export default App;
