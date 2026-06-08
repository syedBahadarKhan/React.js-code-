import { useState,  useEffect } from "react";

function First (){
    const [count, setCount] = useState(0)

    useEffect( () =>{
        document.title = `Count: ${count}`
        console.log("component is rerendered")
    }, [count])
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count +1)}>Count</button>
        </div>
    )

}


export default First