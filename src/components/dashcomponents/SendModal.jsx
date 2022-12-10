import React from "react";
import { useState } from "react";

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
const currentTime =
  /* thisTime.getFullYear() */ thisTime.getDate() +
  "-" +
  month[thisTime.getMonth()];

function SendModal({
  setIsOpen,
  currentUser,
  accounts,
  setAccounts,
  setCurrentUser,
}) {
  const [sendDetails, setSendDetails] = useState({
    amount: "",
    receiver: "",
    sender: currentUser?.accountNumber || [],
  });

  //handle send

  const handleGetReceiver = (e) => {
    setSendDetails((prevState) => {
      return { ...prevState, receiver: e.target.value };
    });
  };

  const handleGetAmount = (e) => {
    setSendDetails((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const handleSend = () => {

    const newBalance = Number(currentUser.balance) - Number(sendDetails.amount);
    console.log(newBalance)

    const receiverUser = accounts.find(
      (account) => account.accountNumber === sendDetails.receiver);

    if (receiverUser !== null || receiverUser !== undefined) {

      //update currentUser end

      const transactionDetails = {
        type: "Send",
        date: currentTime,
        amount: sendDetails.amount,
        balance: `${newBalance}`,
        receiver: sendDetails.receiver,
        id: Date.now(),
      };

      const newTransactions =
        currentUser.transactions.unshift(transactionDetails);
        currentUser.balance = `${newBalance}`
      setCurrentUser((prevState) => {
        return {
          ...prevState,
          transactions: newTransactions,
        };
      });

      

      //update receiver end

      
      
      const newRBalance = Number(receiverUser.balance) + Number(sendDetails.amount);
      receiverUser.balance = `${newRBalance}`;
      
      const receiverTransaction = {
          type: "Receive",
          date: currentTime,
          amount: sendDetails.amount,
          balance: `${newRBalance}`,
          id: Date.now(),
        };

     receiverUser.transactions.unshift(receiverTransaction);
        //update accounts

      const updatedAccounts = accounts.map((account) => {
        if (account.email === currentUser.email) {
          return currentUser;
        } else if (account.accountNumber === sendDetails.receiver) {
          return receiverUser;
        } else {
          return account;
        }
      });

      setAccounts(updatedAccounts);
      console.log(accounts);
    } else {
      alert("Receiving account does not exist");
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="sendModal">
      <div className="sendModalContent">
        <div className="sendModalHeader">
          <h4 className="sendModalTitle">Send</h4>
        </div>
        <div className="sendModalBody">
          <label htmlFor="amount">Enter amount: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            autoComplete="off"
            autoFocus
            onChange={handleGetAmount}
          />
        </div>
        <div className="sendModalBody">
          <label htmlFor="account">Enter account number: </label>
          <input
            type="text"
            name="account"
            id="amount"
            autoComplete="off"
            autoFocus
            onChange={handleGetReceiver}
          />
        </div>
        <div className="sendModalFooter">
          <button className="sendDepositButton" onClick={handleSend}>
            Send
          </button>
          <button className="sendCancelButton" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendModal;
