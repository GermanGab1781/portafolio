import { useState } from "react";
import { Button } from "react-bootstrap";
import "../myStyles.css";

export default function SliderButton() {
  
  const [sliderButton, setSliderButton]= useState(true);

  const toggleClass= () =>{
    setSliderButton(!sliderButton)
  }
  
  return (
    <div className={sliderButton ? "buttonPositionBottom" : "buttonPositionTop"}>
        <Button onClick={toggleClass}>GO</Button>
    </div>
  )
}
