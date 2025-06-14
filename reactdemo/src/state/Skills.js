import React, { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([])

    function addSkill() {
        let skill = document.getElementById("txtSkill").value
        if (skills.includes(skill))
            alert("Duplicate Skill!")
        else
            setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        if (window.confirm('Do you really want to delete?'))
            setSkills(skills.filter((s, idx) => idx !== idxToDelete))
    }

    return (
        <>
            <h1>Skills</h1>
            Skill <input type="text" id="txtSkill" /> 
            <button onClick={addSkill}>Add</button>
            <p></p>
            <ul>
                {
                    skills.map(
                        (s, idx) =>
                            <li key={idx}>
                                {s} <button onClick={() => deleteSkill(idx)}> Del </button>
                            </li>
                    )
                }
            </ul>
        </>
    )
}
