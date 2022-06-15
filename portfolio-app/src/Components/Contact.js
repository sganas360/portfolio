import {Row,Col,Container} from "react-bootstrap"

const icons = [
  <a target= "_blank" href="https://www.linkedin.com/in/shun-ganas/" key="LinkedIn"><i className="fa-10x fa-brands odd fa-linkedin" ></i></a>,
  <a href= "mailto: sganas360@gmail.com" key="Email"><i className="fa-10x fa-brands fa-solid even fa-envelope"></i></a>
]

function Contact(){
  return (
    <Container className="my-4" id="contact">
      <Row>
        <Col>
          <div className = "section-divider">
            <span className = "section-title" >Contact</span>
          </div>
        </Col>
      </Row> 
      <Row>
        <h4 className="my-5 text text-center">For Any Professional Inquiries, Please Contact Me in the Avenues Below:</h4>
      </Row>
      <Row className="row  align-items-center">
        {icons.map(icon => (
          <Col key={icon.key} className="text-center">
            {icon}
            <h3 className="text mb-5">{icon.key}</h3>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className="my-5 contact-text text text-center">I would love to hear from you!</h1>
      </Row>
    </Container>
  )
}

export default Contact