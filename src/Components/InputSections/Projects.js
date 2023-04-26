import React from 'react'
import { Stack, TextField, Button, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

function Projects({ inputValues, setInputValues }) {

    const handleProjectinput = (event, index) => {
        const { name, value } = event.target;
        const list = [...inputValues.projects];
        list[index][name] = value;
        setInputValues({ ...inputValues, projects: list });
    }

    const handleProjectRemove = (index) => {
        const list = [...inputValues.projects];
        list.splice(index, 1);
        setInputValues({ ...inputValues, projects: list });
    }

    console.log(inputValues.projects)

    return (
        <div>{inputValues.projects.map((project, index) => {
            return <Stack spacing={2} key={index}>

                <TextField sx={{ mt: 5 }} label="Project Name" size="small" value={project.projectName} name="projectName" type="text" onChange={(event) => handleProjectinput(event, index)} />
                <TextField label="Link" size="small" value={project.projectLink} name="projectLink" type="text" onChange={(event) => handleProjectinput(event, index)} />

                <TextField label="Technology" size="small" value={project.techUsed} name="techUsed" type="text"
                    onChange={(event) => handleProjectinput(event, index)}
                />

                <TextField label="Details" multiline
                    minRows={2} maxRows={4} size="small" placeholder='Project details' value={project.projectDetails} name="projectDetails" onChange={(event) => handleProjectinput(event, index)} />
                {inputValues.projects.length !== 1 && (
                    <Button
                        sx={{ mt: 5 }} size="small"
                        color="error"
                        variant="outlined"
                        startIcon={<RemoveSharpIcon />}
                        type="button"
                        onClick={() => handleProjectRemove(index)}
                    >
                        <span>Remove</span>
                    </Button>
                )}
            </Stack>
        })}
            <br />
            <Button
                startIcon={<AddIcon />}
                size="small"
                onClick={() => {
                    setInputValues({
                        ...inputValues, projects: [...inputValues.projects,
                        { projectName: "", techUsed: "", details: "", projectLink: "" },
                        ]
                    })
                }}>Add another</Button>
        </div>
    )
}

export default Projects