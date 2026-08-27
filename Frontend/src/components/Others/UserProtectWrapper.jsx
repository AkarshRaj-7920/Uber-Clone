import React, { useContext, useEffect, useState } from 'react'
import { ContextData } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(ContextData)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/users/login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setUser(response.data.user)
            setisLoading(false)
        }
    }).catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/users/login')
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

export default UserProtectWrapper