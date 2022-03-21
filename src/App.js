import { Container, Row, Col} from "react-bootstrap";
import "./myStyles.css";
function App() {
  const gpSasuke = require('./Gp-Sasuke.jpg');
  return (
    <Container>
      <Container>
        <Row className="mt-2">
          <Col className="col-md-5">
            <span className="title">Germán Gabriel</span><br/>
            <span className="subTitle , ml-2">Programador Independiente</span>
          </Col>
          
          <Col className="col-md-7"><img src={gpSasuke}></img></Col>
        </Row>
      </Container>

    </Container>
  );
}

export default App;
