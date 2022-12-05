import React from 'react'
import expenses from '../assets/expenses.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function Expenses() {
    const navigate = useNavigate()
    const [isExpensesOpen, setIsExpensesOpen] = useState();

      //opening expenses dashboard
      function ExpensesDashboard(){
        navigate("/Expenses")
      }

  return (
    <div>
        <div className="expensesBox" onClick ={ExpensesDashboard} >
            <img src ={expenses} alt="expenses logo" className='expensesLogo'></img>
            <h2>Expenses</h2>
        </div>
    </div>
  )
}

export default Expenses
