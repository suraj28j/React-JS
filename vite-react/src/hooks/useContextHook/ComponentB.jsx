import React, { useContext } from 'react'
import { UseCounter } from './ComponentA'
const ComponentB = () => {

    // 1st Method | UseCounter.Consumer //

    // 2nd Method | useContext //
    const { count, setCount } = useContext(UseCounter);
    return (
        <>
            {/* <UseCounter.Consumer>
                {(value) =>
                    <>
                        <h2>Counter from Component B : {value.count}</h2>
                        <button onClick={() => value.setCount(value.count + 1)} className='btn btn-info'>+</button>
                        <button onClick={() => value.setCount(value.count - 1)} className='btn btn-danger ms-2'>-</button>
                    </>
                }
            </UseCounter.Consumer> */}

            <h2>Counter from Component B : {count}</h2>
            <button onClick={() => setCount(count + 1)} className='btn btn-info'>+</button>
            <button onClick={() => setCount(count - 1)} className='btn btn-danger ms-2'>-</button>
        </>
    )
}

export default ComponentB
