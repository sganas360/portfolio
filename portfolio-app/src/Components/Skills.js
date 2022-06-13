import { Container, Row, Col } from "react-bootstrap";


const icons = [
  <i className="fa-6x fa-brands fa-python" key="fa-python"></i>,
  <i className="fa-6x fa-brands fa-js-square" key="fa-js-square"></i>,
  <i className="fa-6x fa-brands fa-html5" key="fa-html5"></i>,
  <i className="fa-6x fa-brands fa-css3-alt" key="fa-css3-alt"></i>,
  <i className="fa-6x fa-brands fa-react" key="fa-react"></i>,
  <i className="fa-6x fa-brands fa-bootstrap" key="fa-bootstrap"></i>,
  <i className="fa-6x fa-brands fa-git" key="fa-git"></i>,
  <i className="fa-6x fa-brands fa-github" key="fa-github"></i>,

]


function Skills(){
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className = "section-divider">
            <span className = "section-title" >Skills</span>
          </div>
        </Col>
      </Row>
      <Row className = "my-5">
        {icons.map(icon => (
          <Col key={icon.key}>
            <a>{icon}</a>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Skills;