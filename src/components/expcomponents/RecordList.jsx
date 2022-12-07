import React, { useState } from "react";
import imgDelete from "../assets/delete-icon.svg";
import imgEdit from "../assets/edit-icon.svg";
import RecordItemDeleteModal from "./RecordItemDeleteModal";

function RecordList({
  recordList,
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleDeleteModal = (index) => {
    setSelectedItem(index);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (targetIndex) => {
    const locatedItem = currentWallet.records.find(
      (item, index) => index == targetIndex
    );
    console.log(locatedItem);
  };

  return (
    <div className="ListWrapper">
      <ul className="RecordList">
        {recordList.map((item, index) => (
          <li className="RecordItem" key={index}>
            <div className="RecordContainer">
              <span className="RecordCategory">{item.category}</span>
              <span className="RecordId">{item.id}</span>
              <span className="RecordValue">{item.value}</span>
              <span className="RecordName">{item.name}</span>
              <button onClick={() => handleEdit(index)}>
                <img src={imgEdit} />
              </button>
              <button onClick={() => handleDeleteModal(index)}>
                <img src={imgDelete} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isDeleteModalOpen && (
        <RecordItemDeleteModal
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          accounts={accounts}
          setAccounts={setAccounts}
          currentWallet={currentWallet}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          selectedItem={selectedItem}
        />
      )}
    </div>
  )
}

export default RecordList;
