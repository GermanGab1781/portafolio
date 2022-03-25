import { useState } from "react";
import { Button } from "react-bootstrap";
import "../slider.css";

export default function SliderButton() {
  
  const [show, setShow]= useState(false);
  
  return (
    <div className={show ? "sliderInfo show" : "sliderInfo"}>
        <Button onClick={()=>setShow(!show)}>GO</Button>
    </div>
  )
}
