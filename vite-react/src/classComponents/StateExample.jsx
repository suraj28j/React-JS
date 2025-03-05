import React, { Component } from 'react'

export class StateExample extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    handleIncrement = () => {
        // this.setState({ count: this.state.count + 1 },()=>{})
        this.setState({ count: this.state.count + 1 })
    };
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        console.log(this);

        return (
            <>
                <h3>Count : {this.state.count}</h3>
                <button className='btn btn-info ms-2' onClick={this.handleIncrement}>Increment</button>
                <button className='btn btn-danger ms-2' onClick={this.handleDecrement}>Decrement</button>
            </>
        )
    }
}

export default StateExample
