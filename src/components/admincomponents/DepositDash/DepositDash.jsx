import React from "react";
import ListBox from "./ListBox/ListBox";
import "./DepositDash.css";
import { useState, useRef } from "react";
import AccountEditor from "./AccountEditor/AccountEditor";
import { useEffect } from "react";

function DepositDash({ accounts, setAccounts }) {
  const [selectedDepositAccount, setSelectedDepositAccount] = useState(
    accounts[0]
  );
  const formRef = useRef();
  const searchRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="AdminDashContainer">
      <div className="AdminDashHeader">
        <span>Deposit</span>
      </div>
      <div className="AdminDashBody">
        <div className="AccountListWrapper">
          <div className="SearchBarContainer">
            <span>User accounts</span>
          </div>
          <div className="ListBoxWrapper">
            <ListBox
              accounts={accounts}
              setAccounts={setAccounts}
              selectedDepositAccount={selectedDepositAccount}
              setSelectedDepositAccount={setSelectedDepositAccount}
              formRef={formRef}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchRef={searchRef}
            />
          </div>
        </div>
        <AccountEditor
          accounts={accounts}
          setAccounts={setAccounts}
          selectedDepositAccount={selectedDepositAccount}
          formRef={formRef}
          setSelectedDepositAccount={setSelectedDepositAccount}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchRef={searchRef}
        />
      </div>
      <div className="AdminDashFooter">
        <span>totally secure bank</span>
      </div>
    </div>
  );
}

export default DepositDash;
