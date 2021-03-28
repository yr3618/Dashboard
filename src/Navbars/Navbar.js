import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import React from "react";

function NavigationBar() {
    return (
        <div className="NavbarHelp">
            <Navbar expand="lg">

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <h>    </h>
                        <Nav.Link href="/First">First Challenge</Nav.Link>
                        <h>    </h>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
            <hr align="right"/>
        </div>
    );
}

export default NavigationBar;