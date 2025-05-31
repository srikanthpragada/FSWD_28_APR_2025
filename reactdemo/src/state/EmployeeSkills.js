import React, { useState } from 'react'

function AddSkill({ skills, addSkill }) {
    let [skill, setSkill] = useState({ name: '', rating: 4 })
    let [message, setMessage] = useState('')

    function addNewSkill(e) {
       e.preventDefault() // stop submission and refresh 
       // Check whether skill is duplicate 
       let existingSkill = skills.find( (e) => e.name === skill.name)

       if(existingSkill)
           setMessage("Duplciate Skill!")
       else
       {
           addSkill(skill)
           setMessage("")
       }
    }

    // Two-way data-binding 
    function updateName(e) {
        setSkill ( { ... skill, name : e.target.value})
    }

    // Two-way data-binding 
    function updateRating(e) {
        setSkill ( { ... skill, rating : e.target.value})
    }

    return (
        <>
            <h3>Add Skill</h3>
            <form onSubmit={addNewSkill}>
                Skill <br />
                <input type="text" value={skill.name} onChange={updateName} required />
                &nbsp; <span className="text-danger text-bold">{message}</span>
                <p></p>
                Rating <br />
                <input type="number" min="1" max="5" value={skill.rating} onChange = {updateRating} required />
                <p></p>
                <button>Add</button>
            </form>
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
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Rating</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        skills.map((e, idx) =>
                            <tr key={idx}>
                                <td>{e.name}</td>
                                <td>{e.rating}</td>
                                <td><button onClick={() => deleteCurrentSkill(idx)}>Del</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default function EmployeeSkills() {
    let [skills, setSkills] = useState([{ name: "Java", rating: 4 }, { name: 'Python', rating: 3 }])

    function addSkill(newSkill) {
        setSkills([...skills, newSkill])
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter((s, idx) => idx !== idxToDelete))
    }
    return (
        <>
            <h1>Employee Skills</h1>
            <AddSkill skills={skills} addSkill={addSkill} />
            <p></p>
            {skills.length > 0 ? <ListSkills skills={skills} deleteSkill={deleteSkill} />
                : <h5>No Skills!</h5>}
        </>
    )
}
