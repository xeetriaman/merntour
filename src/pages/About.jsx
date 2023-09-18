import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thank-you.css";
import aboutimage from '../assets/images/about-image.jpg'

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col lg="6">
            <h2 className="about__title">About Our Travel Website</h2>
            <p className="about__text">
            Welcome to our travel paradise! We're thrilled to introduce you to our passion project, brought to life by Aman Chhetri. As avid travelers ourselves, we understand the sheer joy of exploring new destinations and the unforgettable memories that come with each journey.

            Our mission is simple: to provide you with extraordinary travel experiences. Whether you're an adventure seeker, a culture enthusiast, or someone who simply craves relaxation, our carefully curated tours have something special for everyone.


            </p>
            <p className="about__text">
            Explore our Featured Tours

            Browse our featured tours below, and don't hesitate to reach out if you have any questions or special requests. We're here to make your travel dreams a reality.
            </p>
            <Link to="/tours">
              <Button className="btn primary__btn about__btn">Get Started</Button>
            </Link>
          </Col>
          <Col lg="6">
          <img
                src={aboutimage}
                alt="About Us"
                className="about__image"
                style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    marginTop: '20px',
                    borderRadius: '5%' 
                }}
                />




          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
