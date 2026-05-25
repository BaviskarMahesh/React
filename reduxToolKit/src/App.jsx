import { useState } from 'react'
 
import './App.css'
import Todos from './components/Todos'
import AddToDo from './components/AddTodo'

function App() {
   

  return (
    <>
    <h1>Learn about Redux</h1>
    <AddToDo />
    <Todos />
    </>
  )
}

export default App
