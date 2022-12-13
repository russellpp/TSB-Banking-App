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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArray, setFilteredArray] = useState(accounts);
  
  useEffect(() => {
    if (searchTerm == "") {
      setFilteredArray(accounts);
    } else {
      const searchArray = accounts.filter(
        (acct) =>
        acct.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acct.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acct.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredArray(searchArray);
      }
    }, [searchTerm,accounts]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  };

  const handleSelect = (acctNumber) => {   
    const foundAccount = accounts.find(
      (account) => account.accountNumber === acctNumber
    );
    setSelectedAccount(foundAccount);
    formRef.current.reset();
  };

  
  

    return (
    <ul className="ListBox">
      <div className="SearchBar">
        <input
          type="text"
          name="searchBar"
          placeholder="Search"
          onChange={handleSearch}
        ></input>
      </div>
      {filteredArray.map((account, index) => (
        <li
          className={
            account !== selectedAccount ? "AccountItem" : "SelectedItem"
          }
          key={index}
          onClick={() => handleSelect(account.accountNumber)}
        >
          <span>{account.name}</span>
          <span>{account.accountNumber}</span>
          <span>{account.email}</span>
          <span>password: {account.password}</span>
          <span>
            ₱{" "}
            {parseFloat(account.balance)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListBox;
