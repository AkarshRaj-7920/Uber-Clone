import React, { createContext, useState } from 'react'

export const ContextData = createContext()

const Context = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })

    return (
        <>
            <ContextData.Provider value={{user, setUser}} >
                {children}
            </ContextData.Provider>
        </>
    )
}

export default Context