import React from "react"
import '../main.scss'

const ProjectInfo = ({ title, description, itch, git }) => (
    <div className="ProjectInfo">
        <h1 className="cardTitle" style={{color:'#fff'}}>{title}</h1>
        <p className="cardDesc" style={{color:'#fff'}}>{description}</p>
        <div className="half-colored">
            <ul>
                <li><a href={git} target="_blank"><i className="fab fa-github"></i></a></li>
                <li><a href={itch} target="_blank"><i className="fas fa-gamepad"></i></a></li>
            </ul>
        </div>
    </div>
)

export default ProjectInfo;