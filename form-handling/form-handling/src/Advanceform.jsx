import { useState } from "react";

function AdvanceForm() {

    const [formdata, setFormadata] = useState({
                                                Gender:"",
                                                Country:"Pakistan",
                                                Agree:false
                                            })

    const handleSubmit = (e) =>{
        event.preventDefault()
        console.log("Form data: ", formdata)
    }    
    
    
   const handleChange = (e) =>{
    const {name, value, type, checked} = e.target
    setFormadata((prev) =>({
        ...prev,
        [name] : type === "checkbox" ? checked : value
    }))
   }  
    
    return(
        <form onSubmit= {handleSubmit}>

            <h1>advance Form</h1>
            <label>
                <input 
                 type="radio"
                 name="Gender" 
                 value="Male"
                 checked = {formdata.Gender === "Male"}
                 onChange={handleChange}
                 />
                MAle
            </label>

             <label>
                <input
                 type="radio" 
                 name="Gender" 
                 value="Female"
                 checked = {formdata.Gender === "Female"}
                 onChange={handleChange}
                 />
                Female
            </label>
            <br />

            <label >
                country
                <select name="Country" id="" value={formdata.Country} onChange={handleChange}>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                </select>
            </label>

            <br />

            <label >
                <input type="checkbox" name="Agree" checked={formdata.Agree} onChange={handleChange} />
                i agree to the terms and conditions
            </label>

            <button type ="submit">Submit</button>
        </form>
    )
}


export default AdvanceForm