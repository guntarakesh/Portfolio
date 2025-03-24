import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import ecess from "../../Assets/Projects/ecess.png";
import quiz from "../../Assets/Projects/quiz.avif";
import countdown from "../../Assets/Projects/countdown.png";
import sae_logo from "../../Assets/Projects/sae_logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="I made quiz app using React js . Through this project i learned how to use useState and many new
                        things in React js."
              ghLink="https://github.com/guntarakesh/quizapp1-react.js"
              demoLink="https://guntarakesh.github.io/quizapp2-react.js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sae_logo}
              isBlog={false}
              title="SAE Website"
              description="I developed Society of Automotive Engineers Club website using React js . Through this i
                        developed my skills in React js."
              ghLink="https://github.com/guntarakesh/SAE-Frontend"
              demoLink="https://saenitd.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecess}
              isBlog={false}
              title="ECESS Website"
              description="I developed Electronics and Communication Students Society Website using React js . Through this
                        i enhanced my skills in React js."
              ghLink="https://github.com/guntarakesh/ecess.nitd"
              demoLink="https://ecess-nitd.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO App"
              description="I made TO-DO App using React js and React-Redux . Through this project i learned React-Redux.In
                        this user can Add , edit , update , delete Tasks ."
              ghLink="https://github.com/guntarakesh/TODO-APP"
              demoLink="https://todoapp-nu-woad.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countdown}
              isBlog={false}
              title="Time CountDown"
              description="I made Time CountDown using HTML,CSS and simple Javascript . Through this project i learned new
                        functions in JS.In this user have to provide date and time then countdown starts automatically
                        from present date and time."
              ghLink="https://github.com/guntarakesh/Countdown"
              demoLink="https://countdown-six-sepia.vercel.app/"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
