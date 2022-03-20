import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "@mui/material/Slider";

function App() {
  const setSliderValue = (value: number) => {
    console.log(value);
    return `${value}`;
  };

  const setRedBackground = () => {
    console.log("Red Button has been pressed!");
  };

  const setGreenBackground = () => {
    console.log("Green Button has been pressed!");
  };

  const setYellowBackground = () => {
    console.log("Yellow Button has been pressed!");
  };

  return (
    <div className="App">
      <h1>React Playground</h1>
      <div className="Button-list">
        <p>Background Color</p>
        <Button className="Button" size="lg" onClick={setRedBackground}>
          Red
        </Button>
        <Button className="Button" size="lg" onClick={setGreenBackground}>
          Green
        </Button>
        <Button className="Button" size="lg" onClick={setYellowBackground}>
          Yellow
        </Button>
      </div>
      <div className="Slider">
        <p>Opacity</p>
        <Slider
          sx={{ width: 800 }}
          defaultValue={100}
          getAriaValueText={setSliderValue}
        ></Slider>
      </div>
    </div>
  );
}

export default App;
