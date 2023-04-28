import React from 'react'
import { TextField } from '@mui/material';
function BasicInfo({ inputValues, setInputValues }) {
    return (


        <>
            <TextField label="First Name" size="small" type="text" name='firstName' value={inputValues.firstName} onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

            <TextField label="Job Title" size="small" type="text" name='jobTitle' value={inputValues.jobTitle} onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

            <TextField label="Last Name" size="small" name='lastName' value={inputValues.lastName} type="text" onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

            <TextField label="Email" size="small" name='email' value={inputValues.email} type="email" onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

            <TextField label="Phone Number" size="small" name='phoneNo' value={inputValues.phoneNo} type="number" onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

            <TextField label="Github" size="small" name='github' value={inputValues.github} type="url" onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

            <TextField label="LinkedIn" size="small" name='linkedIn' value={inputValues.linkedIn} type="url" onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })} />

        </>

    )
}

export default BasicInfo