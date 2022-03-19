import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "@mui/material/Slider";

function App() {
  return (
    <div className="App">
      <h1>React Playground</h1>
      <div className="Button-list">
        <p>Background Color</p>
        <Button className="Button" size="lg">
          Red
        </Button>
        <Button className="Button" size="lg">
          Green
        </Button>
        <Button className="Button" size="lg">
          Blue
        </Button>
      </div>
      <div className="Slider">
        <p>Opacity</p>
        <Slider sx={{ width: 800 }} defaultValue={100}></Slider>
      </div>
    </div>
  );
}

export default App;
