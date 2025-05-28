import React from 'react'

export default function Interest() {
    let interest = 0;
    function calculateInterest() {
        let amount = document.getElementById("txtAmount").value
        interest = amount * 12 / 100
        alert(interest)
    }

    return (
        <>
            <h1>Interest Calculation</h1>
            Amount  : <input type="number" id="txtAmount" />
            <p></p>
            <button onClick={calculateInterest}>Calculate</button>
            <h2>{interest}</h2>
        </>
    )
}
