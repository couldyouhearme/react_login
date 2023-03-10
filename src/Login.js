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
            <div>
                <label>
                    Username: <input value={name} onChange={handleNameChange} type='text' name='username' />
                </label>
            </div>
            <div>
                <label>
                    Password: <input value={password} onChange={handlePasswordChange} type='password' name='password' />
                </label>
            </div>
            <div>
                <input type='submit' onClick={onSubmit} disabled={submitDisabled} id='login-button' />
            </div>
        </>
    )
}

export default Login