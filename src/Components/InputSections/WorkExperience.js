import React from 'react'
import { Stack, TextField, Button, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';


function WorkExperience({ inputValues, setInputValues }) {


    const handleWorkexperienceInput = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputValues.workExperience];
        list[index][name] = value;
        setInputValues({ ...inputValues, workExperience: list });
    };

    console.log(inputValues.workExperience)
    const handleWorkExperienceAdd = () => {
        setInputValues({
            ...inputValues, workExperience: [...inputValues.workExperience,
            { jobTitle: "", companyName: "", fromDate: "", tillDate: "", description: "" },
            ]
        })
    }

    const handleWorkExperienceRemove = (index) => {
        const list = [...inputValues.workExperience];
        list.splice(index, 1);
        setInputValues({ ...inputValues, workExperience: list });
    }


    console.log(inputValues)
    return (
        <div>
            {inputValues?.workExperience.map((job, index) => {
                return (
                    <Stack spacing={2} key={index}>

                        <TextField value={job.jobTitle} sx={{ mt: 5 }} label="Job Title" size="small" name="jobTitle" type="text" onChange={(e) => handleWorkexperienceInput(e, index)} />

                        <TextField value={job.companyName} label="company Name" size="small" name="companyName" type="text" onChange={(e) => handleWorkexperienceInput(e, index)} />

                        <TextField value={job.fromDate} InputLabelProps={{
                            shrink: true,
                        }} label="From" size="small" type='date' name="fromDate" onChange={(e) => handleWorkexperienceInput(e, index)} />

                        <TextField value={job.tillDate} InputLabelProps={{
                            shrink: true,
                        }} label="Till" type='date' name="tillDate" onChange={(e) => handleWorkexperienceInput(e, index)} />
                        <TextField value={job.description} name="description" label="description" multiline
                            maxRows={4} placeholder='write about your work in that company' onChange={(e) => handleWorkexperienceInput(e, index)} />
                        {inputValues.workExperience.length !== 1 && (
                            <Button
                                sx={{ mt: 5 }} size="small"
                                color="error"
                                variant="outlined"
                                startIcon={<RemoveSharpIcon />}
                                type="button"
                                onClick={() => handleWorkExperienceRemove(index)}
                            >
                                <span>Remove</span>
                            </Button>
                        )}

                    </Stack>
                )
            })}
            <Button
                type="button"
                sx={{ mt: 3 }}
                startIcon={<AddIcon />}
                onClick={handleWorkExperienceAdd} >Add another</Button>
        </div>
    )
}

export default WorkExperience