import { Container, Row, Col, Button} from "react-bootstrap";
import Helmet from "react-helmet";
import SliderButton from "./components/SliderButton"
import "./index.css";

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

      <SliderButton/>

    </Container>
  );
}

export default App;
