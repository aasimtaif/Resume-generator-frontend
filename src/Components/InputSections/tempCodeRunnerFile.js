const handleProjectRemove = (index) => {
        const list = [...inputValues.projects];
        list.splice(index, 1);
        setInputValues({ ...inputValues, projects: list });
    }