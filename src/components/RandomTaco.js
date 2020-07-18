import React, { Component } from 'react'

export class RandomTaco extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taco: null,
        };
    }
    componentDidMount() {
        const apiUrl = 'https://taco-randomizer.herokuapp.com/random/';
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
                    <div>
                        <span className="ingredient-label">Seasoning: </span> 
                        <span className="ingredient-text">{this.state.taco.seasoning.name}</span>
                        <pre>{this.state.taco.seasoning.recipe}</pre>
                    </div>

                    <div>
                        <span className="ingredient-label">Base Layer: </span> 
                        <span className="ingredient-text">{this.state.taco.base_layer.name}</span>
                        <pre>{this.state.taco.base_layer.recipe}</pre>
                    </div>
                    <div>
                        <span className="ingredient-label">Mixin: </span> 
                        <span className="ingredient-text">{this.state.taco.mixin.name}</span>
                        <pre>{this.state.taco.mixin.recipe}</pre>
                    </div>
                    <div>
                        <span className="ingredient-label">Shell: </span> 
                        <span className="ingredient-text">{this.state.taco.shell.name}</span>
                        <pre>{this.state.taco.shell.recipe}</pre>
                    </div>
                    <div>
                        <span className="ingredient-label">Condiment: </span> 
                        <span className="ingredient-text">{this.state.taco.condiment.name}</span>
                        <pre>{this.state.taco.condiment.recipe}</pre>
                    </div>
                </div>
            )
        }
    }
}

export default RandomTaco
