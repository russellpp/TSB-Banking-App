import React from "react";
import { useState } from "react";
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

function WithdrawModal({
  setIsOpen,
  currentUser,
  setCurrentUser,
  accounts,
  setAccounts,
}) {
  //close Modal function
  function CloseModal() {
    setIsOpen(false);
  }

  //setting useState for data capture
  let [withdrawValue, setValue] = useState();

  let balance = currentUser.balance;

  function getValue(withdraw) {
    setValue(withdraw.target.value);
  }

  function WithdrawMoney() {
    const result = Number(balance) - Number(withdrawValue);

    if (result < 0) {
      alert("Insufficient funds!");
    } else if (!withdrawValue) {
      alert("Enter a valid amount");
    } else if (withdrawValue < 0) {
      alert("Withdraw value should be greater than 0");
    } else {
      const transDetails = {
        type: "Withdraw",
        date: timeNow(),
        amount: `-${withdrawValue}`,
        balance: result,
        id: Date.now(),
      };

      setAccounts(prevState => prevState.map((account) => {
        if (account.email === currentUser.email) {
          const updatedDetails = {
            ...account,
            balance: result,
            transactions: [...account.transactions, transDetails],
          };
          return updatedDetails;
        } else {
          return account;
        }
      }));

      CloseModal();
    }
  }

  return (
    <div className="withdrawModal">
      <div className="withdrawModalContent">
        <div className="withdrawModalHeader">
          <h4 className="withdrawModalTitle">Withdraw</h4>
        </div>
        <div className="withdrawModalBody">
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
        <div className="withdrawModalFooter">
          <button className="withdrawDepositButton" onClick={WithdrawMoney}>
            Withdraw
          </button>
          <button className="withdrawCancelButton" onClick={CloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawModal;
