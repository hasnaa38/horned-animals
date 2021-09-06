import React, { Component } from 'react'

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
    }

    incrementLikes = () => {
        this.setState( {
            likes: this.state.likes+1,
        });
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <div>
                    <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} 
                    style={{height: "400px"}} onClick={this.incrementLikes}></img>
                    <p>&#10084; {this.state.likes}</p>
                </div>
                <p>Animal description: {this.props.description}</p>
                <p>Number of horns: {this.props.horns}</p>
                <small>Keyword: {this.props.keyword}</small>
            </>
        )
    }
}

export default HornedBeasts
