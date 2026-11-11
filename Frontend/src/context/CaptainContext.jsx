import { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const CaptainContextData = createContext(null);

const CaptainContext = ({ children }) => {
    const [captain, setcaptain] = useState(null);

    useEffect(() => {
        const fetchCaptain = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setcaptain(response.data.captain ?? response.data);
            } catch (err) {
                console.log(err)
            }
        }

        fetchCaptain();
    }, []);

    const value = {
        captain,
        setcaptain,
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