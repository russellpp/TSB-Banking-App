import React from "react";
import { useState } from "react";

function BudgetModal({setIsBudgetOpen}) {

    let [budgetValue, setBudgetValue] = useState();

    function CloseBudgetModal(){
        setIsBudgetOpen(false)
    }

    function getValue(budget){
        setBudgetValue(budget.target.value);
        budgetValue = budget.target.value;
    }

    return(
        <div className = "BudgetModal">
            <div className="BudgetModalContent">
                <div className="BudgetModalHeader">
                    <h4 className='BudgetModalTitle'>New Account</h4>
                </div>
                <div className="BudgetModalBody">
                    <label htmlFor="accountName">Budget account name: </label>
                    <input type="text" name='amountName' id='amountName' autoComplete='off' autoFocus onChange={getValue}/>
            
                   <label htmlFor="amount">Enter amount: </label>
                   <input type="number" name='amount' id='amount' autoComplete='off' autoFocus onChange={getValue}/>
                </div>
                <div className="BudgetModalFooter">
                    <button className="NewBudgetAccountButton" >Add Account</button>
                    <button className="BudgetCancelButton" onClick={CloseBudgetModal}>Cancel</button>
                </div>
            </div>  
        </div>
    )
    


}

export default BudgetModal



