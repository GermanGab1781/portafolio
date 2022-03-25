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

      <SliderButton>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </SliderButton>

    </Container>
  );
}

export default App;
