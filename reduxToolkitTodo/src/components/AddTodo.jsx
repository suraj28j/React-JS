import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/features/todo/todoSlice';
import "./addTodo.css"

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHanler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <h2 className=' text-center mt-4'>Learn About Redux Toolkit</h2>
                    <form className='mt-4' onSubmit={addTodoHanler}>
                        <input
                            placeholder='Enter a Todo...'
                            value={input}
                            required
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button className='btn btn-info ms-4'>Add Todo</button>
                    </form>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default AddTodo
