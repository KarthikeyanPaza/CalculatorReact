import React, { createContext, useState } from 'react'

export const CalcContext = createContext() 
const CalcProvider = ({children }) => {
    const [calc , setCalc] = useState({
    })
const ProviderValue = {
calc , setCalc 
}

  return (
  <CalcContext.Provider value={ProviderValue}>
{children}
  </CalcContext.Provider>
  )
}

export default CalcProvider