import { use, useRef } from "react";

function UncontrolledForm() {
        const nameRef = useRef()
        const emailRef = useRef()

        const handleSubmit = (e) =>{
            e.preventDefault()
            console.log("Name", nameRef.current.value)
            console.log("Email", emailRef.current.value)
        }
    return (
        <form action="" onSubmit={handleSubmit}>

            <h2>Uncontrolled Form Example</h2>
            <input type="text" placeholder="name" ref={nameRef} />
            <br />

            <input type="text" placeholder="email" ref={emailRef} />
            <br />

            <button type="submit">Submit</button>
        </form>
    )
}


export default UncontrolledForm