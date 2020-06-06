import React, {useState} from 'react'
import SlideShow from '../../component/SlideShow'
import './Dasboard.scss'
import Card from '../../component/Card'

import {imageBanner} from '../../component/Images'

function Dasboard() {
    
    return (
        <div className="container">
            <div className="slideShow">
                <SlideShow />
            </div>
            <br/>
            <div className="containerCard">
                {
                    imageBanner.map((_, index) => {
                        return <Card key={index} src={_.src}/>
                    })
                }
            </div>
        </div>
    )
}

export default Dasboard
