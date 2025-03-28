import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(10);

    const isEven = useMemo(() => {
        console.log("isEven Function",count);
        return count%2===0
    },[count])

    // const isEven = () => {
    //     console.log("isEven Function Calling", count);
    //     return count % 2 === 0;
    // }
    return (
        <div>
            <h3>{count}</h3>
            <button className='btn btn-info' onClick={() => setCount(count + 1)}>Click</button>
            <button className='btn btn-warning ms-2' onClick={() => setPrice(price + 10)}>Price {price}</button>
            <h3>{isEven ? "Yes" : "NO"}</h3>
        </div>
    )
}

export default UseMemoHook
