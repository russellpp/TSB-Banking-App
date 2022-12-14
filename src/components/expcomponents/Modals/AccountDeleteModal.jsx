import React from "react";

function AccountDeleteModal({
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  currentWallet,
  setIsDeleteModalOpen,
  setCurrentWallet,
  setIsOptionsModalOpen,
}) {
  const handleDelete = () => {
    const updatedWallets = currentUser.wallets;
    const index = updatedWallets.findIndex((wallet) => wallet.isCurrentAccount);

    if (updatedWallets.length > 1) {
      updatedWallets.splice(index, 1);
      updatedWallets[0].isCurrentAccount = true;
    } else {
      updatedWallets.splice(index, 1);
      setCurrentWallet({});
    }

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

    handleCloseModal();
    setRecordList(currentWallet?.records || []);
    setAccounts(updatedAccounts);
    setIsOptionsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="DeleteModal DeleteWalletModal">
      <div className="BudgetModalContent">
        <div className="DeleteModalExpFooter">
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
  );
}

export default AccountDeleteModal;
