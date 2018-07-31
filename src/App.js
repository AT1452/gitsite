import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header" style={{alignItems: "horizontal"}}>
                    <h1 className="App-title">AT</h1>
                </header>*/}
                <Navbar fluid collapseOnSelect className = "navbar-main">
                    <Navbar.Header>
                        <div className = "navbar-brand">
                            <p className="brand-name">AT</p>
                        </div>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Link
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link
                            </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Link Right
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Link Right
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
