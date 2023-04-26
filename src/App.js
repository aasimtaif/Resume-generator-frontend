import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, FormPage, SignUpPage, DashBoard, Resume, PDF } from './Pages';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './redux/Userlogin';

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  console.log(user)

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/signUp' element={<SignUpPage />} />
        <Route exact path='/form' element={<FormPage />} />
        <Route exact path='/dashboard' element={<DashBoard />} />
        <Route exact path='/resume/:resumeId' element={<Resume />} />
      </Routes>
      <br/>
      <button className="logout-button"onClick={() => dispatch(logOut())}>LogOut</button>
      {/* <PDF/> */}
    </div>
  );
}

export default App;
