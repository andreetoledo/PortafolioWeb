import React from "react"
import '../main.scss'

const Showcase = ({ title, description, imgUrl }) => (
    <div className="card">
        <h1 className="cardTitle">{title}</h1>
        <img className="cardImg" src={imgUrl}></img>
        <p className="cardDesc">{description}</p>
    </div>
)

export default Showcase;