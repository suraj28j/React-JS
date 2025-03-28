import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer = (currentState, action) => {
        switch (action.type) {
            case "INCREMENT":
                return currentState + action.payload
            case "DECREMENT":
                return currentState - action.payload;
            case "RESET":
                return 0;
            default:
                return currentState;
        }
    }
    const [initState, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h3>Count : {initState}</h3>
            <button className='btn btn-info' onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>Increment</button>
            <button className='btn btn-danger ms-2' onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}>Decrement</button>
            <button className='btn btn-warning ms-2' onClick={() => dispatch({ type: "RESET"})}>Reset</button>
        </div>
    )
}

export default UseReducer
