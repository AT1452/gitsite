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
                        <Navbar.Brand style = {{color: '#000'}}>
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
                <div className="homepage">
                    <img src={require('./assets/ripplesHigh.jpg')} className="background-img"/>
                </div>
            </div>
        );
    }
}

export default App;
