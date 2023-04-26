import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { storeUser, storeToken } from '../redux/Userlogin';
import { useNavigate } from 'react-router-dom'
import API from "../utils/api"


function SignUp() {
    const [input, setInput] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleInput = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }
    console.log(input)
    const handleSignUp = async () => {
        try {
            const res = await API.signup( input)
            console.log(res)
            const { user, token } = res
            dispatch(storeUser(user))
            dispatch(storeToken(token))
            navigate("/form")
        } catch (err) {
            console.log(err.response.data.message)
        }
    }
    return (
        <div>
            <label> Name:
                <input type="text" name="userName" onChange={(event) => { handleInput(event) }} />
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={(event) => { handleInput(event) }} />
            </label>
            <label>
                Password:
                <input type="passowrd" name="password" onChange={(event) => { handleInput(event) }} />
            </label>
            <button onClick={handleSignUp}>Sign up</button>
        </div>
    )
}

export default SignUp