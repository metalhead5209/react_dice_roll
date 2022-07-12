import React, { Component } from 'react';
import './Dice.css'

class Dice extends Component {
    render() {
        let dieNum = `Dice fa-solid fa-dice-${this.props.num}`
        return <i class={dieNum}></i>;
    }
}

export default Dice;