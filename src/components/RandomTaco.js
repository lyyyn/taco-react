import React, { Component } from 'react'
const ReactMarkdown = require('react-markdown')

export class RandomTaco extends Component {
    constructor(props) {
        super(props)
        this.state = {
            APIurl: 'https://taco-randomizer.herokuapp.com/random/?full-tack=true',
            taco: null, 
        };
    }
    
    getNewTaco =  () => {
        this.setState({}, async () => {
            try {
                const response = await fetch(this.state.APIurl);
                const result = await response.json();
                this.setState({taco: result})
            } catch (err) {
                console.log(err);
            }
        })
    }

    componentDidMount() {
        this.getNewTaco();
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
                        <button className="btn-large" onClick={this.getNewTaco}>Get Me Another Random Taco, please</button>
                    </div>
                    <div className="clear-fix">&nbsp;</div>
                    <div>
                        <span className="ingredient-label">Seasoning: </span> 
                        <ReactMarkdown source={this.state.taco.seasoning.recipe} />
                    </div>
                    <div>
                        <span className="ingredient-label">Base Layer: </span> 
                        <ReactMarkdown source={this.state.taco.base_layer.recipe} />
                    </div>
                    <div>
                        <span className="ingredient-label">Mixin: </span> 
                        <ReactMarkdown source={this.state.taco.mixin.recipe} />
                    </div>
                    <div>
                        <span className="ingredient-label">Shell: </span> 
                        <ReactMarkdown source={this.state.taco.shell.recipe} />
                    </div>
                    <div>
                        <span className="ingredient-label">Condiment: </span> 
                        <ReactMarkdown source={this.state.taco.condiment.recipe} />
                    </div>
                </div>
            )
        }
    }
}

export default RandomTaco
