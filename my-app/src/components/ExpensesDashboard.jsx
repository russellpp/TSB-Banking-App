import React from "react";
import './ExpensesDashboard.css';
import RecordList from "./expcomponents/RecordList";
import RecordSummary from "./expxcomponents/RecordSummary";
import AccountContainer from './expcomponents/AccountContainer' 
import imgAdd from './assets/add-icon.svg';



function ExpensesDashboard() {
    return(
        <div className="BudgetAppContainer">
            <AccountContainer />
            <div className="SummaryContainer">
                <div className="Records">
                    <button className="AddItemButton">
                        <img src={imgAdd}/>
                        New Item</button>
                    <RecordList/>
                    <RecordSummary/>
                </div>
            </div>
        </div>
    )
}






export default ExpensesDashboard;