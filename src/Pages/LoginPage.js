import React,{useEffect} from 'react'
import { Login } from '../Components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion'

function LoginPage() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      navigate("/dashboard")
    }
  }, [user]);
  return (
    <motion.div
    initial={{width:0,opacity:0}}
    animate={{width:"100%",opacity:1}}
    exit={{opacity:0, x:window.innerWidth,transition:{duration:0.2}}}
    ><Login /></motion.div>
  )
}

export default LoginPage