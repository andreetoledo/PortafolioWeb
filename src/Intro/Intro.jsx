import React from 'react'
import * as THREE from 'three'
import GLOBE from '../../src/vanta.globe.min.js'
import '../main.scss'

class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.vantaRef = React.createRef()
        this.state = {
            currentHeight: window.innerHeight,
            showText: false

        }
    }

    componentDidMount() {
        this.vantaEffect = GLOBE({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x252525,
            shininess: 71.00,
            waveHeight: 30.00,
            waveSpeed: 0.75,
            THREE: THREE
        })
        setTimeout(() => {
            this.setState({ showText: true })
        },2000);
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    }
    render() {
        const height = window.innerHeight;
        return <div style={{ position: 'relative', height: height }} ref={this.vantaRef}>
            <div style={{ height: height, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }} >
                <p className={this.state.showText ? 'ShowText' : 'HideText'} style={{ color: '#fff', fontSize:45, margin:10 }}>Andree Toledo</p>
                <hr className={this.state.showText ? 'title-border-animate' : 'title-border'}></hr>
            </div>
        </div>

    }
}

export default Intro;