import React from 'react'
import {  TextField, Button, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

function Skills({ inputValues, setInputValues }) {
    const handleInputValues = (event, index) => {
        const { name, value } = event.target
        const list = [...inputValues.skills];
        list[index][name] = value;
        setInputValues({ ...inputValues, skills: list });
    }
    const handleAddSkill = () => {
        setInputValues({
            ...inputValues, skills: [...inputValues.skills,
            { skillName: "", rating: "" },
            ]
        })
    }
    const handleRemoveSkill = (index) => {
        const list = [...inputValues.skills];
        list.splice(index, 1);
        setInputValues({ ...inputValues, skills: list });
    }
// console.log(typeof(inputValues.skills[0].rating))
    return (
        <div>{inputValues.skills.map((skill, index) => {
            return <div key={index}>
                <TextField label="Skill" size="small"
                    value={skill.skillName}

                    type="text" name="skillName" onChange={(e) => { handleInputValues(e, index) }} />
                <Rating
                    name="rating"
                    value={parseFloat(skill.rating)}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        const { name} = event.target
                        const list = [...inputValues.skills];
                        list[index][name] = newValue;
                        setInputValues({ ...inputValues, skills: list });
                    }}
                />
                {/* <TextField label="rate" size="small"
                    type="number" name="rating" onChange={(e) => { handleInputValues(e, index) }} /> */}
                {inputValues.skills.length !== 1 && (
                    <Button sx={{ m: 3 }} size="small"
                        type="button"
                        color="error"
                        variant="outlined"
                        startIcon={<RemoveSharpIcon />}
                        onClick={() => handleRemoveSkill(index)}
                    >
                        <span>Remove</span>
                    </Button>
                )}
            </div>
        })
        }
            <Button sx={{ m: 3 }} size="small"
                type="button"
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAddSkill} >Add another</Button>

        </div>
    )
}



export default Skills