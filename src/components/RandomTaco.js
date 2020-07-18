import React, { Component } from 'react'

export class RandomTaco extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taco: null,
        };
    }
    componentDidMount() {
        const apiUrl = 'http://taco-randomizer.herokuapp.com/random/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('Taco:', data);
                this.setState({ taco: data });
            });
    }
    render() {
        if (this.state.taco === null) {
            return (
                <div>Finding...</div>
            )
        } else {
            return (
                <div>
                    <div>Seasoning: {this.state.taco.seasoning.name}</div>
                    <div>Base Layer: {this.state.taco.base_layer.name}</div>
                    <div>Mixin: {this.state.taco.mixin.name}</div>
                    <div>Shell: {this.state.taco.shell.name}</div>
                    <div>Condiment: {this.state.taco.condiment.name}</div>
                </div>
            )
        }

    }
}

export default RandomTaco
