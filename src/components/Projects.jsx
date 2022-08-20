import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard'
import projImg1 from '../img/js.png'
import projImg2 from '../img/html.png'
import projImg3 from '../img/css.png'
import projImg4 from '../img/react.png'
import projImg5 from '../img/boot.png'
import projImg6 from '../img/git.png'


export const Projects = () => {

    const projects = [
        {
            title: "Javascript",
            imgUrl: projImg1,
        },
        {
            title: "HTML",
            imgUrl: projImg2,

        },
        {
            title: "CSS",
            imgUrl: projImg3,
        },
        {
            title: "React",
            imgUrl: projImg4,
        },
        {
            title: "Bootstrap",
            imgUrl: projImg5,
        },
        {
            title: "Github",
            imgUrl: projImg6,
        },
    ];

    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Habilidades</h2>
                    <br>
                    </br>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tecnologias</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Habilidades Blandas</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Contacto</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <p>Trabajo en equipo, Resolución de problemas, Responsabilidad, Toma de decisiones, Razonamiento logico</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p>Hotmail: gis1097@hotmail.com</p>
                        </Tab.Pane>
                      </Tab.Content>
                      </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
    }