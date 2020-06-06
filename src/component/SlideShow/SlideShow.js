import React from 'react'

import image1 from '../../Global-Assets/images/banner/image1.jpg';
import image2 from '../../Global-Assets/images/banner/image2.jpg';
import image3 from '../../Global-Assets/images/banner/image3.jpg';

function SlideShow() {

    return (
        <div className="container mt-5 mb-5">
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src={image1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={image2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..."/>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
            </div>       
        </div>
    )
}

export default SlideShow
