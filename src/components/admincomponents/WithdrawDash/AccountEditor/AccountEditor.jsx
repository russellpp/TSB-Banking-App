import React from "react";
import "./AccountEditor.css";
import { useState } from "react";
import { useEffect } from "react";
import ConfirmWithdrawModal from "./CofirmWithdrawModal/ConfirmWithdrawModal";

function AccountEditor({
  accounts,
  setAccounts,
  selectedWithdrawAccount,
  setSelectedWithdrawAccount,
  formRef,
}) {
  const [withdrawValue, setWithdrawValue] = useState()
  const [isConfirmWithdrawOpen, setIsConfirmWithdrawOpen] = useState(false);

  const handleNumber = (e) => {
    e.preventDefault();
    setWithdrawValue(e.target.value);
  };


  const handleWithdraw = (e) => {
    e.preventDefault();
    setIsConfirmWithdrawOpen(true);
  };

  return (
    <div className="AccountEdit">
      {isConfirmWithdrawOpen && (
        <ConfirmWithdrawModal
          accounts={accounts}
          setAccounts={setAccounts}
          selectedWithdrawAccount={selectedWithdrawAccount}
          formRef={formRef}
          isConfirmWithdrawOpen={isConfirmWithdrawOpen}
          setIsConfirmWithdrawOpen={setIsConfirmWithdrawOpen}
          withdrawValue={withdrawValue}
          setSelectedWithdrawAccount={setSelectedWithdrawAccount}
        />
      )}
      <span>Withdraw</span>
      <form className="AccountEditForm" ref={formRef}>
        <span>Account Name</span>
        <span>{selectedWithdrawAccount?.name || ""}</span>

        <span>Account Number</span>
        <span>{selectedWithdrawAccount?.accountNumber || ""}</span>

        <span>Current Balance</span>
        <span>{selectedWithdrawAccount?.balance || ""}</span>

        <label htmlFor="accountNumber">Withdraw amount: </label>
        <input
          type="Number"
          name="accountNumber"
          id="accountName"
          autoComplete="off"
          autoFocus
          onChange={handleNumber}
        />

        <button onClick={handleWithdraw}> Confirm Edit Details</button>
      </form>
    </div>
  );
}

export default AccountEditor;
