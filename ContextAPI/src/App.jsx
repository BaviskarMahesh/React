import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
 
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Hello</h1>
    <Login />
    <Profile />
    </UserContextProvider>
 
  )
}

export default App
