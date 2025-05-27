import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Courses from './props/Courses';
import CourseList from './props/CourseList';

let courseList = [
    {title : 'Python', fee : 10000},
    {title : 'Generative AI', fee : 15000},
    {title : "AWS", fee : 7500}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CourseList courses = {courseList} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
