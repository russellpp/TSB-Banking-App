import React from 'react'


function SendModal({setIsOpen}) {

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
               <label htmlFor="amount">Enter amount: </label>
               <input type="number" name='amount' id='amount' autoComplete='off' autoFocus/>
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
