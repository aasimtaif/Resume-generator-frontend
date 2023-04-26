import React from 'react'

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
        <div>{inputValues?.workExperience.map((job, index) => {
            return (
                <div key={index}>
                    <label>Job title
                        <input name="jobTitle" type="text" onChange={(e) => handleWorkexperienceInput(e, index)} />
                    </label>
                    <label>Company name
                        <input name="companyName" type="text" onChange={(e) => handleWorkexperienceInput(e, index)} />
                    </label>
                    <label>
                        from
                        <input type='date' name="fromDate" onChange={(e) => handleWorkexperienceInput(e, index)} />
                    </label>
                    <label>
                        Till
                        <input type='date' name="tillDate" onChange={(e) => handleWorkexperienceInput(e, index)} />
                    </label>
                    <br />
                    <label>
                        Task description:</label>
                    <textarea name="description" rows="3" cols="25" placeholder='write about your work in that company' onChange={(e) => handleWorkexperienceInput(e, index)} ></textarea>
                    {inputValues.workExperience.length !== 1 && (
                        <button
                            type="button"
                            onClick={() => handleWorkExperienceRemove(index)}
                        >
                            <span>Remove</span>
                        </button>
                    )}

                </div>
            )
        })}
            <button
                type="button"
                onClick={handleWorkExperienceAdd} >Add another</button>
        </div>
    )
}

export default WorkExperience