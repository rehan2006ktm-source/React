import { useState,useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {ThemeProvider} from './context/themes.js'
import Card from './component/Card.jsx'
import ThemeBtn from './component/ThemeBtn.jsx'
function App() {
  
  const[themeMode,setThemeMode]=useState("light");

  const lightTheme=function(){
     setThemeMode("light")
  }
   const darkTheme=function(){
     setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
   <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
     </ThemeProvider>

  )
}

export default App
