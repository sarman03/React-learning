import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convert,setConvert]=useState(0)

const currencyInfo=useCurrencyInfo(from)

const options= Object.keys(currencyInfo)
const swap= ()=>{
  setFrom(to)
  setTo(from)
  setConvert(amount)
  setAmount(convert)
}

const converte = () =>{
  
setConvert(amount* currencyInfo[to])
}

return (
  <div
      className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
      style={{
          backgroundImage: `url('${BackgroundImage}')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          
                      />
                  </div>
                  <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
                      Convert 
                  </button>
              </form>
          </div>
      </div>
  </div>
)
export default App
