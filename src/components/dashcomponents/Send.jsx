import React from 'react'
import SendModal from './SendModal'
import send from '../assets/send.png'
import { useState } from 'react';



function Send(props) {
  const {setCurrentUser, currentUser, accounts, setAccounts} = props;
  
    const [isOpen, setIsOpen] = useState(false);

    //opening modal function
    function OpenSendModal(){
    setIsOpen(true);
    }

  return (
    <div>
        <div className="sendBox" onClick={OpenSendModal}>
            <img src={send} alt="send logo" className="sendLogo" />
            <h2>Send</h2>
        </div>
        {isOpen && <SendModal setIsOpen={setIsOpen} setCurrentUser ={setCurrentUser} currentUser = {currentUser} accounts = {accounts} setAccounts = {setAccounts}/>}
    </div>
  )
}

export default Send
