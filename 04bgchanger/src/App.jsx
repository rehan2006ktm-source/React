import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")
  function add(red){
    setColor(red)
  }
  return (
   <div className='w-full h-screen duration-200 ' 
   style={{backgroundColor:color}} >

        <div className="flex flex-row flex-wrap justify-center  w-full items-end pb-5 h-full ">

             <div className= 'm-2 items-center bg-amber-50 flex flex-row justify-center w-15 h-12 rounded-2xl'>
              <button className='px-2 py-1 rounded-xl' 
               onClick={()=>setColor("red")}
              style={{backgroundColor:"red"}}>Red</button>
             </div>

              <div className= 'm-2 items-center bg-amber-50 flex flex-row justify-center w-15 h-12 rounded-2xl'>
              <button className='px-2 py-1 rounded-xl' 
               onClick={()=>setColor("green")}
              style={{backgroundColor:"Green"}}>Green</button>
             </div>

             <div className= 'm-2 items-center bg-amber-50 flex flex-row justify-center w-15 h-12 rounded-2xl'>
              <button className='px-2 py-1 rounded-xl' 
               onClick={()=>setColor("Blue")}
              style={{backgroundColor:"Blue"}}>Blue</button>
             </div>

              <div className= 'm-2 items-center bg-amber-50 flex flex-row justify-center w-15 h-12 rounded-2xl'>
              <button className='px-2 py-1 rounded-xl' 
               onClick={()=>setColor("pink")}
              style={{backgroundColor:"pink"}}>Pink</button>
             </div>

             <div className= 'm-2 items-center bg-amber-50 flex flex-row justify-center w-15 h-12 rounded-2xl'>
              
              <button className='px-2 py-1 rounded-xl' 
               onClick={()=>setColor("orange")}
              style={{backgroundColor:"orange"}}>Orange</button>
             </div>
          
        </div>
   </div>
  )
}

export default App
