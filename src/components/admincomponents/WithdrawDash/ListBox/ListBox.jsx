import React from "react";
import "./ListBox.css";
import { useState } from "react";

function ListBox({
  accounts,
  setAccounts,
  selectedWithdrawAccount,
  setSelectedWithdrawAccount,
  formRef,
}) {
  const handleSelect = (indexTarget) => {
    const foundAccount = accounts.find(
      (account, index) => index === indexTarget
    );
    setSelectedWithdrawAccount(foundAccount);
    formRef.current.reset();
  };

  return (
    <ul className="ListBox">
      {accounts.map((account, index) => (
        <li
          className={
            account !== selectedWithdrawAccount ? "AccountItem" : "SelectedItem"
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
