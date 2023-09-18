import React from "react";
import './newsletter.css'
import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter =()=>{
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Suscribe now to get useful travelling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email"/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Stay Informed and Inspired: Subscribe Now for Exclusive Travel Insights, Tips, and Destination Highlights delivered right to your inbox.Join our vibrant travel community and embark on a journey of inspiration. Our newsletter is your passport to exclusive travel insights, expert tips, and irresistible deals. Subscribe today and let the adventure begin!</p>
                </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt=""/>
                    </div>
                
                </Col>
            </Row>
        </Container>
    </section>
}
export default Newsletter