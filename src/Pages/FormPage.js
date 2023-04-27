import React, { useState, useEffect } from 'react'
import { InputHadler } from '../Components';
import { FormGroup, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { Stack } from '@mui/material';

import API from "../utils/api"
import "../styles/Form.css"

function FormPage() {

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  console.log(user?._id)

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
    firstName: '', lastName: '', github: '', linkedIn: '', email: '', phoneNo: '',
    educationList: [{
      instituteName: '',
      degree: '',
      field: ''
    },], skills: [{ skillName: "", rating: "" }], workExperience: [{ jobTitle: "", companyName: "", fromDate: "", tillDate: "", description: "" }], projects: [{ projectName: "", techUsed: "", details: "", projectLink: "" },], achievements: [], summary: ""
  });
  const [activeSection, setActiveSection] = useState(sections[0]);
  console.log(activeSection)


  const handleSubmit = async () => {
    console.log("posting")
    try {
      // setInputValues({ ...inputValues, user })
      console.log({ inputValues, user })
      const response = await API.postResume({ ...inputValues, user })
      console.log("posted successfully", response.status)
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
    }

  }



  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user]);

  return (
    <>
      <div className='input-sections'>

        {sections?.map((section, index) => {
          return (
            <p key={index} onClick={() => setActiveSection(section)}>{section.name}</p>
          )
        })}
      </div>
      <Link to="/dashboard" className="move-to-dashboard">Dashboard→</Link>
      <p className="current-section">{activeSection.name}</p>

      <FormGroup className="resume-form">
        <Stack spacing={3}>

          <InputHadler inputValues={inputValues} setInputValues={setInputValues} activeSection={activeSection} />
          <Button sx={{ mt: 3 }} size="small" endIcon={<SendIcon />} variant="contained" type="submit" onClick={handleSubmit}>submit</Button>
        </Stack>
      </FormGroup>

    </>
  )
}

export default FormPage