import React from "react";
import "../../ManageUsers/ListBox/ListBox.css";
import { useState, useEffect } from "react";

function ListBox({
  accounts,
  setAccounts,
  selectedTransferAccount,
  setSelectedTransferAccount,
  formRef,
  searchTerm,
  setSearchTerm,
}) {
  const [filteredArray, setFilteredArray] = useState(accounts);

  const handleSelect = (acctNumber) => {
    const foundAccount = accounts.find(
      (account) => account.accountNumber === acctNumber
    );
    setSelectedTransferAccount(foundAccount);
    formRef.current.reset();
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  };

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
  }, [searchTerm, accounts]);

  return (
    <div>
      <div className="SearchBar">
        <input
          type="text"
          value={searchTerm}
          name="searchBar"
          placeholder="Search"
          onChange={handleSearch}
        ></input>
      </div>
      <ul className="ListBox">
        {filteredArray.map((account, index) => (
          <li
            className={
              account !== selectedTransferAccount
                ? "AccountItem"
                : "SelectedItem"
            }
            key={index}
            onClick={() => handleSelect(account.accountNumber)}
          >
            <span>{account.name}</span>
            <span>{account.accountNumber}</span>
            <span>{account.email}</span>
            <span></span>
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
    </div>
  );
}

export default ListBox;
