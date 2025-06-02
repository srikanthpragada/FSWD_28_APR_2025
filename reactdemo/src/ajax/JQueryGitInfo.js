import React, { useState } from 'react'
import $ from 'jquery'

export default function JQueryGitInfo() {
    const [details, setDetails] = useState(null)

    function getDetails() {
        $.ajax('https://api.github.com/users/gvanrossum',
            {
                method: 'get',
                success: (data) => setDetails(data), // update state with response
                error:
                    () => {
                        setDetails(null); // clear output on error 
                    }
            }
        )
    }


    return (
        <>
            <h1>AJAX with jQuery</h1>
            {
                details ? <div>
                    <h2>{details.name}</h2>
                    <h3>{details.company}</h3>
                    <h3>{details.location}</h3>
                </div>
                    : <h3>Sorry! Couldn't get details!</h3>
            }

            <p></p>
            <button onClick={getDetails}>Get Rossum Details</button>


        </>
    )
}
