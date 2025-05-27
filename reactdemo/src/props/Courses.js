import React from 'react'

export default function Courses(props) {
    return (
        <ul>
            <h1>Courses</h1>
            {
                props.courses.map(c => <li>{c.title} - {c.fee}</li>)
            }
        </ul>
    )
}
