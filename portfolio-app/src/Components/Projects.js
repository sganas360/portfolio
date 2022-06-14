import { useState } from "react"
import { Button,Row,Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import anime from "../Images/anime.png"
import gym from "../Images/gym.png"

function Projects (){ 
  
  const projects = [
    {title: "All Day Anime", 
     description: "This web application allows users to search information on shows and allows them to write blog posts and comments. It develops a community for people to recommend and interact with people about common interests.", 
     image: anime, imageId: "anime-pic", technologies: ["React","Django","Bootstrap", "Javascript","Python", "CSS", "HTML"]}, 
    {title: "Strongest Link" ,
     description: "Strongest Link connects users with similar fitness goals and promotes physical well-being through diet and exercise. It gives people more comfort when starting their fitness journey and motivates them to reach their goals.", 
     image: gym, imageId: "gym-pic", technologies: ["React","Django","Bootstrap", "Javascript","Python", "CSS", "HTML"]}, 
    ]

  const [selectedProject, setSelectedProject] = useState(projects[0])
 

  const handleClick = (project) => {
    setSelectedProject(project)
  }
 
  return(
    <Container>
      <Row>
        <Col>
          <div className = "section-divider">
            <span className = "section-title" >Projects</span>
          </div>
        </Col>
      </Row>
      <Row className="my-5 justify-content-center">
        {projects.map((project) => (
          <Col className="col-4 text-center">
            <Button variant={selectedProject.title == project.title ? "dark" : "outline-dark"} 
              onClick={() => handleClick(project)}>
              {project.title}
            </Button>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="col-7">
          <img src={selectedProject.image} id ={selectedProject.imageId}></img>
        </Col>
        <Col className="col-5">
          <h4>Description:</h4>
          <p>{selectedProject.description}</p>
          <h4>Technologies:</h4>
          {selectedProject.technologies.map((tech) => (
            <li>{tech}</li>
          ))}
          
        </Col>
      </Row>
      
    </Container>
  )
}

export default Projects