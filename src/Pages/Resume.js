import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from "../utils/api"
import "../styles/Resume.css"

function Resume() {
    const { resumeId } = useParams()
    const [resume, setResume] = useState();
    const [isLoading, setIsLoading] = useState(true);

    console.log(resumeId)
    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await API.getUserResumeByResumeId(resumeId)
                setResume(response)
                setIsLoading(false)
            } catch (error) {
                console.log(error.message, "something is wrong")
            }

        }
        fetchResume()
    }, []);
    console.log(resume)
    if (isLoading) return "wait"
    return (
        <div className="resume">
            <h3 className='name-title'>{`${resume?.firstName} ${resume?.lastName}`}</h3>
            <p className="job-title">job-title</p>
            <p className="summary">{resume.summary}Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <h4 className="title">Work Experience</h4>
            {resume.workExperience.map((work, index) => {
                return <div key={work._id}>
                    <div className='companyName-jobTitle'>
                        <h5><span>jobTitle</span><span> Company Name </span></h5>

                    </div>
                </div>
            })}
        </div>
    )
}

export default Resume