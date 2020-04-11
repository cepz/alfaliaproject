import React from 'react'
import './Card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} alt="Denim Jeans"/>
            <h1 className="title">{props.title}</h1>
            <p>Some text about the jeans..</p>
            <button>Look</button>
        </div>
    )
}

export default Card
