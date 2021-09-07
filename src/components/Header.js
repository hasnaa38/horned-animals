import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Horned Animals</Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
