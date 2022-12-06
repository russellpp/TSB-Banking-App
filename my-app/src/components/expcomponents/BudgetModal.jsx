import React from "react";
import { useState } from "react";

function BudgetModal({walletList, setWalletList, setIsBudgetOpen, currentUser, accounts, setAccounts}) {
    


    let [budgetValue, setBudgetValue] = useState();
    let [budgetAccount, setBudgetAccount] = useState();
    

    function CloseBudgetModal(){
        setIsBudgetOpen(false)
    }

    function getValue(budget){
        setBudgetValue(budget.target.value);
        budgetValue = budget.target.value;
    }

    function getAccount(budgetAcct){
        setBudgetAccount(budgetAcct.target.value);
        budgetAccount = budgetAcct.target.value;
    }

    

    function createNewBudget () {
        const wallets = currentUser.wallets
        if (wallets.length > 0){
            wallets.map((wallet) => {
                wallet.isCurrentAccount = false
            })
        }
        const newWallet = {
            name: budgetAccount,
            balance: budgetValue,
            isCurrentAccount: true,
            records: []
            } 
        wallets.push(newWallet)
        const updatedAccount = {
            ...currentUser,
            wallets: wallets
        
            }
        const updatedAccounts = accounts.map((account)=>{
            if(account.email === currentUser.email){
                return updatedAccount 
            }
            else{
                return account
            }
            
        })
        setWalletList(wallets)
        setAccounts(updatedAccounts)
        CloseBudgetModal()
        
    }

    return(
        <div className = "BudgetModal">
            <div className="BudgetModalContent">
                <div className="BudgetModalHeader">
                    <h4 className='BudgetModalTitle'>New Account</h4>
                </div>
                <div className="BudgetModalBody">
                    <label htmlFor="accountName">Budget account name: </label>
                    <input type="text" name='amountName' id='amountName' autoComplete='off' autoFocus onChange={getAccount}/>
            
                   <label htmlFor="amount">Enter amount: </label>
                   <input type="number" name='amount' id='amount' autoComplete='off' autoFocus onChange={getValue}/>
                </div>
                <div className="BudgetModalFooter">
                    <button className="NewBudgetAccountButton" onClick={createNewBudget}>Add Account</button>
                    <button className="BudgetCancelButton" onClick={CloseBudgetModal}>Cancel</button>
                </div>
            </div>  
        </div>
    )
    


}

export default BudgetModal



