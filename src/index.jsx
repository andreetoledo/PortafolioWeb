import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import AboutMe from './Screens/AboutMe'
import Work from './Screens/Work';
import Games from './Screens/Games';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentHeight: window.innerHeight,
            opacity: 1
        }
    }

    updateSize() {
        this.setState({ currentHeight: window.innerHeight })
    }

    render() {
        return (
           <div>
                <div className="content">
                <Intro currentHeight={this.state.currentHeight} opacity={this.state.opacity}/>
                <AboutMe />
                <Work />
                <Games />
                <Work />
               </div>
           </div>
        )
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateSize.bind(this))

        window.onscroll = () => {

            let opacity = 1 - (window.pageYOffset / 325)
            this.setState({ opacity: opacity })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize.bind(this))
    }

};

ReactDOM.render(<App />, document.querySelector('#root'))