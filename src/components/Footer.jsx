import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../img/github.svg";
import 'animate.css';
import navIcon from '../img/linkedin.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://github.com/Gisela98"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/gisella-de-los-rios-8291bb236/"target="_blank"><img src={navIcon} alt="Linkedin" /></a>
            </div>
            <p>Gisella De Los Rios 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}