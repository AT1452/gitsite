import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';




class App extends Component {

    constructor(props){
        super(props);
        this.changeBackground = this.changeBackground.bind(this);
        this.state = {
            dropped : false
        };
    }

    changeBackground(){
        this.setState({dropped: true})
    }

    render() {
        return (
            <div className="App">
                <Navbar collapseOnSelect className = "navbar-main">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <p className="brand-name">AT</p>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className = "drop-menu">
                        <Nav className = "nav-elements-left">
                            <NavItem eventKey={1} href="#">
                                About Me
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Projects
                            </NavItem>
                        </Nav>
                        <Nav pullRight className = "nav-elements-right">
                            <NavItem eventKey={1} href="#">
                                Contact Me
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="background-img">
                    <p className='its-me'>Hey, I'm Abhi</p>
                </div>
                <div>
                    <div className="expo-cards">
                        <div className="expo-card-title">
                            <p>IT Internship</p>
                        </div>
                    </div>
                    <div className="expo-cards">
                        <div className="expo-card-title">
                            <p>Python Classes</p>
                        </div>
                    </div>
                    <div className="expo-cards">
                        <div className="expo-card-title">
                            <p>Coding Club</p>
                        </div>
                    </div>
                </div>
                <div className="info-section">
                    <div className="face-placeholder" />
                    <p className='basic-info'>I am an amature computer scientist, full stack web developer, and super-nerd. I enjoy learning about anything and everything, especially if math, or programming, is involved.
                        I am currently a senior at Hoffman Estates High School planning to pursue a degree in Computer Science with University of Toronto in the near future.
                        Outside of academic pursuits, I enjoy practicing various different martial arts, making music and singing, and developing my own apps, websites, and ideas which you can check out below!
                    </p>
                    <div className='button-links'>
                        <a href = "https://github.com/AT1452/Delphi" className="round-icon" style={{backgroundColor: 'green'}}><img src={require('./assets/fluctuation.png')} className='img-fit-delphi' /></a>
                        <a href = "https://github.com/AT1452/TChain" className="round-icon" style={{backgroundColor: 'lightgrey'}}><img src={require('./assets/blockchain.png')} className='img-fit-blockchain' /></a>
                        <a href = "https://github.com/AT1452/GetItTogether" className="round-icon" style={{backgroundColor: 'lightblue'}}><img src={require('./assets/artificial-intelligence.svg')} className='img-fit-ai' /></a>
                        <br/>
                        <a href = "https://github.com/AT1452/MoneyRush" className="round-icon" style={{backgroundColor: 'darkred'}}><img src={require('./assets/mobile.png')} className='img-fit-mobile' /></a>
                        <a href = "" className="round-icon" style={{backgroundColor: 'lightgrey'}}><img src={require('./assets/blockchain.png')} className='img-fit-blockchain'  /></a>
                        <a className="round-icon" style={{backgroundColor: 'lightblue'}}><img src={require('./assets/artificial-intelligence.png')} className='img-fit-ai' /></a>
                    </div>
                </div>
                <footer className="credits"><p>Icons made by <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a>, <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a>, and <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p></footer>

            </div>

        );
    }
}

export default App;
