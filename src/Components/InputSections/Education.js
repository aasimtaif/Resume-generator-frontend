import React from 'react'
import { Stack, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

function Education({ inputValues, setInputValues }) {
    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputValues.educationList];
        list[index][name] = value;
        setInputValues({ ...inputValues, educationList: list });
    };

    const handleEducationremove = (index) => {
        const list = [...inputValues.educationList];
        list.splice(index, 1);
        setInputValues({ ...inputValues, educationList: list });

    };

    const handleEducationAdd = () => {
        setInputValues({
            ...inputValues, educationList: [...inputValues.educationList, {
                instituteName: '',
                degree: '',
                field: ''
            }]
        });
    };


    return (
        <div className="form-field">

            {inputValues.educationList.map((edu, index) => (
                <Stack spacing={3} key={index}>

                    <TextField label="Institute Name" size="small"
                        name="instituteName"
                        type="text"
                        sx={{ mt: 3 }}
                        value={edu.instituteName}
                        onChange={(e) => handleEducationChange(e, index)}
                    />

                    <TextField label="Degree" size="small"
                        name="degree"
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(e, index)}
                    />

                    <TextField label="Major" size="small"
                        name="field"
                        type="text"
                        value={edu.field}
                        onChange={(e) => handleEducationChange(e, index)}
                    />
                    {inputValues.educationList.length !== 1 && (
                        <Button sx={{ mb: 3 }} size="small"
                            type="button"
                            variant="outlined"
                            color="error"
                            startIcon={<RemoveSharpIcon/>}
                            onClick={() => handleEducationremove(index)}
                            className="remove-btn"
                        >
                            <span>Remove</span>
                        </Button>
                    )}


                </Stack>
            ))
            }
            <Button sx={{ m: 3 }} size="small"
                type="button"
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleEducationAdd}
            >
                <span>Add another</span>
            </Button>
        </div >
    )
}

export default Education