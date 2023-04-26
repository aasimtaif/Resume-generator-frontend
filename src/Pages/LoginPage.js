import React,{useEffect} from 'react'
import { Login } from '../Components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      navigate("/dashboard")
    }
  }, [user]);
  return (
    <div><Login /></div>
  )
}

export default LoginPage