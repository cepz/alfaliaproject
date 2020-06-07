import React from 'react'

import {imageBanner} from '../Images'
import { Link } from "react-router-dom";

import "./Card.scss";

function Card(){
    return (
        <div className="container mt-3 justify-content-center" style={{backgroundColor:"#ff95b8", color:"#bdf1ff"}}>
                <h2 className="brand text-center mt-4">Kategori</h2>
            <div className="row">
                {
                    imageBanner.map(type => 
                        <div className="col-md-3 mx-auto" key={type.id} >
                            <div className="card text-center" style={{width: "17rem"}}>
                                <img className="card-img-top" src={type.src} alt={type.alt}/>
                                <div className="card-body">
                                    <h5 className="card-title">{type.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the</p>
                                    <Link to="#" className="btn-lg btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Card
