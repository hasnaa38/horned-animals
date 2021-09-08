import React, { Component } from 'react';
import { Col, Form, FloatingLabel } from 'react-bootstrap';

export class BeastsForms extends Component {
    render() {
        return (
            <>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Search beasts by title">
                        <Form.Control type="text" placeholder="search" onChange={(e) => { this.props.handleTitleSearch(e) }} />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingSelect" label="Filter by the number of horns">
                        <Form.Select onChange={(e) => { this.props.handleSelect(e) }}>
                            <option value="all">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </>
        )
    }
}

export default BeastsForms

