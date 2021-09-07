import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import mainStyling from './mainStyling.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likesCount: 0,
        }
    }

    incrementLikesCount = () => {
        this.setState({
            likesCount: this.state.likesCount + 1,
        });
    }
    getHandleOpen=() => {
        let title= this.props.title;
        let image_url=this.props.image_url;
        let description= this.props.description;
        let keyword=this.props.keyword;
        let horns= this.props.horns;

        this.props.handleOpenMethod(title, image_url, description, keyword, horns);
    }

    render() {
        return (
            <>
                <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image_url} onClick={this.incrementLikesCount}/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <p>&#10084; {this.state.likesCount}</p>
                            <Button variant="primary" onClick={this.getHandleOpen}  
                            style={{'background-color': '#212529', 'border-color': '#212529', 
                            'margin-top': '20px'}}>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>

        )
    }
}

export default Main
