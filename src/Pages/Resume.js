import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from "../utils/api"
import "../styles/Resume.css"
import { motion } from 'framer-motion'
import { BasicInfo, WorkExperience, Projects, Education, Summary, Skills, } from '../ResumePDF';
import { View, StyleSheet, Document, Page, } from '@react-pdf/renderer';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        width: "95%",
    },
    left: {
        width: "35vw",
        marginTop: "3%",
        borderLeft: "0.11vw solid #d9e3e5",
        alignItems: "left",
    },
});

function Resume() {
    const { resumeId } = useParams()
    const [resume, setResume] = useState();

    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user]);



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

            <Document
                author={resume.firstName}
                keywords="awesome, resume, start wars"
                subject={`The resume of ${resume.firstName}${resume.lastName}`}
                title="Resume"
            >
                <Page size="A4" >
                    <BasicInfo basicInfo={resume} />
                    <View style={styles.container}>
                        <View style={styles.right}>
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