import React from "react";
import "./sidebar.css";
import logout from "../../assets/shutdown.png";
import customerLogo from "../../assets/customer.png";
import transferLogo from "../../assets/transfer.png";
import withdrawLogo from "../../assets/withdraw (1).png";
import depositLogo from "../../assets/deposit (1).png";
import createLogo from "../../assets/create-icon.png"

import { useState } from "react";

function Sidebar({dashState, setDashState}) {
  const handleOpenMain = () => {
    setDashState({
      main: true,
      deposit: false,
      withdraw: false,
      transfer: false,
      create: false
    });
  };

  const handleOpenDeposit = () => {
    setDashState({
      main: false,
      deposit: true,
      withdraw: false,
      transfer: false,
      create: false
    });
  };

  const handleOpenWithdraw = () => {
    setDashState({
      main: false,
      deposit: false,
      withdraw: true,
      transfer: false,
      create: false
    });
  };

  const handleOpenTransfer = () => {
    setDashState({
      main: false,
      deposit: false,
      withdraw: false,
      transfer: true,
      create: false
    });
  };

  const handleOpenCreate = () => {
    setDashState({
      main: false,
      deposit: false,
      withdraw: false,
      transfer: false,
      create: true
    });
  }

  return (
    <div className="sideBarContainer">
      <div className="sideBarTop">TSB</div>
      <nav className="sideBarNav">
        <ul className="sideBarNavList">

          <li onClick={handleOpenMain}>
            <img
              src={customerLogo}
              alt="customer logo"
              className="customerLogo"
            />
            <span className="manageUsers">Manage Users</span>
          </li>

          <li onClick={handleOpenCreate}>
            <img
              src={createLogo}
              alt="create logo"
              className="transferLogo"
            />
            <span className="transferOption">Create Account</span>
          </li>

          <li onClick={handleOpenDeposit}>
            <img src={depositLogo} alt="deposit logo" className="depositLogo" />
            <span className="depositOption">Deposit</span>
          </li>

          <li onClick={handleOpenWithdraw}>
            <img
              src={withdrawLogo}
              alt="withdraw logo"
              className="withdrawLogo"
            />
            <span className="withdrawOption">Withdraw</span>
          </li>

          <li onClick={handleOpenTransfer}>
            <img
              src={transferLogo}
              alt="transfer logo"
              className="transferLogo"
            />
            <span className="transferOption">Transfer</span>
          </li>


        </ul>
      </nav>
      <footer className="sideBarBottom">
        <img src={logout} alt="logo" className="logoutAdmin" />
      </footer>
    </div>
  );
}

export default Sidebar;
