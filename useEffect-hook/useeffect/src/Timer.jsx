import { useState, useEffect } from "react";

function Timer(){
    const [second, setSecond] = useState(0)

    // useEffect( ()=>{
    //      const interval = setInterval( () =>{
    //         setSecond((prev) => prev+ 1)
    //      },1000)

    //      return () =>{
    //         clearInterval(interval)
    //      }
    // }, [])

    return(
        <div>
            <h2>Timer {second}</h2>
        
        </div>
    )

}


export default Timer