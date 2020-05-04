import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../../Global-Assets/images/banner/image1.jpg'
import image2 from '../../Global-Assets/images/banner/image2.jpg'
import image3 from '../../Global-Assets/images/banner/image3.jpg'

class SlideShow extends Component {

    render() {
        return (
            <div>
                <Carousel>
                           <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image1}
                            alt="image1"/>
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="image2"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="image3"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        )
    }
}

export default SlideShow
