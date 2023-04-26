import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { storeUser, storeToken } from '../redux/Userlogin';
import { useNavigate } from 'react-router-dom';
import API from "../utils/api"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState();

  const handleInput = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }
  console.log(input)


  const handleSignUp = async () => {
    try {
      const res = await API.login(input)
      const { user, token } = res
      // console.log(token,"line 25")
      dispatch(storeUser(user))
      dispatch(storeToken(token))
      navigate('/form')
      console.log(res.data)
    } catch (err) {
      console.log(err.message, "error")
    }
  }

  return (
    <div>
      <label>
        Email:
        <input type="email" name="email" onChange={(event) => { handleInput(event) }} />
      </label>
      <label>
        Password:
        <input type="passowrd" name="password" onChange={(event) => { handleInput(event) }} />
      </label>
      <button onClick={handleSignUp}>Login</button>
      <p>Don't have the account <NavLink to="/signup"> Sign Up </NavLink>  </p>


    </div>
  )
}

export default Login