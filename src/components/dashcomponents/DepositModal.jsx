import React from "react";
import { useState } from "react";
/* import {useEffect} from 'react'
 */
const timeNow = () => {
  const thisTime = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let hrs = thisTime.getHours();
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  let min = thisTime.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }

  const currentTime =
    thisTime.getDate() +
    "-" +
    month[thisTime.getMonth()] +
    " " +
    hrs +
    ":" +
    min;
  return currentTime;
};

function DepositModal({
  setIsDepositOpen,
  currentUser,
  setCurrentUser,
  accounts,
  setAccounts,
}) {
  //close Modal function
  function CloseDepositModal() {
    setIsDepositOpen(false);
  }

  //setting useState for data capture
  const [depositValue, setValue] = useState();

  function getValue(deposit) {
    setValue(deposit.target.value);
  }

  function DepositMoney() {
    const balance = currentUser.balance;

    const result = Number(balance) + Number(depositValue);

    if (!depositValue) {
      alert("Enter a valid amount");
    } else if (depositValue < 0) {
      alert("Deposit value should be greater than 0");
    } else {
      const transDetails = {
        type: "Deposit",
        date: timeNow(),
        amount: `${depositValue}`,
        balance: result,
        id: Date.now(),
      };

      const updatedAccounts = accounts.map((account) => {
        if (account.email === currentUser.email) {
          const newTransactions = account.transactions;
          newTransactions.push(transDetails);
          const updatedDetails = {
            ...account,
            balance: result,
            transactions: newTransactions,
          };
          return updatedDetails;
        } else {
          return account;
        }
      });
      setAccounts(updatedAccounts);
      CloseDepositModal();
    }
  }

  return (
    <div className="depositModal">
      <div className="depositModalContent">
        <div className="depositModalHeader">
          <h4 className="depositModalTitle">Deposit</h4>
        </div>
        <div className="depositModalBody">
          <div className="currentBalance">
            Current Balance: {currentUser.balance}
          </div>
          <label htmlFor="amount">Enter amount: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            autoComplete="off"
            autoFocus
            onChange={getValue}
          />
        </div>
        <div className="depositModalFooter">
          <button className="depositDepositButton" onClick={DepositMoney}>
            Deposit
          </button>
          <button className="depositCancelButton" onClick={CloseDepositModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DepositModal;
