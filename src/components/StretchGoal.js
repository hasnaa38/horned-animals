import React, { Component } from 'react'

class StretchGoal extends Component {
    render() {
        return (
            <>
                <p>--------------------------------------------</p>
                <p>Stretch Goal - Even More Horned Beasts!</p>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.keyword} title='Horned beast image'></img>
                <p>Animal description: {this.props.description}</p>
                <p>Number of horns = {this.props.horns}</p>
                <small>keyword: {this.props.keyword}</small>
            </>
        )
    }
}

export default StretchGoal
