import { Container, Row, Col } from "react-bootstrap";
import Flip from 'react-reveal/Flip';


const icons = [
  <i className="fa-5x fa-brands odd fa-python" key="fa-python"></i>,
  <i className="fa-5x fa-brands even fa-js-square" key="fa-js-square"></i>,
  <i className="fa-5x fa-brands odd fa-html5" key="fa-html5"></i>,
  <i className="fa-5x fa-brands even fa-css3-alt" key="fa-css3-alt"></i>,
  <i className="fa-5x fa-brands odd fa-react" key="fa-react"></i>,
  <i className="fa-5x fa-brands even fa-bootstrap" key="fa-bootstrap"></i>,
  <h2 className="text-skills-odd " key="ACCOUNTABLE">ACCOUNTABLE</h2>,
  <h2 className="text-skills-even" key="ADAPTABLE">ADAPTABLE</h2>,
  <h2 className="text-skills-odd " key="APPROACHABLE">APPROACHABLE</h2>,
  <i className="fa-5x fa-brands even fa-git" key="fa-git"></i>,
  <i className="fa-5x fa-brands odd  fa-github" key="fa-github"></i>,
  <i className="fa-5x fa-solid fa-brands even fa-terminal" key="fa-terminal"></i>,
  <i className="fa-5x fa-brands odd  fa-aws" key="fa-aws"></i>,
  <i className="fa-5x fa-brands even fa-slack" key="fa-slack"></i>,
  <i className="fa-5x fa-brands odd  fa-google-drive" key="fa-google-drive"></i>,
  <h2 className="text-skills-even" key="COMMUNICATION">COMMUNICATION</h2>,
  <h2 className="text-skills-odd " key="COMPASSION">COMPASSION</h2>,
  <h2 className="text-skills-even" key="COLLABORATION">COLLABORATION</h2>,

]


function Skills(){
  return (
    <Container className="my-4" id="skills">
      <Row>
        <Col>
          <div className = "section-divider">
            <span className = "section-title" >Skills</span>
          </div>
        </Col>
      </Row>
      <Row className = "my-4 justify-content-center">
        {icons.map(icon => (
          <Col className="col-4 text-center my-4" key={icon.key}>
            <Flip left>
              {icon}
            </Flip>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Skills;