import React, { useState } from 'react'

function AddSkill({ skills, addSkill }) {
    function addNewSkill() {
        let skill = document.getElementById("txtSkill").value
        if (skills.includes(skill))
            alert("Duplicate Skill!")
        else
            addSkill(skill)
    }
    return (
        <>
            <h3>Add Skill</h3>
            Skill <input type="text" id="txtSkill" />
            <p></p>
            <button onClick={addNewSkill}>Add</button>
        </>
    )
}

function ListSkills({ skills, deleteSkill }) {

    function deleteCurrentSkill(idxToDelete) {
         deleteSkill(idxToDelete)
    }
    return (
        <>
            <h3>List of Skills</h3>
            <ul>
                {
                    skills.map((s, idx) =>
                        <li key={idx}>{s} &nbsp;
                           <button onClick={ () => deleteCurrentSkill(idx)}>Del</button>
                        </li>)
                }
            </ul>
        </>
    )
}

export default function TechSkills() {
    let [skills, setSkills] = useState(["Java", "Python"])

    function addSkill(newSkill) {
        setSkills([...skills, newSkill])
    }

    function deleteSkill(idxToDelete) {
        setSkills( skills.filter( (s, idx) => idx !== idxToDelete))
    }
    return (
        <>
            <h1>TechSkills</h1>
            <AddSkill skills={skills} addSkill={addSkill} />
            <p></p>
            {skills.length > 0 ? <ListSkills skills={skills} deleteSkill={deleteSkill} />
               : <h5>No Skills!</h5> }
        </>
    )
}
