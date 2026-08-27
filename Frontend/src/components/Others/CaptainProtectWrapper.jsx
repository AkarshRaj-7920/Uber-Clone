import React, { useContext, useEffect, useState } from 'react'
import { CaptainContextData } from '../../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setcaptain } = useContext(CaptainContextData)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/captains/login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setcaptain(response.data.captain)
            setisLoading(false)
        }
    }).catch(err => {
        console.log(err);
        localStorage.removeItem('token')
        navigate('/captains/login')
    })

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper