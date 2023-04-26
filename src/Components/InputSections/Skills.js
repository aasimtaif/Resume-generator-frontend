import React from 'react'

function Skills({ inputValues, setInputValues }) {
    const handleInputValues = (event,index) => {
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

    return (
        <div>{inputValues.skills.map((skill, index) => {
            return <div key={index}>
                skill:<input type="text" name="skillName" onChange={(e) => { handleInputValues(e,index) }} />
                <br />
                rate:<input type="number" name="rating" onChange={(e) => { handleInputValues(e,index) }} />/10
                {inputValues.skills.length !== 1 && (
                    <button
                        type="button"
                        onClick={() => handleRemoveSkill(index)}
                    >
                        <span>Remove</span>
                    </button>
                )}
            </div>
        })
        }
            <button
                type="button"
                onClick={handleAddSkill} >Add another</button>

        </div>
    )
}



export default Skills