import React from "react";
import { useState } from "react";
import imgAdd from "../assets/add-icon.svg";
import NewItemModal from "./NewItemModal";

function AddItemButton({
  recordList,
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
  dataOptions,
  setDataOptions
}) {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  function OpenModal() {
    setIsAddItemModalOpen(true);
  }

  return (
    <div className="AddItemButtonContainer">
      <button className="AddItemButton" onClick={OpenModal}>
        <img src={imgAdd} />
        New Item
      </button>
      {isAddItemModalOpen && (
        <NewItemModal
          recordList={recordList}
          setRecordList={setRecordList}
          isAddItemModalOpen={isAddItemModalOpen}
          setIsAddItemModalOpen={setIsAddItemModalOpen}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          accounts={accounts}
          setAccounts={setAccounts}
          currentWallet={currentWallet}
          dataOptions={dataOptions}
          setDataOptions={setDataOptions}
        />
      )}
    </div>
  )
}

export default AddItemButton;
