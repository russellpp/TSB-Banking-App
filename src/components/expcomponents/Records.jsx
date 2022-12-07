import React from "react";
import RecordList from "./RecordList";
import RecordSummary from "./RecordSummary";
import AddItemButton from "./AddItemButton";
import { useState } from "react";
import { useEffect } from "react";

function Records({
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
}) {
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    if (currentUser === null) {
      setRecordList([]);
    } else if (currentWallet === null || currentWallet === undefined) {
      setRecordList([]);
    } else {
      setRecordList(currentWallet.records);
    }
    console.log("setRecordList effect, list below:");
    console.log(recordList);
  }, [accounts, currentWallet]);

  return (
    <div className="Records">
      <AddItemButton
        recordList={recordList}
        setRecordList={setRecordList}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        accounts={accounts}
        setAccounts={setAccounts}
        currentWallet={currentWallet}
      />
      <RecordList 
        recordList={recordList} 
        setRecordList={setRecordList}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        accounts={accounts}
        setAccounts={setAccounts}
        currentWallet={currentWallet}
        />
      <RecordSummary />
    </div>
  )
}

export default Records;
