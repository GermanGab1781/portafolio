import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col} from "react-bootstrap";
import Helmet from "react-helmet";
import Slider from "./components/Slider";
import {faGithub, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

function App() {

  const gpSasuke = require('./Gp-Sasuke.jpg');


 
  return (
    <Container>
      
      <Helmet>
        <title>Germán Gabriel</title>
        <body className="bodyPrefs"></body>
      </Helmet>
      
      <Container fluid className="firstPage">
          <div className="titleWrapper">
            <span className="title">Germán Gabriel</span><br/>
            <span className="subTitle">Programador Independiente</span>
          </div>            
          <img className="profileImage" src={gpSasuke}></img>
      </Container>

      <Slider>
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
        
      </Slider>

    </Container>
  );
}

export default App;
