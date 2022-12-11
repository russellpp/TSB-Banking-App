import React from "react";
import "./ListBox.css";
import { useState } from "react";
import { useEffect } from "react";

function ListBox({
  accounts,
  setAccounts,
  selectedAccount,
  setSelectedAccount,
  formRef,
}) {
  const handleSelect = (indexTarget) => {
    const foundAccount = accounts.find(
      (account, index) => index === indexTarget
    );
    setSelectedAccount(foundAccount);
    formRef.current.reset();
  };

  const [accountList, setAccountlist] = useState(accounts)

  useEffect(()=> {
    setAccountlist(accounts)
  },[accounts])


  return (
    <ul className="ListBox">
      {accountList.map((account, index) => (
        <li
          className={
            account !== selectedAccount ? "AccountItem" : "SelectedItem"
          }
          key={index}
          onClick={() => handleSelect(index)}
        >
          <span>{account.name}</span>
          <span>{account.accountNumber}</span>
          <span>{account.email}</span>
          <span>{account.password}</span>
          <span>{account.balance}</span>
        </li>
      ))}
    </ul>
  );
}

export default ListBox;
