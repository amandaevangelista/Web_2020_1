import React, { Component } from 'react'
import Card from './RestrictCard'

 export default class Signout extends Component {

    render() {
        return (
            <Card title = 'Deslogar' history = {this.props.history}>
                
            </Card>
        )
    }
}

