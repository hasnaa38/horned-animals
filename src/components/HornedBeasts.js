import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title='Horned beast image'></img>
                <p>Animal description: {this.props.description}</p>
            </>
        )
    }
}


export default HornedBeasts
