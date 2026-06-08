import { use, useState } from "react"
function Userdetail(){
    const [user, setUser] = useState("Guest")
    const [age, setAge] = useState(20)

    return(
        <div>
            
            
            <p>User: {user}</p>
            <button onClick={() => setUser("Bahadar")}>change User</button>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>

        </div>
    )
}

export default Userdetail