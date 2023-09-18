import React from "react";
import Slider from 'react-slick'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jpg'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials =()=>{
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
               
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
               
                slidesToShow:1,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },

        ]
    }



    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>What an incredible experience! From booking to the journey itself, this platform made it seamless. The memories created are priceless, thanks to their top-notch service.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">
                    Paras Khadka
                    </h6>
                    <p>
                        Customer
                    </p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>I've traveled the world, but this website stands out. It's more than booking; it's a gateway to extraordinary adventures. Their recommendations are spot-on.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">
                    MS Dhoni
                    </h6>
                    <p>
                        Customer
                    </p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>My travel dreams came true with this website. The personalized service, attention to detail, and seamless booking process made for unforgettable vacations.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava06} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">
                    Virat Kholi
                    </h6>
                    <p>
                        Customer
                    </p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>I'm a frequent traveler, and this platform consistently delivers. Their commitment to customer satisfaction shines through. It's become my go-to for travel adventures.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">
                    Kylian Mbappe
                    </h6>
                    <p>
                        Customer
                    </p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Exploring new destinations has never been easier. This website's user-friendly interface and exceptional customer support made our family vacation memorable and hassle-free.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">
                    Jude Bellingham
                    </h6>
                    <p>
                        Customer
                    </p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Booking through this platform was a game-changer. The diverse range of options, competitive prices, and reliable service turned my vacation into an unforgettable adventure. Can't wait to book again!
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">
                    Cristiano Ronaldo
                    </h6>
                    <p>
                        Customer
                    </p>
                </div>
            </div>
        </div>
    </Slider>
        
}
export default Testimonials