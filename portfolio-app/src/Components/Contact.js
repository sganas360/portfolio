import {Row,Col,Container} from "react-bootstrap"

const icons = [
  <a target= "_blank" href="https://www.linkedin.com/in/shun-ganas/"><i class="fa-6x fa-brands fa-linkedin" key="fa-linkedin"></i></a>,
  <a href= "mailto: sganas360@gmail.com"><i class="fa-6x fa-solid fa-envelope" key="fa-envelope"></i></a>
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
        <h6 className="my-4">For Any Professional Inquiries, Please Contact Me in the Avenues Below:</h6>
      </Row>
      <Row>
        {icons.map(icon => (
          <Col key={icon.key}>
            {icon}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Contact