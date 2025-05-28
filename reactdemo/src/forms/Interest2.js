import React, { useState } from 'react'

export default function Interest2() {
    let  [interest, setInterest ] = useState(0)

    function calculateInterest() {
        let amount = document.getElementById("txtAmount").value
        setInterest(amount * 12 / 100)
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
