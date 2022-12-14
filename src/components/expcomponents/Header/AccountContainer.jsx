import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import imgAdd from "../../assets/add-icon.svg";
import BudgetModal from "../Modals/BudgetModal";
import WalletList from "./WalletList";

function AccountContainer(props) {
  const {
    currentUser,
    setCurrentUser,
    accounts,
    setAccounts,
    currentWallet,
    setCurrentWallet,
    walletBalance,
    setWalletBalance,
    walletList,
    setWalletList
  } = props;
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const walletRef = useRef();

  // finding current wallet

  const listWallets = currentUser?.wallets || [];

  useEffect(() => {
    setWalletList(listWallets);
  }, [listWallets]);

  useEffect(() => {
    if (listWallets.length > 0) {
      const selectedWallet = listWallets.find(
        (wallet) => wallet.isCurrentAccount
      );
      setCurrentWallet(selectedWallet);
    }
  }, [walletList, accounts]);

  function OpenBudgetModal() {
    setIsBudgetOpen(true);
  }

  return (
    <div className="AccountContainer">
      <button className="AddAccountButton" onClick={OpenBudgetModal}>
        <img src={imgAdd} />
        Wallet
      </button>
      {isBudgetOpen && (
        <BudgetModal
          walletList={walletList}
          setWalletList={setWalletList}
          setIsBudgetOpen={setIsBudgetOpen}
          currentUser={currentUser}
          accounts={accounts}
          setAccounts={setAccounts}
          currentWallet={currentWallet}
          setCurrentWallet={setCurrentWallet}
          walletBalance={walletBalance}
          setWalletBalance={setWalletBalance}
          walletRef={walletRef}
        />
      )}
      <WalletList
        walletRef={walletRef}
        currentUser={currentUser}
        listWallets={listWallets}
        currentWallet={currentWallet}
        setCurrentWallet={setCurrentWallet}
        accounts={accounts}
        setAccounts={setAccounts}
      />
    </div>
  );
}

export default AccountContainer;
