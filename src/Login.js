import React, { useState, useEffect } from 'react'

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = () => {
        const credentials = {
            name,
            password,
        }
        console.log('submit credentials:', credentials)
        setName('')
        setPassword('')
    }

    useEffect(() => {
        if (!name || !password) { // validate empty string
            setSubmitDisabled(true)
        } else {
            setSubmitDisabled(false)
        }
    }, [name, password])

    return (
        <>
            <label>
                Username: <input value={name} onChange={handleNameChange} type='text' name='username' />
            </label>
            <br />
            <label>
                Password: <input value={password} onChange={handlePasswordChange} type='password' name='password' />
            </label>
            <br />
            <input type='submit' onClick={onSubmit} disabled={submitDisabled} id='login-button' />
        </>
    )
}

export default Login