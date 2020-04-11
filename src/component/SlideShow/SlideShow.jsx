import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../Global-Assets/images/banner/image1.jpg';
import image2 from '../../Global-Assets/images/banner/image2.jpg';
import image3 from '../../Global-Assets/images/banner/image3.jpg';

function SlideShow() {
    const [settings, setSettings] = useState({
        dots: true,
            infinite: true,
            speed: 500,
            SlideSwow: 1,
            slideToScroll:1
    })

    useEffect(() => {
        return document.title = `Alfalia Store - Home`; 
    })

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={image1} width="850px" height="auto" />
                </div>
                <div>
                    <img src={image2} width="850px" height="auto" />
                </div>
                <div>
                    <img src={image3} width="850px" height="auto" />
                </div>
            </Slider>
        </div>
    )
}

export default SlideShow
