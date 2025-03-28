import React, { useState } from 'react'
import InputContext from './InputContext'

const InputContextProvider = ({ children }) => {
    const [input, setInput] = useState("")
    return (
        <InputContext.Provider value={{ input, setInput }}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContextProvider
