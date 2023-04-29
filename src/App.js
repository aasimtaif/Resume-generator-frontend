import './App.css';
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoginPage, FormPage, SignUpPage, DashBoard, Resume } from './Pages';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './redux/Userlogin';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Button } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
function App() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const location = useLocation()
  // console.log(user)

  return (
    <div className="App">
      <AnimatePresence mode="wait" />
      <Routes key={location.pathname} location={location}>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/signUp' element={<SignUpPage />} />
        <Route exact path='/form' element={<FormPage />} />
        <Route exact path='/dashboard' element={<DashBoard />} />
        <Route exact path='/resume/:resumeId' element={<Resume />} />
      </Routes>
      {user &&
        <div   className="logout-button">

          <Button
            variant="contained"
            color="success"
            startIcon={<LogoutRoundedIcon />}
          
            onClick={() => dispatch(logOut())}>LogOut</Button>
        </div>
      }

    </div>
  );
}

export default App;
