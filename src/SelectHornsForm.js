import React, { Component } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';


class SelectHornsForm extends Component {
    render() {
        return (
            <FloatingLabel controlId="floatingSelect" label="&nbsp;&nbsp; Filter by the number of horns">
                <Form.Select onChange={(e) => { this.props.handleSelect(e) }}>
                    <option value="all">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </FloatingLabel>

        )
    }
}

export default SelectHornsForm
