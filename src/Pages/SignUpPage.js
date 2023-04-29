import React,{useEffect} from 'react'
import { SignUp } from '../Components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.2}}}

    ><SignUp /></motion.div>
  )
}

export default SignUpPage