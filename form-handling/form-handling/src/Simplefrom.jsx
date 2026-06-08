import { useState } from "react"

function SimpleForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Name: ", name)
        console.log("Email: ", email)
    }

    return (
        <form onSubmit={handleSubmit}>
         <h2>React form Example</h2>

         <label>Name: </label>
         <input
               type="text"
               value= {name}
               onChange={(e) => setName(e.target.value)}
         />
            <br></br>

         <label>Email: </label>
         <input
                type="text"
                value= {email}
                onChange={(e) => setEmail(e.target.value)}
         />
         <br></br>
            <button type="submit">Submit</button>
        </form>
      )       
       }


export default SimpleForm