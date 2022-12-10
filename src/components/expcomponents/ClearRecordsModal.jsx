import React from "react";
import { useState } from "react";

function ClearRecordsModal({
  recordList,
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
  isClearModalOpen,
  setIsClearModalOpen,
  setCurrentWallet,
}) {
  const handleClear = () => {
    currentWallet.records = [];

    const updatedWallets = currentUser.wallets.map((wallet) => {
      if (wallet.isCurrentAccount) {
        return currentWallet;
      } else {
        return wallet;
      }
    });

    const updatedAccount = {
      ...currentUser,
      wallets: updatedWallets,
    };

    const updatedAccounts = accounts.map((account) => {
      if (account.email === currentUser.email) {
        return updatedAccount;
      } else {
        return account;
      }
    });

    setAccounts(updatedAccounts);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsClearModalOpen(false);
  };

  return (
    <div className="DeleteModal">
      <div className="BudgetModalContent">
        <div className="DeleteModalFooter">
          <span>
            Are you sure you want to delete all recorded items in this account?
          </span>

          <button className="NewBudgetAccountButton" onClick={handleClear}>
            Clear
          </button>
          <button className="BudgetCancelButton" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClearRecordsModal;
