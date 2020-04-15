import React, {useEffect} from 'react'
import Slider from 'react-slick'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { slide } from  '../Images/Images'


function SlideShow() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        SlideSwow: 1,
        slideToScroll:1
    }

    useEffect(() => {
    }, [])

    return (
        <div>
            <Slider {...settings}>
                {
                    slide.map( (_, index) => {
                        return <div key={index}><img src={_.src} alt={_.alt} width="800px" height="auto"/></div>
                    })
                }
            </Slider>
        </div>
    )
}

export default SlideShow
