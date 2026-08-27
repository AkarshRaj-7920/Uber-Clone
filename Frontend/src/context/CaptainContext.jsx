import React, { createContext, useState } from 'react'

export const CaptainContextData = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setcaptain] = useState(null);
    const updateCaptain = (captainData) =>{
        setcaptain(captainData);
    };

    const value = {
        captain,
        setcaptain,
        updateCaptain
    };

    return (
        <>
        <CaptainContextData.Provider value={value}>
            {children}
        </CaptainContextData.Provider>
        </>
    )
}

export default CaptainContext