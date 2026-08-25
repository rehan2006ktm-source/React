import { useState } from 'react'
import { Login } from './components/login.jsx'
import { Profile } from './components/Profile.jsx'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Rehan Bhai </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
