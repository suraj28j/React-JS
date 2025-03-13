import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import InputContextProvider from './context/InputContextProvider'

function App() {
  return (
    <div className='app'>
      <InputContextProvider>
        <AddTodo />
        <Todo />
      </InputContextProvider>
    </div>
  )
}

export default App
