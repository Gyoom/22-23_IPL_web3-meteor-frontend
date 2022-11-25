// Dependancies :
import React, { createContext, useState } from "react";

const Context = createContext();

const ProviderWrapper = (props) => {

    const [actualUser, setActualUser] = useState("Aucun")

    const pickActualUser = (newActualUser) => {
        setActualUser(newActualUser)    
    }
    
    const exposedValue = {
        actualUser,
        pickActualUser,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}