import React, { useContext } from 'react'
import "./todo.css"
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../redux/features/todo/todoSlice'
import InputContext from '../context/InputContext'

const Todo = () => {
    const { input, setInput } = useContext(InputContext)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <h3 className='text-center mt-4'>Todos</h3>
                    <ul>
                        {
                            todos.map((todo) => (
                                <li key={todo.id}>
                                    {todo.text}
                                    <div>
                                        <button
                                            onClick={() => (setInput(todo.text), dispatch(removeTodo(todo.id)))}
                                            className='btn btn-info me-2'>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button
                                            onClick={() => dispatch(removeTodo(todo.id))}
                                            className='btn btn-danger'>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                </div>
                <div className='col-md-3'></div>
            </div>

        </div>
    )
}

export default Todo
