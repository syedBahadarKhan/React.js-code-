import { useState } from "react"
import Expenseitem from "./expense-item"

function expenseList({expenses, onDelete}) {
    if(expenses.length === 0)
        return <h3 className="no-expense">No expenses added yet.</h3>
    return (
        <div className="expense-list">
          {expenses.map((item) =>(
             <Expenseitem key={item.id} item={item} onDelete={onDelete}/>
          ))}
        </div>
    )
}   

export default expenseList