import React from "react"
import Slider from '../Items/Slider'
import ProjectInfo from '../Items/ProjectInfo'
import '../main.scss'

const images = [
    "https://github.com/andreetoledo/MyPortfolioWeb/blob/master/MyPortfolioWeb/resources/images/memory.JPG?raw=true",
    "https://github.com/andreetoledo/MyPortfolioWeb/blob/master/MyPortfolioWeb/resources/images/chat.JPG?raw=true",
    "https://github.com/andreetoledo/MyPortfolioWeb/blob/master/MyPortfolioWeb/resources/images/memory.JPG?raw=true",
    "https://github.com/andreetoledo/MyPortfolioWeb/blob/master/MyPortfolioWeb/resources/images/chat.JPG?raw=true",
];

const info = [
    {
        title: " Nintendo Memory Game",
        description: "A basic memory game created with javascritp, react and css.",
        itch: "http://quetzaluno.space/18439/laboratorio6.html",
        git: "https://github.com/andreetoledo/Laboratorio_6_WEB"
    },
    {
        title: "Simple Chat",
        description: "A simple chat created for the Web class.",
        itch: "http://quetzaluno.space/18439/laboratorio5.html",
        git: "https://github.com/andreetoledo"
    },
    {
        title: " Nintendo Memory Game",
        description: "A basic memory game created with javascritp, react and css.",
        itch: "http://quetzaluno.space/18439/laboratorio6.html",
        git: "https://github.com/andreetoledo/Laboratorio_6_WEB"
    },
    {
        title: "Simple Chat",
        description: "A simple chat created for the Web class.",
        itch: "http://quetzaluno.space/18439/laboratorio5.html",
        git: "https://github.com/andreetoledo"
    },

]

export default class Games extends React.Component {
    render() {
        return (
            <div className="Games" style={{textAlign: 'center'}}>
                <h1 className="title">Game and Chat Developed</h1>
                <Slider info={info} images={images} />
            </div>
        )
    }
}