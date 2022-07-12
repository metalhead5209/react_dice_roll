import React, { Component } from 'react';
import './Dice.css'

class Dice extends Component {
    render() {
        let dieNum = `Dice fa-solid fa-dice-${this.props.num} 
        ${this.props.rolling ? 'rolling' : ""}`
        return <i class={dieNum}></i>;
    }
}

export default Dice;