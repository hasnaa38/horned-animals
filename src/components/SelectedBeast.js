import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import mainStyling from './mainStyling.css'

class SelectedBeast extends Component {

    render() {
        return (
            <Modal size="lg" centered show={this.props.showModal} onHide={this.props.handleCloseMethod}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <p>{this.props.description}</p>
                            <p>Number of horns: {this.props.horns}</p>
                            <small>Keyword: {this.props.keyword}</small>
                        </Col>
                        <Col>
                            <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title}></img>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleCloseMethod}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}



export default SelectedBeast

