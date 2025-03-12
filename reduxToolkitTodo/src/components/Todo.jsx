import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../redux/features/todo/todoSlice'

const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <>
            <h3>Todos</h3>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        {/* {console.log("todo : ", todo)} */}
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))
            }
        </>
    )
}

export default Todo
