import { useState } from "react";
import "../slider.css";


export default function Slider(props,handleState,sliderState) {
  return (
    <div className={sliderState ? "sliderInfo show" : "sliderInfo"}>     
      <button onClick={handleState} className="buttonPrefs">
        <span className={sliderState ? "arrow down" : "arrow up"}></span>
      </button>
      <div className={sliderState ? "sliderChildren show" : "sliderChildren"}>
        {props.children}
      </div>           
    </div>
  );
}
