import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import API from "../utils/api"
import { Link } from 'react-router-dom'

function DashBoard() {
    const { user } = useSelector((state) => state.user)
    const [resumes, setResumes] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user]);
    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await API.getUserResume(user._id)
                setResumes(response)
            } catch (error) {
                console.log(error.message, "something is wrong")
            }
        }
        fetchResume()
    }, []);
    return (
        <div>{resumes?.map((resume,index)=>{
            return(
                <Link key={resume._id} to={`/resume/${resume._id}`}>
                <p >Resume number {index+1}</p>
                </Link>
            )
        })}
        <Link to="/form">Create resume</Link>
        </div>
    )
}

export default DashBoard