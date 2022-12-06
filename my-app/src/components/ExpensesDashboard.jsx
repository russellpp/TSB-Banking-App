import React from "react";
import "./ExpensesDashboard.css";
import RecordList from "./expcomponents/RecordList";
import AccountContainer from "./expcomponents/AccountContainer";
import RecordSummary from "./expcomponents/RecordSummary";

import {useState, useEffect} from "react";
import AddItemButton from "./expcomponents/AddItemButton";

function ExpensesDashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const localAccounts = localStorage.getItem("accounts");
    if (localAccounts) {
      setAccounts(JSON.parse(localAccounts));
    }
  }, []);

  useEffect(() => {
    if (accounts.length > 0) {
      const loggedInAccount = accounts.find((account) => account.isLoggedIn);
      setCurrentUser(loggedInAccount);
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }
  }, [accounts, currentUser]);

  return (
    <div className="BudgetAppContainer">
      <AccountContainer setCurrentUser={setCurrentUser} currentUser={currentUser} accounts={accounts} setAccounts={setAccounts} />
      <div className="SummaryContainer">
        <div className="Records">
          <AddItemButton />
          <RecordList />
          <RecordSummary />
        </div>
      </div>
    </div>
  );
}

export default ExpensesDashboard;
