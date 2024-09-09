"use client"

const { createContext, useRef } = require("react");

export const MojoContext = createContext({});



const headerActiveToggle = (headerRef) => {
    headerRef = useRef(null)
}

const MojoContextFunc = ({children}) => {
  return (
    <MojoContext.Provider value={{headerRef, headerActiveToggle}}>
        {children}
    </MojoContext.Provider>
  )
}

export default MojoContextFunc;