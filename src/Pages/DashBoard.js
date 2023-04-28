import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import API from "../utils/api"
import { Link } from 'react-router-dom'
import "../styles/Dashboard.css"


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
        <>
            <div className="resume-display">


                {resumes?.map((resume, index) => {
                    return (

                        <Link className='individual-resume' key={index} to={`/resume/${resume._id}`}>
                            <p >Resume number {index + 1}</p>
                        </Link>

                    )
                })}

            </div>
            <Link className="create-resume-button" to="/form">Create resume</Link>
        </>
    )
}

export default DashBoard