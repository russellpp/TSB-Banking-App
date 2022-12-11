import React from "react";
import "./CreateDash.css";
import { useState, useRef } from "react";
import CreateAccount from "./CreateAccount/CreateAccount";

function CreateDash({ accounts, setAccounts }) {
    const {formRef} = useRef()

  return (
    <div className="AdminDashContainer">
      <div className="AdminDashHeader">
        <span>Create Account</span>
      </div>
      <div className="AdminDashBody">
        <CreateAccount 
            accounts={accounts}
            setAccounts={setAccounts}
            formRef={formRef}
        />
        
      </div>
      <div className="AdminDashFooter">footer</div>
    </div>
  );
}

export default CreateDash;
