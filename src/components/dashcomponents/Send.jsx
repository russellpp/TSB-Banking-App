import React from "react";
import SendModal from "./SendModal";
import send from "../assets/send.png";
import { useState } from "react";

function Send({ currentUser, setCurrentUser, accounts, setAccounts }) {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
  //opening modal function
  function OpenSendModal() {
=======

function Send(props) {
  const {setCurrentUser, currentUser, accounts, setAccounts} = props;
  
    const [isOpen, setIsOpen] = useState(false);

    //opening modal function
    function OpenSendModal(){
>>>>>>> 6c4b5ae26a50bac220aebed937ea0fc029a43a83
    setIsOpen(true);
  }

  return (
    <div>
<<<<<<< HEAD
      <div className="sendBox" onClick={OpenSendModal}>
        <img src={send} alt="send logo" className="sendLogo" />
        <h2>Send</h2>
      </div>
      {isOpen && <SendModal setCurrentUser={setCurrentUser} setIsOpen={setIsOpen} currentUser={currentUser} accounts={accounts} setAccounts={setAccounts} />}
=======
        <div className="sendBox" onClick={OpenSendModal}>
            <img src={send} alt="send logo" className="sendLogo" />
            <h2>Send</h2>
        </div>
        {isOpen && <SendModal setIsOpen={setIsOpen} setCurrentUser ={setCurrentUser} currentUser = {currentUser} accounts = {accounts} setAccounts = {setAccounts}/>}
>>>>>>> 6c4b5ae26a50bac220aebed937ea0fc029a43a83
    </div>
  );
}

export default Send;
