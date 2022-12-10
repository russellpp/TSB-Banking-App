import React from "react";

function AccountDeleteModal({
  recordList,
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  setCurrentWallet,
}) {
  const handleDelete = () => {
    const updatedWallets = currentUser.wallets;
    const index = updatedWallets.findIndex((wallet) => wallet.isCurrentAccount);

    updatedWallets.splice(index, 1);
    updatedWallets[0].isCurrentAccount = true;

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

    setCurrentWallet(currentWallet ? currentUser.wallets[0] : []);
    setAccounts(updatedAccounts);
    setRecordList(currentWallet.records)
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="DeleteModal">
      <div className="BudgetModalContent">
        <div className="DeleteModalFooter">
          <span>Are you sure you want to delete this account?</span>

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

export default AccountDeleteModal;
