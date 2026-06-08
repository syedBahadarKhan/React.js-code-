import { useState, useEffect, useRef } from 'react'
import './App.css'
function ExpenseForm({toAddExpense}) {

   const [title, setTitle] = useState("")
   const [amount, setAmount] = useState("")
   const titleRef = useRef()


    const handleSubmit = (e) =>{
          e.preventDefault()

            if(!title || !amount) return alert("Please fill all the fields")  
              
            const newExpense = {
              id: Date.now(),
              title,
              amount: parseFloat(amount)
            }
            toAddExpense(newExpense)
            setTitle("")
            setAmount("")
            titleRef.current.focus()
            }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
       type="text"
       placeholder="Description"
       value={title}
       onChange={(e) => setTitle(e.target.value)} 
       ref={titleRef}
       />
      <input
       type="number"
       placeholder="Amount"
       value={amount}
       onChange={(e) => setAmount(e.target.value)}
       />
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm