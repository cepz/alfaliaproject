import React from 'react'
import SlideShow from '../../component/SlideShow'
import './Dasboard.scss'
import Card from '../../component/Card'

import image1 from '../../Global-Assets/images/productBanner/banner1.jpg'
import image2 from '../../Global-Assets/images/productBanner/Banner2.jpg'
import image3 from '../../Global-Assets/images/productBanner/banner3.jpg'

function Dasboard() {
    return (
        <div className="container">
            <div className="slideShow">
                <SlideShow />
            </div>
            <br/>
            <div className="containerCard">
                <Card title="Baby Clothes" src={image1}/>
                <Card title="Kids Clothes" src={image2}/>
                <Card title="Kids Clothes" src={image3}/>
            </div>
        </div>
    )
}

export default Dasboard
