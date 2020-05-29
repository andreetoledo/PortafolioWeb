import React, { Component } from 'react'
import './style.css'

export default class Card extends Component {
    render() {

        const { link, icon, bgColor, title, text } = this.props;
        let iconClass = ''

        if (icon === 'github') iconClass = 'fa fa-github-square'
        else if (icon === 'linkedin') iconClass = 'fa fa-linkedin-square'
        else if (icon === 'twitter') iconClass = 'fa fa-twitter-square'
        else iconClass = 'fa'

        return (
            <div className="container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon" style={{ background: bgColor }}>
                                <i className={iconClass} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                            </h3>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}