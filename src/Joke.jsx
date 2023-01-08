import React from "react";

export default function Joke(prop){
    return(
        <div>
            {prop.setup && <h3>Setup: {prop.setup}</h3>}
            <p>Punchline: {prop.punchline}</p>
            <hr />
        </div>

    )
}  