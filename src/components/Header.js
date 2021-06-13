import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap/'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favorite">Favirote</Nav.Link>
                </Nav>
                </Navbar>

                
            </div>
        )
    }
}

export default Header
