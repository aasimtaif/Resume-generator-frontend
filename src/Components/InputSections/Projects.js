import React from 'react'

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
            return <div key={index}>
                Project Name:<input name="projectName" type="text" onChange={(event) => handleProjectinput(event, index)} />
                Link:<input name="projectLink" type="text" onChange={(event) => handleProjectinput(event, index)} />

                Technology:<input name="techUsed" type="text"
onChange={(event) => handleProjectinput(event, index)}
                />

                Details:<textarea name="projectDetails" onChange={(event) => handleProjectinput(event, index)}></textarea>
                {inputValues.projects.length !== 1 && (
                    <button
                        type="button"
                        onClick={() => handleProjectRemove(index)}
                    >
                        <span>Remove</span>
                    </button>
                )}
            </div>
        })}
            <br />
            <button onClick={() => {
                setInputValues({
                    ...inputValues, projects: [...inputValues.projects,
                    { projectName: "", techUsed: "", details: "", projectLink: "" },
                    ]
                })
            }}>Add another Project</button>
        </div>
    )
}

export default Projects