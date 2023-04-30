import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import API from "../utils/api"
import { Link } from 'react-router-dom'
import "../styles/Dashboard.css"
import { motion } from 'framer-motion'
import DeleteIcon from '@mui/icons-material/Delete';
import { LineWave } from 'react-loader-spinner'

function DashBoard() {
    const [resumes, setResumes] = useState();
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user]);

    const handleDeleteResume = async (e, resumeId) => {
        e.preventDefault();
        try {
            const response = await API.delteResumeByResumeId(resumeId)
        } catch (error) {
            console.log(error.message, "something is wrong")
        }
         window.location.reload(false);

    }

    useEffect(() => {
        const deleteResume = async () => {
            try {
                const response = await API.getUserResume(user._id)
                setResumes(response)
            } catch (error) {
                console.log(error.message, "something is wrong")
            }
        }
        deleteResume()
    }, []);
    if (!resumes) {
        return (
            <div className="loader">
                <LineWave
                    height="200"
                    width="1000"
                    color="#4fa94d"
                    ariaLabel="line-wave"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                />
            </div>
        )
    }
    return (
        <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="resume-display">
                {resumes?.map((resume, index) => {
                    return (
                        <div className='individual-resume'>
                            <Link className='individual-resume-link' key={index} to={`/resume/${resume._id}`}>
                                <p >Resume number {index + 1}</p>
                            </Link>
                            <DeleteIcon
                                onClick={(e) => { handleDeleteResume(e, resume._id) }}
                                fontSize="small" sx={{ color: "red", width: 18, mt: 2, ml: 2 }}
                            />
                        </div>

                    )
                })}

            </div>
            <Link className="create-resume-button" to="/form">Create resume</Link>
        </motion.div>
    )
}

export default DashBoard