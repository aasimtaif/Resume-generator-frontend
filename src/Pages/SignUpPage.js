import React,{useEffect} from 'react'
import { SignUp } from '../Components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  console.log(user)

  useEffect(() => {
    if (user) {
      navigate("/dashboard")
    }
  }, [user]);
  return (
    <div><SignUp /></div>
  )
}

export default SignUpPage