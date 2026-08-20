import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
   
   let k=10
   let [name,setcount]=useState(k)

    const add=()=>{
    if(name<20){
      
      // setcount(name+1);
      // setcount(name+1);
      // setcount(name+1);
      // setcount(name+1);
      setcount((prevCounter)=>prevCounter+1);
      setcount((prevCounter)=>prevCounter+1);
      setcount((prevCounter)=>prevCounter+1);
      setcount((prevCounter)=>prevCounter+1);
      // setcount(name++);
      // setcount(name++);
      // setcount(name++);
      // setcount(name++);
    }

    
    }

    const remove=()=>{
    if(name>0){
      name--;
      setcount(name)
    }

    }

  return (  
    <>
    <h1>chai aur react </h1>
    <h2>counter value:{name}</h2>
 
    <button onClick={add}>start {name}</button>
    <br/>
    <button
    onClick={remove}>
    stop {name}</button>
    </>
  )
}

export default App
