import React from 'react'

function SendModal({setIsOpen, currentUser, setCurrentUser, accounts, setAccounts}) {

    //close Modal function
    function CloseDepoModal(){
        setIsOpen(false);
    }


    

  return (
    <div className = "sendModal">
        <div className="sendModalContent">
            <div className="sendModalHeader">
                <h4 className='sendModalTitle'>Send</h4>
            </div>
            <div className="sendModalBody">
               <div className="currentBalance">Current Balance: {currentUser.balance}</div>
               <label htmlFor='sendAccount'>Enter Account:</label>
               <input type="number" name='sendAccount' id='sendAccount' autoComplete='off' autoFocus/>
               <label htmlFor="amount">Enter amount: </label>
               <input type="number" name='amount' id='amount' autoComplete='off'/>
            </div>
            <div className="sendModalFooter">
                <button className="sendDepositButton">Send</button>
                <button className="sendCancelButton" onClick={CloseDepoModal}>Cancel</button>
            </div>
        </div>  
    </div>
  )
}

export default SendModal
