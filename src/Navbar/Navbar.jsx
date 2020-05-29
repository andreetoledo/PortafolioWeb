import React from "react"
import '../main.scss'

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="Navbar">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </nav>
        )
    }
}