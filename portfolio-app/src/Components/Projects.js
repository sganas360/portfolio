import { useState } from "react"
import { Button,Row,Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import anime from "../Files/anime.png"
import gym from "../Files/gym.png"
import Atropos from 'atropos/react';

function Projects (){ 
  
  const projects = [
    {title: "All Day Anime", 
     description: "This web application allows users to search information on shows and allows them to write blog posts and comments. It develops a community for people to recommend and interact with people about common interests in Anime. It has a built in 'Guess the Character Game' that allows users to test their knowledge about their favorite anime by trying to guess a character's name based on a photo. It also utilizes the user's watchlist to recommend an anime for him or her. Lastly, users can see the highly rated and currently airing anime straight from the homepage.", 
     image: anime, imageId: "anime-pic", technologies: ["React","Django","Bootstrap", "Javascript","Python", "CSS", "HTML", "Youtube Data API"], url: "https://alldayanime.shunganas.com", codeUrl: "https://github.com/sganas360/all_day_anime_v2"}, 
    {title: "Strongest Link" ,
     description: "Strongest Link connects users with similar fitness goals and promotes physical well-being through diet and exercise. It gives people more comfort when starting their fitness journey and motivates them to reach their goals. It has a built in friend list which allows user to track their peers activity. It has leaderboard system, so people can see who is leading in different exercise categories to keep them inspired. Lastly, it is integrated with Google Maps, so people can set up location pins for their gym and runs, so other users can see who is working out where or have the ability to go on the same run as other users.", 
     image: gym, imageId: "gym-pic", technologies: ["React","Django","Bootstrap", "Javascript","Python", "CSS", "HTML", "Google Maps API"], url: "https://strongestlink.herokuapp.com/", codeUrl: "https://github.com/sganas360/Strongest_Link"}, 
    ]

  const [selectedProject, setSelectedProject] = useState(projects[0])
 

  const handleClick = (project) => {
    setSelectedProject(project)
  }
 
  return(
    <Container id="projects">
      <Row>
        <Col>
          <div className = "section-divider">
            <span className = "section-title" >Projects</span>
          </div>
        </Col>
      </Row>
      <Row className="my-4 justify-content-center">
        {projects.map((project) => (
          <Col key = {project.title} className="col-4 text-center">
            <Button variant={selectedProject.title == project.title ? "dark" : "outline-dark"} 
              onClick={() => handleClick(project)}>
              {project.title}
            </Button>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="col-7">
          <a target="_blank" href={selectedProject.url}>
            <Atropos className="my_atropos" shadow = {false} highlight={false}>
              <img className="screenshot" src={selectedProject.image} id ={selectedProject.imageId}></img>
              <h4 className="hide text">Click to see the live website</h4>
            </Atropos>  
          </a>
        </Col>
        <Col className="col-5">
          <h4 className="text">Description:</h4>
          <p className="text">{selectedProject.description}</p>
          <h4 className="text">Technologies:</h4>
          {selectedProject.technologies.map((tech) => (
            <li className="text" key={`${tech}`}>{tech}</li>
          ))}
          <p className="my-3"></p>
          <h4><a className="anchor" target="_blank" href={selectedProject.codeUrl}>Check Out The Code</a></h4>
        </Col>
      </Row>
    </Container>
  )
}


export default Projects