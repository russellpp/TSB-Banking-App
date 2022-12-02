import React from 'react'
import expenses from '../assets/expenses.png'
import ExpensesModal from './ExpensesModal'
import { useState } from 'react';




function Expenses() {

    
    const [isExpensesOpen, setIsExpensesOpen] = useState();

      //opening modal function
      function OpenExpensesModal(){
        setIsExpensesOpen(true);
      }

  return (
    <div>
        <div className="expensesBox" onClick ={OpenExpensesModal} >
            <img src ={expenses} alt="expenses logo" className='expensesLogo'></img>
            <h2>Expenses</h2>
        </div>
        {isExpensesOpen && <ExpensesModal setIsExpensesOpen={setIsExpensesOpen}/>}
        
    </div>
  )
}

export default Expenses
