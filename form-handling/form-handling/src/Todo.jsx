import { useState } from "react";


function TodoApp () {

       const[newTodos, setNewTodos] = useState("")
       const[todos, setTodos] = useState([])

       const handleSubmit = (e) =>{
        e.preventDefault()
        if(newTodos){
            setTodos([...todos, {text:newTodos, completed:false}])
            setNewTodos("")
        }
       }

       const handleDelete = (index) =>{
        const newTodo = [...todos]
        newTodo[index].completed =  !newTodo[index].completed
        setTodos(newTodo)
       }
    return(
     
        <form  onSubmit ={handleSubmit}>
         <input 
         type="text"
         placeholder="enter todo"
         value={newTodos}
         onChange={(e) => setNewTodos(e.target.value)}
         />
         
         <br />
         <br />
         <button type="submit">Add Todo</button>
         <ul>
            {todos.map((todo, index) =>(
               <li key={index}>
                <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>{todo.text}</span>
                <button onClick={() => handleDelete(index)}>Delete</button>
               </li>
            ))}
         </ul>
        </form>
       


    )
}

export default TodoApp