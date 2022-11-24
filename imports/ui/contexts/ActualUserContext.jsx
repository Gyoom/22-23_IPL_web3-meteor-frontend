import React from "react";
import { useState } from 'react';

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [actualUser, setActualUser] = useState(null)

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