import React from "react";

function RecordItemDeleteModal({
  recordList,
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedItem,
}) {
  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDelete = () => {
    console.log(selectedItem)
    currentWallet.records.splice(selectedItem, 1);
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
    setRecordList(currentWallet.records);
  };

  const record = currentWallet.records.find((index) => index == selectedItem)
  

  return (
    <div className="ItemModal">
      <div className="BudgetModalContent">
        <div className="DeleteModalFooter">
          <span>Are you sure you want to delete this item?</span>
          <span>{}</span>
          <button className="NewBudgetAccountButton" onClick={handleDelete}>
            Delete
          </button>
          <button className="BudgetCancelButton" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecordItemDeleteModal;
