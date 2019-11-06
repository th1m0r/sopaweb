import React, { useState, useEffect } from 'react'

import App from './App'
import Login from './login'

const userKey = 'sopaToken'

export default function AuthOrApp() {
    const { user, setUser } = useState({});
    
    useEffect(() => {
        var local = JSON.parse(localStorage.getItem(userKey))
        if (local) {
            setUser(local);
        }
    }, [])

    return (
        user ? <App /> : <Login />
    )
}
