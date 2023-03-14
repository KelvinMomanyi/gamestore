import React,{useState} from "react" 



export default function useCart(initialValue){
  const[itsCart, setCart]=useState(initialValue)


    return [itsCart, setCart]
}
