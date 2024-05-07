import { useState } from "react";

export const useCounter = ( initialValue = 1 ) => {
    
  const [counter, setCount] = useState(initialValue)
    
  const increment = ( value = 1) => {
    setCount( counter + value)
  }
  const decrement = ( value = 1) => {
    if (counter <= 0)return
    else setCount( counter - value)
  }
  const reset = () => {
    setCount( 0 )
  }

  return {
    counter,
    increment,
    decrement, 
    reset
  }
};