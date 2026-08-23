import {useState} from 'react'
import {InputBox} from './components/index.js'
import  useCurrencyInfo from './hooks/useCurrencyInfo.js'
function App() {
   const[amount,setAmount]=useState();
   const [from ,setFrom]=useState("usd");
   const [to,setTo]=useState("inr");
   const[convertedAmount,setConvertedAmount]=useState(0);

   const currencyInfo=useCurrencyInfo(from);
   const options=Object.keys(currencyInfo)

    const currencyInfoto=useCurrencyInfo(to);
   const optionsto=Object.keys(currencyInfoto)
//kl hoga ab nhi 
  const swap=()=>{
      setFrom(to);
      setTo(from);
  }

  const convert=()=>{
      setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                 <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                        // Add your submit logic here
                    }}
                > 
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount)=>setAmount(amount)}
                            currencyOptions={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            
                            // Add props for From InputBox here
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            onClick={swap}
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            // Add your click handler here
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            amountDisable
                            selectCurrency={to}
                            currencyOptions={optionsto}
                            onAmountChange={(amount)=>setConvertedAmount(amount)}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            // Add props for To InputBox here
                        />
                    </div>
                    <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toLowerCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
