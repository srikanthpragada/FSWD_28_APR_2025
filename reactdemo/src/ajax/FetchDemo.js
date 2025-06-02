import React, { useState } from 'react'

export default function FetchDemo() {
    const [now, setNow] = useState('')

    function getIndiaTime() {
        // AJAX call
        fetch("")
            .then(response => {
                //console.log(response);
                if(response.status === 400){
                    throw new Error("Invalid Timezone")
                }
                return response.json()
            })
            .then(data => setNow(data.dateTime))
            .catch((err) => {
                setNow(''); // clear output 
                alert(err)
            })
    }


    return (
        <>
            <h1>Fetch Demo</h1>
            <h2>{now}</h2>
            <button onClick={getIndiaTime}>India Time</button>

        </>
    )
}
