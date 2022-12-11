import React from "react";
import "./AccountEditor.css";
import { useState } from "react";
import { useEffect } from "react";
import ConfirmDepositModal from "./CofirmDepositModal/ConfirmDepositModal";

function AccountEditor({
  accounts,
  setAccounts,
  selectedDepositAccount,
  setSelectedDepositAccount,
  formRef,
}) {
  const [depositValue, setDepositValue] = useState()
  const [isConfirmDepositOpen, setIsConfirmDepositOpen] = useState(false);

  const handleNumber = (e) => {
    e.preventDefault();
    setDepositValue(e.target.value);
  };


  const handleDeposit = (e) => {
    e.preventDefault();
    setIsConfirmDepositOpen(true);
  };

  return (
    <div className="AccountEdit">
      {isConfirmDepositOpen && (
        <ConfirmDepositModal
          accounts={accounts}
          setAccounts={setAccounts}
          selectedDepositAccount={selectedDepositAccount}
          formRef={formRef}
          isConfirmDepositOpen={isConfirmDepositOpen}
          setIsConfirmDepositOpen={setIsConfirmDepositOpen}
          depositValue={depositValue}
          setSelectedDepositAccount={setSelectedDepositAccount}
        />
      )}
      <span>Deposit</span>
      <form className="AccountEditForm" ref={formRef}>
        <span>Account Name</span>
        <span>{selectedDepositAccount?.name || ""}</span>

        <span>Account Number</span>
        <span>{selectedDepositAccount?.accountNumber || ""}</span>

        <span>Current Balance</span>
        <span>{selectedDepositAccount?.balance || ""}</span>

        <label htmlFor="accountNumber">Deposit amount: </label>
        <input
          type="Number"
          name="accountNumber"
          id="accountName"
          autoComplete="off"
          autoFocus
          onChange={handleNumber}
        />

        <button onClick={handleDeposit}> Confirm Edit Details</button>
      </form>
    </div>
  );
}

export default AccountEditor;
