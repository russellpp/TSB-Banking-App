import React from "react";
import "./ConfirmDepositModal.css";

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
  const currentTime = thisTime.getDate() + "-" + month[thisTime.getMonth()];
  return currentTime;
};

function ConfirmDepositModal({
  accounts,
  setAccounts,
  selectedDepositAccount,
  formRef,
  isConfirmDepositOpen,
  setIsConfirmDepositOpen,
  depositValue,
  setSelectedDepositAccount,
}) {
  const newBalance = Number(selectedDepositAccount.balance) + Number(depositValue);

  const handleDeposit = () => {
    const transactionDetails = {
      type: "Deposit",
      date: timeNow(),
      amount: `${depositValue}`,
      balance: `${newBalance}`,
      id: Date.now(),
    };

    const updatedAccounts = accounts.map((account) => {
      if (selectedDepositAccount.email === account.email) {
        const newTransactions = account.transactions
        newTransactions.push(transactionDetails)
        const updatedDetails = {
          ...account,
          balance: newBalance,
          transactions: newTransactions,
        };

        return updatedDetails;
      } else {
        return account;
      }
    });
    setAccounts(updatedAccounts)
    handleCloseModal()
  };

  const handleCloseModal = () => {
    setIsConfirmDepositOpen(false);
    formRef.current.reset();
  };

  return (
    <div className="Modal">
      <div className="Container">
        <div className="ModalBody">
          <span>Confirm Deposit Details</span>
          <span>{`Account Name: ${selectedDepositAccount.name}`}</span>
          <span>{`Account Number: ${selectedDepositAccount.accountNumber}`}</span>
          <span>{`Deposit Amount: ${depositValue}`}</span>
          <span>{`Balance: ${selectedDepositAccount.balance} to ${newBalance}`}</span>

          <button className="ConfirmButton" onClick={handleDeposit}>
            Confirm Deposit
          </button>
          <button className="CancelButton" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDepositModal;
