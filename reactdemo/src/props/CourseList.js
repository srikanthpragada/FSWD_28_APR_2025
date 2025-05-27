import React from 'react'

function Course(props) {
    let colorName = props.course.fee > 10000 ? 'red' : 'black'
    return (
        <>
            <h2>{props.course.title}</h2>
            <h3 style={{color: colorName}}>{props.course.fee}</h3>
            <hr />
        </>
    )
}
export default function CourseList(props) {
    return (
        <ul>
            <h1 style={{color:'red'}}>Courses</h1>
            {
                props.courses.map(c => <Course course={c} />)
            }
        </ul>
    )
}
