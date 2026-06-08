import { useState } from "react";

function Multinputform() {
        const [formData, setFormData] = useState({
                                                    email: "",
                                                    name: "",
                                                    age: ""
                                                })

   const handleSubmit = (e) =>{
          e.preventDefault()
          console.log("Form data: ", formData)
   }

   const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData((prev) =>({
            ...prev,
            [name] : value
          }))
   }

    return(
        <form onSubmit={handleSubmit}>
                <h2>React form Example</h2>
                <label >Email</label>
                <input type="text" value={formData.email} onChange={handleChange}  name="email" />
                <br />
                <label>Name</label>
                <input type="text" value={formData.name} onChange={handleChange} name="name"/>
                <br />
                <label>Age</label>
                <input type="text" value={formData.age}  onChange={handleChange} name="age" />
                <br />
                <button type="submit">Submit</button>
        </form>
    )
}

export default Multinputform