import { useState } from "react"
//State drilling is the process of passing data from a parent component to a child component, and then to a grandchild component, and so on, until the data reaches the component that needs it. This can lead to a lot of unnecessary prop drilling, where you have to pass props through multiple levels of components just to get the data to where it needs to go.
// function Parent () {
//   const username = "Bahadar Ali"
//   return <Child name ={username}/>
// }


// function Child ({name}) {
//   return <GrandChild name = {name}/>
// }

// function GrandChild ({name}) {
//   return <div>Hello, {name}!</div>
// }



//state lifting
// function Parent(){
//   const [text, setText] =useState("")
//   return(
//     <div>
//     <Child onchange ={setText}/>
//       <p>Typed: {text}</p>
//       </div>
//   )
// }


// function Child ({onchange}){
//     return <input type="text" onChange = {(e) => onchange(e.target.value)} />
// }



//Props Shadding
function Parent(){
  const [count, setCount] = useState(0)

  return(
    <div>
        <ChildA setCount={setCount}/>
        <ChildB  count ={count}/>
        
    </div>
  )
}

function ChildA() {
    const handleClick = () =>{
      setCount(prevcount => prevcount + 1)
    };
    return(
      <button onClick={handleClick}>increment</button>
    )
}


function ChildB({count}) {
  return(
    <p>Count: {count}</p>
  )
}


function App() {
 

  return (
     <>
     <Parent/>
    </>
  )
}

export default App



