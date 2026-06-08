import { useState } from "react"
function Student () {

    const [student, setStudent] = useState({
        name:"Bahadar",
        age:23,
        city:"Peshawar"
    })

    function changeCity () {
        setStudent({...student, city:"Islamabad"})
    }
    return (

        <div>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>City: {student.city}</p>
           <button onClick = {changeCity}>Change City</button>
        </div>
    )
}

export default Student