import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate weather",
        desc:"Experience top-notch weather forecasts and climate insights tailored just for you. Our precise calculations ensure you're always prepared for your travels.",

    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Discover your destination's hidden gems with our expert tour guides. Uncover unforgettable experiences and create lasting memories with us.",

    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Tailor your travel experience to perfection with our customization services. Create unforgettable journeys uniquely crafted to your desires.",

    },
]


const ServiceList =()=>{

    return <>
    {
        servicesData.map((item,index)=>(
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
            </Col>
    ))}
    
    </>
}
export default ServiceList