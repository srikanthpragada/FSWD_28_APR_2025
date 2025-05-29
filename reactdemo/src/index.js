import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Persons from './props/Persons';
import Interest from './forms/Interest';
import Interest2 from './forms/Interest2';
import Counter from './state/Counter';
import PersonCC from './props/PersonCC';
import Skills from './state/Skills';

let courseList = [
    {title : 'Python', fee : 10000},
    {title : 'Generative AI', fee : 15000},
    {title : "AWS", fee : 7500}
]


let people  = [
    {id : 1, name : 'Joe Stanger', weight : 80 , height : 190},
    {id : 2, name : 'Anders Helsberg', weight : 85 , height : 175},
    {id : 3, name : 'Larry Page', weight : 105 , height : 160}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Skills />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
