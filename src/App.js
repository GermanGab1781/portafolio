import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col} from "react-bootstrap";
import Helmet from "react-helmet";
import Slider from "./components/Slider";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {

  const gpSasuke = require('./Gp-Sasuke.jpg');


 
  return (
    <Container>
      
      <Helmet>
        <title>Germán Gabriel</title>
        <body className="bodyPrefs"></body>
      </Helmet>
      
      <Container fluid>
        <Row className="mt-1 mb-1">
          <Col className="col-md m-auto">
            <div className="titleWrapper">
              <span className="title">Germán Gabriel</span><br/>
              <span className="subTitle">Programador Independiente</span>
            </div>            
          </Col>          
          <Col className="col-md-7">
            <img className="profileImage" src={gpSasuke}></img>
          </Col>
        </Row>
      </Container>

      <Slider>
        <div className="socialMediaSection">
          <a href="#"><FontAwesomeIcon className="icons" icon={faGithub}/>
            Github
          </a>
          <a href="#"><FontAwesomeIcon className="icons" icon={faInstagram}/>
            Instagram
          </a>
          <a href="#"><FontAwesomeIcon className="icons" icon={faPhone}/>
            0221-5770092
          </a>
        </div>
        <div className="introductionSection">
          
        </div>
      </Slider>

    </Container>
  );
}

export default App;
