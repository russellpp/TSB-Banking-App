import React from "react";
import { useState } from "react";
import imgAdd from '../assets/add-icon.svg';
import BudgetModal from "./BudgetModal";

function AccountContainer() {
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

    function OpenBudgetModal(){
        setIsBudgetOpen(true);
        console.log('isBudgetOpen is open')
    }

    return(
        <div className="AccountContainer">
            <button className="AddAccountButton" onClick={OpenBudgetModal}>
                    <img src={imgAdd}/>
                 Account
            </button>
            {isBudgetOpen && <BudgetModal setIsBudgetOpen={setIsBudgetOpen} />}
            <ul className="AccountList">
                
                <li className="AccountRecord">
                    <span>Week 1</span>
                    <span>1 500.00</span>
                </li>
                <li className="AccountRecord">
                    <span>Week 2</span>
                    <span>-1 270.00</span>
                </li>
                <li className="AccountRecord">
                    <span>Week 3</span>
                    <span>810.00</span>
                </li>
                <li className="AccountRecord">
                    <span>Week 4</span>
                    <span>-3 060.00</span>
                </li>
                <li className="AccountRecord">
                    <span>Week 5</span>
                    <span>-570.00</span>
                </li>
                <li className="AccountRecord">
                    <span>Week 6</span>
                    <span>5 400.00</span>
                </li>
                <li className="AccountRecord">
                    <span>Week 7</span>
                    <span>-300.00</span>
                </li>
            </ul>
            
        </div>
    )
}

export default AccountContainer