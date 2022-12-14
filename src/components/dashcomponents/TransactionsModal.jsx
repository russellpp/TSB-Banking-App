import React from "react";
import { useState } from "react";

function TransactionsModal({ setIsTransactionsOpen, currentUser }) {
  const [isDeposit, setIsDeposit] = useState(false);

  function CloseTransactionsModal() {
    setIsTransactionsOpen(false);
  }

  const listTransactions = currentUser?.transactions || [];

  return (
    <div className="transactionsModal">
      <div className="transactionsModalContent">
        <div className="transactionsModalHeader">
          <h4 className="transactionsModalTitle">Transactions</h4>
        </div>
        <div className="transactionsModalBody">
          {listTransactions.map((list) => (
            <>
              <div className="transactionsContainer">
                <div className="transactionsBodyLeft">
                  <div className="transactionsDate">{list.date}</div>
                  <div className="transactionsType">{list.type}</div>
                </div>
                <div className="transactionsBodyRight">
                  <div className="transactionsBalance">
                    {" "}
                    Balance: ₱{" "}
                    {Number(list.balance)
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className="transactionsAmount">
                    ₱{" "}
                    {Number(list.amount)
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="transactionsModalFooter">
          <button
            className="transactionsCancelButton"
            onClick={CloseTransactionsModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionsModal;
