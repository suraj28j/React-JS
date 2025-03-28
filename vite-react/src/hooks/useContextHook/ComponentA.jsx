import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB';
export const UseCounter = createContext();

const ComponentA = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2>Counter from Component A : {count}</h2>
            <UseCounter.Provider value={{ count, setCount }}>
                <ComponentB />
            </UseCounter.Provider>

        </>
    )
}

export default ComponentA
