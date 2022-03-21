import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "@mui/material/Slider";

function App() {
  const [color, setColor] = useState("253, 67, 67");
  const [opacity, setOpacity] = useState(1);
  const [background, setBackground] = useState("rgba(253, 67, 67, 1");

  const setSliderValue = (value: number) => {
    setOpacity(value / 100);
    setBackground(`rgba(${color}, ${value / 100})`);
    console.log(value);
    return `${value}`;
  };

  const setRedBackground = () => {
    setColor("253, 67, 67");
    setBackground(`rgba(253, 67, 67, ${opacity})`);
    console.log("Red Button has been pressed!");
  };

  const setGreenBackground = () => {
    setColor("132, 202, 19");
    setBackground(`rgba(132, 202, 19, ${opacity})`);
    console.log("Green Button has been pressed!");
  };

  const setYellowBackground = () => {
    setColor("232, 213, 44");
    setBackground(`rgba(232, 213, 44, ${opacity})`);
    console.log("Yellow Button has been pressed!");
  };

  return (
    <div className="App">
      <h1>React Playground</h1>
      <div className="Button-list" style={{ backgroundColor: background }}>
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
