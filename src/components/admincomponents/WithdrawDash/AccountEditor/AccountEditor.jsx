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
  searchTerm,
  setSearchTerm,
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
          setWithdrawValue={setWithdrawValue}
          setSelectedWithdrawAccount={setSelectedWithdrawAccount}
        />
      )}
      <form className="AccountEditForm" ref={formRef}>
        <span>Account Name</span>
        <span>{selectedWithdrawAccount?.name || ""}</span>

        <span>Account Number</span>
        <span>{selectedWithdrawAccount?.accountNumber || ""}</span>

        <span>Current Balance</span>
        <span>₱{" "}{parseFloat(selectedWithdrawAccount?.balance || "")
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>

        <label htmlFor="accountNumber">Withdraw amount: </label>
        <input
          type="Number"
          name="accountNumber"
          min={0}
          id="accountName"
          autoComplete="off"
          autoFocus
          onChange={handleNumber}
        />
        <span></span>
        <span></span>

        <button onClick={handleWithdraw}> Confirm Withdraw Details</button>
      </form>
    </div>
  );
}

export default AccountEditor;
