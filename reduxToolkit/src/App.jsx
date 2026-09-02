import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todo from './components/Todo.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Learn about Redux Toolkit</h1>
     <AddTodo />
     <Todo />
    </>
  )
}
import Todos from './components/Todo'

export default App
