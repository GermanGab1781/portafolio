import { useState } from "react";
import "../slider.css";

export default function Slider(props) {
  
  const [show, setShow]= useState(false);
  
  return (
    <div className={show ? "sliderInfo show" : "sliderInfo"}>     
      <div onClick={()=> setShow(!show)} className="buttonPrefs">
        <span className={show ? "arrow down" : "arrow up"}></span>
      </div>
      <div className={show ? "sliderChildren show" : "sliderChildren"}>
        {props.children}
      </div>           
    </div>
  )
}
