import React, { Component } from 'react'
import Dice from './Dice';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "one"};
        this.roll = this.roll.bind(this);
    }
    roll(){
        // pick 2 new roles
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ]
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ]
        // set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2 });
    }
    render() {
        return (
            <div>
                <Dice num={this.state.die1} />
                <Dice num={this.state.die2} />
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;