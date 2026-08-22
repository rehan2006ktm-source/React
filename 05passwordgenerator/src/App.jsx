import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(0);
  const [charAllowed,setCharAllowed]=useState(0);
  const [password,setPassword]=useState("");

  const passwordRef= useRef(null);


  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed)   str+="!@#$%^&*-_+=[]{}~`";

    for(let i=0;i<length;i++){
      let ind=Math.floor(Math.random()*str.length);
      let char=str.charAt(ind);

      pass+=char;
    }
    setPassword(pass);
  }
    ,[length,numberAllowed,charAllowed])

    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])

    const copyPasswordToClipboard=useCallback(()=>{
      window.navigator.clipboard.writeText(password);
      passwordRef.current?.select()
    },[password])

  return (
    <div>
     <div class="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  <h1 class="text-white text-center my-3">Password generator</h1>

  <div class="flex shadow rounded-lg overflow-hidden mb-4">
    <input
      type="text"
      value={password}
      ref={passwordRef}
      class="outline-none w-full py-1 px-3"
      placeholder="Password"
      readonly
    />
    <button class="outline-none
    bg-blue-700 text-white px-3 py-0.5 shrink-0" 
    onClick={copyPasswordToClipboard}>
      Copy
    </button>
  </div>

  <div class="flex text-sm gap-x-2">
    <div class="flex items-center gap-x-1">
      <input
        type="range"
        min="8"
        max="30"
        value={length}
        class="cursor-pointer"
        onChange={(e)=>{
          setlength(e.target.value)
        }}
      />
      <label>Length:{length}</label>
    </div>

    <div class="flex items-center gap-x-1">
      <input 
      type="checkbox" 
      id="numberInput"
      onChange={()=>{
          setNumberAllowed((numberAllowed)=>
            !numberAllowed
          )
      }}
      />
      <label for="numberInput">Numbers</label>
    </div>

    <div class="flex items-center gap-x-1">
      <input type="checkbox" id="characterInput"
      onClick={()=>{
        setCharAllowed((charAllowed)=>
          !charAllowed
        )
      }}
      />
      <label for="characterInput">Characters</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default App
