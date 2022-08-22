import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../img/eco.png'
import projImg2 from '../img/poke.png'
import projImg3 from '../img/serie.png'
import projImg4 from '../img/crud.png'
import projImg5 from '../img/clima.png'

export const Projects = () => {

  const team = [
    {
      title: "E-commerce",
      description: " E-commerce donde el usuario pueda loguearse, ver y filtrar, ver los productos, añadirlos al carrito y comprarlos. Utilizando una API, el diseño utilizado es un framework de bootswatch.",
      imgUrl: projImg1,

    },
    {
      title: "Pokedex",
      description: "Pokedex desarrollado a través de una API, donde las rutas están protegidas y se puede acceder a la información de cada Pokémon donde se muestra el color depende de su tipo principal",
      imgUrl: projImg2,
    },
    {
      title: "App Rick and Morty",
      description: "App desarrollada a través de una API, donde por medio de una ubicación con un id aleatorio que recibe la url del residente por props, podemos consumir y verr la información de cada personaje.",
      imgUrl: projImg3,
    },
    {
      title: "Crud",
      description: "Desarrolle una aplicación donde se puedan administrar usuarios a través de un CRUD, Utilize una API y se puede para consultar, crear, eliminar y actualizar dichos usuarios.",
      imgUrl: projImg4,
    },

    {
      title: "Weather App",
      description: "Desarrolle una aplicación que muestre datos del clima, obteniendo de la API los siguientes datos: país, ciudad, icono que describa el clima, la temperatura en grados centígrados, y un botón que cambie la temperatura a grados Fahrenheit. ",
      imgUrl: projImg5,

    },

  ];

  return (
    <section className="team" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <center>
                    <h2>Proyectos</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              team.map((project, index) => {
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
                      </Tab.Content>
                    </Tab.Container></center>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}