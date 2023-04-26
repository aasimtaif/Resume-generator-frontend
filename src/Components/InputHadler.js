import React from 'react'
import { BasicInfo, Education, WorkExperience, Projects,Skills,Summary } from './InputSections';
import "../styles/InputSection.css"

function InputHadler({ activeSection, inputValues, setInputValues }) {

    // console.log(inputValues.educationList)

    // 
    console.log(inputValues)

    switch (activeSection.id) {
        case 'basicInfo': {
            return (
                <BasicInfo inputValues={inputValues} setInputValues={setInputValues} />
            )
        }
        case 'education': {
            return (
                <Education inputValues={inputValues} setInputValues={setInputValues} />
            )
        }
        case 'workExperience': {
            return (
                <WorkExperience inputValues={inputValues} setInputValues={setInputValues} />
            )
        }
        case 'projects': {
            return (
                <Projects inputValues={inputValues} setInputValues={setInputValues} />
            )
        }
        case 'skills': {
            return (
                <Skills inputValues={inputValues} setInputValues={setInputValues} />
            )
        }
        case 'summary': {
            return (
                <Summary inputValues={inputValues} setInputValues={setInputValues} />
            )
        }
        default: {
            return
        }
    }

}

export default InputHadler
