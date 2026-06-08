import React from 'react'

export default function Props({fullname="Guest", age=0, city="Unknown", hobbies}) {
    return (
        <div>
            <h2>Hello {fullname}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <ul>
                {hobbies?.map((hobby, index)=>(
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}
