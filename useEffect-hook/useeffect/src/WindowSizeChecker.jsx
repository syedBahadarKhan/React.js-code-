import { useEffect, useState } from "react";


function WindowSizecheck() {
     const [width, setWidth] = useState(window.innerWidth)
     
     useEffect( () =>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        } 

        window.addEventListener("resize", handleResize)

        return () =>{
            window.removeEventListener("resize", handleResize)
            console.log("the event is unsubscribed")
        }

     }, [])
     return(
        <div>
            <h2>Window width {width}</h2>
        </div>
     )
}


export default WindowSizecheck