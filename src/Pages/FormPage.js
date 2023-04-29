import React, { useState, useEffect } from 'react'
import { InputHadler } from '../Components';
import { FormGroup, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { Stack, Alert } from '@mui/material';
import { motion } from 'framer-motion'

import API from "../utils/api"
import "../styles/Form.css"

function FormPage() {

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  const [submitResponse, setSubmitResponse] = useState();
  // console.log(user?._id)

  const sections = [
    {
      name: "Basic Info", id: "basicInfo"
    },
    {
      name: "Education", id: "education"
    },
    {
      name: "Skills", id: "skills"
    },
    {
      name: "Work Experience", id: "workExperience"
    },
    {
      name: "Projects", id: "projects"
    },
    // {
    //   name: "Achievements", id: "achievements"
    // },
    // {
    //   name: "Summary", id: "summary"
    // },
  ]

  const [inputValues, setInputValues] = useState({
    firstName: '', lastName: '', github: '', linkedIn: '', email: '', phoneNo: '', jobTitle: '',
    educationList: [{
      instituteName: '',
      degree: '',
      field: ''
    },], skills: [{ skillName: "", rating: '' }], workExperience: [{ jobTitle: "", companyName: "", fromDate: "", tillDate: "", description: "" }], projects: [{ projectName: "", techUsed: "", details: "", projectLink: "" },], achievements: [], summary: ""
  });
  const [activeSection, setActiveSection] = useState(sections[0]);
  console.log(activeSection)


  const handleSubmit = async () => {
    console.log("posting")
    setSubmitResponse({ message: 'Uploading Please wait', response: 'info' })

    try {
      // setInputValues({ ...inputValues, user })
      console.log({ inputValues, user })
      const response = await API.postResume({ ...inputValues, user })
      setSubmitResponse({ message: 'Successfully Uploaded' })
      console.log("posted successfully", response.status)
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    } catch (error) {
      console.log(error.message)
      setSubmitResponse({ message: 'Something went Wrong', response: 'error' })
    }

  }

  setTimeout(() => {
    setSubmitResponse()
  }, 3000)

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >

      <div className='input-sections'>

        {sections?.map((section, index) => {
          return (
            <p key={index} onClick={() => setActiveSection(section)}>{section.name}</p>
          )
        })}
      </div>
      <Link to="/dashboard" className="move-to-dashboard">Dashboard→</Link>
      <p className="current-section">{activeSection.name}</p>
      {submitResponse !== undefined &&
        <Alert
          variant="filled"
          sx={{ mb: 3, width: "auto" }}
          severity={submitResponse?.response}>
          {submitResponse?.message}
        </Alert>}
      <FormGroup className="resume-form">
        <Stack spacing={3}>
              <InputHadler inputValues={inputValues} setInputValues={setInputValues} activeSection={activeSection} />
          <Button sx={{ mt: 3 }} size="small" endIcon={<SendIcon />} variant="contained" type="submit" onClick={handleSubmit}>submit</Button>
        </Stack>
      </FormGroup>

    </motion.div>
  )
}

export default FormPage