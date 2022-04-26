import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container} from "react-bootstrap";
import {faGithub, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { useState } from "react";

function App() {

  const [showSlider, setShowSlider]= useState(false);
  const [showArrow, setShowArrow]= useState(false);
  

  return (
    <Container>     
      
      <Container className="titleWrapper" onMouseEnter={()=>setShowArrow(true)} onClick={()=>setShowSlider(!showSlider)}>
        <span className="title">Germán Gabriel</span><br/>
        <span className="subTitle">Programador Independiente</span>    
      </Container>
      <Container className="arrowsWrapper">
        <Container className="leftArrows">
          <span className={showArrow ? "iconArrow left show" : "iconArrow"}></span>        
          <span className={showArrow ? "iconArrow left show" : "iconArrow"}></span>    
          <span className={showArrow ? "iconArrow left show" : "iconArrow"}></span>      
        </Container>   
        <Container className="rightArrows">
          <span className={showArrow ? "iconArrow right show" : "iconArrow"}></span>    
          <span className={showArrow ? "iconArrow right show" : "iconArrow"}></span>  
          <span className={showArrow ? "iconArrow right show" : "iconArrow"}></span>   
        </Container>
      </Container>    
      <br></br>
               

      <div className={showSlider ? "sliderInfo show" : "sliderInfo"}>     
        <button onClick={()=>setShowSlider(!showSlider)} className="buttonPrefs">
          <span className={showSlider ? "arrow down" : "arrow up"}></span>
        </button>
        <div className={showSlider ? "sliderChildren show" : "sliderChildren"}>
          <div className="introductionSection">
            What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="socialMediaSection">
            <a href="#"><FontAwesomeIcon className="icon" icon={faGithub}/>
              <span className="iconText">GitHub</span>
            </a>
            <a href="#"><FontAwesomeIcon className="icon" icon={faInstagram}/>
              <span className="iconText">Instagram</span>
            </a>
            <a href="#"><FontAwesomeIcon className="icon" icon={faWhatsapp}/>
              <span className="iconText">0221-5770092</span>
            </a>
          </div>
          <div className="languagesSection">
          What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>           
      </div>

    </Container>
  );
}

export default App;
