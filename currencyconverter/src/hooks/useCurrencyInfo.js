import{useEfect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
  useEfect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]))
  },[currency])
  console.log(data)
  return data 
}

export default useCurrencyInfo