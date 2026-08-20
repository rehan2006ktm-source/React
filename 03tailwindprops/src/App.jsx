import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'
const obj={
  key:"value"
}
const arr=[1,2,3];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='bg-amber-500 p-3.5 rounded-2xl text-amber-100'>Tailwind test </h1>
    <Card  name="rehan" str="more"/>
    <br/>
     <Card  name="sonam" str="moriya"/>
    
    </>
  )
}

export default App
