import React, { useState } from 'react'

const UseStateHook = () => {
    // Example 1
    const [count, setCount] = useState(0);
    const changeCount = (val) => {
        setCount(count + val)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-4'></div>
                <div className='col-md-4 text-center'>
                    <h3>Count : {count}</h3>
                    <button className='btn btn-success' onClick={()=>changeCount(1)}>Increment</button>
                    <button className='btn btn-danger ms-2' onClick={()=>changeCount(-1)}>Decrement</button>
                    <button className='btn btn-warning ms-2' onClick={resetCount}>Reset</button>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default UseStateHook
