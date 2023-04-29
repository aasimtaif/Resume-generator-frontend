import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from "../utils/api"
import "../styles/Resume.css"
import { motion } from 'framer-motion'
import { BasicInfo, WorkExperience, Projects, Education, Summary, Skills, } from '../ResumePDF';
import { View, StyleSheet, Document, Page, } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        width: "auto",
    },
    left:{
        width:"fit-content",
        marginTop:"3%",
        borderLeft: "1px solid grey",

    }

});





function Resume() {
    const { resumeId } = useParams()
    const [resume, setResume] = useState();

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const response = await API.getUserResumeByResumeId(resumeId)
                setResume(response)
            } catch (error) {
                console.log(error.message, "something is wrong")
            }

        }
        fetchResume()
    }, [resumeId]);
    if (!resume) return "wait"
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="resume">
            {/* <h3 className='name-title'>{`${resume?.firstName} ${resume?.lastName}`}</h3>
            <p className="job-title">job-title</p>
            <p className="summary">{resume.summary}Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <h3 className="title">Work Experience</h3>
            {resume.workExperience.map((work, index) => {
                return <div key={work._id}>
                    <div className='companyName-jobTitle'>
                        <h5><span>{work.jobTitle}</span><span>{work.companyName}</span></h5>
                        <p className="job-discription">{work.description}</p>
                    </div>
                </div>
            })}
            <h3>Skills</h3>
            {resume.skills.map((skill, index) => {
                return (
                    <div key = {index} className="skills">
                        <p key={index}>{skill.skillName} 
                        <Rating size="small" name="read-only" value={skill.rating} readOnly />
                        </p>
                    </div>
                )
            })} */}
            <Document
                author={resume.firstName}
                keywords="awesome, resume, start wars"
                subject={`The resume of ${resume.firstName}${resume.lastName}`}
                title="Resume"
            >
                <Page size="A4" >
                    <BasicInfo basicInfo={resume} />
                    <View style={styles.container}>
                        <View>
                            <WorkExperience workExperience={resume.workExperience} />
                            <Projects projects={resume.projects} />
                            <Education educationList={resume.educationList} />
                        </View>
                        <View style={styles.left}>
                            <Summary resume={resume} />
                            <Skills skills={resume.skills} />
                        </View>
                    </View>
                </Page>
            </Document>


        </motion.div>
    )
}

export default Resume