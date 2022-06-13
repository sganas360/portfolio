import { Container, Row, Col } from "react-bootstrap";
import profile from "../Images/profile_cropped.jpg";


function About(){
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className = "section-divider">
            <span className = "section-title" >About</span>
          </div>
        </Col>
      </Row>
      <Row className = "my-5">
        <Col className="col-6">
          I am a 6 year United States Air Force veteran turned software engineer with an expertise in Aircraft Structural
          Maintenance, responsible for the safety and reliability of military aircraft with a value of $3.9 billion, and
          managed over 20 technicians and daily inspections of government assets. My actions allowed over 1,650
          missions and resulted in over 3,000 flying hours in a year. My military experience honed my attention to detail
          and problem solving skills which is integral in building web applications and developing software.
        </Col>
        <Col className="col-6">
          <img src = {profile} id="profile-pic"></img>
        </Col>
      </Row>
    </Container>
  )
}

export default About;