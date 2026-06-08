import ExpenseList from "./ExpenseList"
import ExpenseForm from "./ExpenseForm"
import { useState, useEffect } from "react"

function App() {
      const [expense, setExpense] = useState(() =>{
        const saved = localStorage.getItem("expenses")
        return saved ? JSON.parse(saved) : [];
      })

      useEffect( () =>{
        localStorage.setItem("expenses", JSON.stringify(expense))
      }, [expense])
      const addExpense = (newexpense) => {
         setExpense([...expense, newexpense])
      }  

      const deleteExpense = (id) => {
         setExpense(expense.filter((item) => item.id !== id))
      }


     const totalAmount = expense.reduce((sum, item) => sum + item.amount, 0)   

  return (
    <>
    <div className="app-container">
      <h1>Expense Tracker 💰</h1>
      <ExpenseForm toAddExpense ={addExpense}/>
      <h3 className="total">Total Expences : ${totalAmount.toFixed(2)}</h3>
      <ExpenseList expenses = {expense} onDelete={deleteExpense} />
    </div>
     
    </>
  )
}

export default App
