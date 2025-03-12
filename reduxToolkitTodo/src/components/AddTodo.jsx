import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHanler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
    return (
        <form onSubmit={addTodoHanler}>
            <input
                placeholder='Enter a todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

export default AddTodo
