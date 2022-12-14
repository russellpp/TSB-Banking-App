import React from "react";
import transactions from "../assets/transaction.png";
import { useState, useEffect } from "react";
import TransactionsModal from "./TransactionsModal";

function Transactions(props) {
  const { setCurrentUser, currentUser, accounts } = props;
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);
  const [listSpliced, setListSpliced] = useState([]);

  //opening modal function
  function OpenTransactionsModal() {
    setIsTransactionsOpen(true);
  }

  const listTransactions = currentUser?.transactions || [];
  const filteredList = () => {
    if (!listTransactions || listTransactions.length <= 3){
      return listTransactions
    } else {
      const filterArr = listTransactions.filter((list,  index)=> index >= listTransactions.length - 3)
      return filterArr;
    }
  } 
  
  /* useEffect(() => {
    if (listTransactions.length > 3) {
      setListSpliced(listTransactions.splice(-3));
    } else {
      setListSpliced(listTransactions);
    }
  }, [accounts]); */

  return (
    <div>
      <div className="transactionsBox" onClick={OpenTransactionsModal}>
        <nav className="transactionsNav">
          <h2>Transactions</h2>
        </nav>
        <ul className="transactionsBody">
          {filteredList().map((list, index) => (
            <li key={index}>
              <div className="transactionsContainer">
                <div className="transactionsBodyLeft">
                  <div className="transactionsDate">{list.date}</div>
                  <div className="transactionsType">{list.type}</div>
                </div>
                <div className="transactionsBodyRight">
                  <div className="transactionsBalance">
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
            </li>
          ))}
        </ul>
        <footer className="transactionsFooter">
          <span className="clickHere">Click here for more transactions</span>
        </footer>
      </div>
      {isTransactionsOpen && (
        <TransactionsModal
          currentUser={currentUser}
          setIsTransactionsOpen={setIsTransactionsOpen}
        />
      )}
    </div>
  );
}

export default Transactions;
