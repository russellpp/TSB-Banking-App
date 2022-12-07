import React from "react";
import { useState } from "react";
import AddCategory from "./AddCategoryModal";

function NewItemModal({
  setIsAddItemModalOpen,
  isAddItemModalOpen,
  recordList,
  setRecordList,
  accounts,
  setAccounts,
  currentUser,
  setCurrentUser,
  currentWallet,
}) {
  const defaultOptions = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial Expenses",
    "Investments",
    "Income",
    "Others",
  ];
  const [dataOptions, setDataOptions] = useState(defaultOptions);
  const [itemName, setItemName] = useState();
  const [itemValue, setItemValue] = useState();
  const [itemCategory, setItemCategory] = useState();
  const [itemId, setItemId] = useState();
  const [addedCategory, setAddedCategory] = useState("");
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [buttontext, setButtonText] = useState("Edit Categories");

  const handleCloseModal = () => {
    setIsAddItemModalOpen(false);
    console.log(isAddItemModalOpen);
  };

  const handleItem = (e) => {
    setItemName(e.target.value);
  };

  const handleValue = (e) => {
    setItemValue(e.target.value);
  };

  const handleGetCategory = (e) => {
    setItemCategory(e.target.value);
  };

  const handleOpenExtension = () => {
    if (isAddCategoryOpen) {
      setIsAddCategoryOpen(false);
      setButtonText("Edit Categories");
    } else {
      setIsAddCategoryOpen(true);
      setButtonText("Close Editing");
    }
  };

  const handleAddItem = () => {
    //get date
    let thisTime = new Date();
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = thisTime.getHours();
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    let min = thisTime.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }

    let currentTime =
      thisTime.getDate() +
      "-" +
      month[thisTime.getMonth()] +
      " " +
      hrs +
      ":" +
      min;

    //add new record
    
    const newRecord = {
      id: currentTime,
      name: itemName,
      category: itemCategory,
      value: itemValue,
    };

    // updateaccounts
    /* const walletPath = currentUser.wallets.find((wallet) => wallet.isCurrentAccount);
    walletPath.records.push(newRecord)
    
    const updatedAccounts = accounts.map((account) => {
      if (account.email === currentUser.email) {
        return updatedAccount;
      } else {
        return account;
      }
    }); */
    currentWallet.records.push(newRecord);

    const updatedWallets = currentUser.wallets.map((wallet) => {
      if (wallet.isCurrentAccount) {
        return currentWallet;
      } else {
        return wallet;
      }
    });

    const updatedAccount = {
      ...currentUser,
      wallets: updatedWallets,
    };

    const updatedAccounts = accounts.map((account) => {
      if (account.email === currentUser.email) {
        return updatedAccount;
      } else {
        return account;
      }
    });

    setAccounts(updatedAccounts);
    setRecordList(currentWallet.records);
    handleCloseModal();
  };

  return (
    <div className="ItemModal">
      <div className="BudgetModalContent">
        <div className="BudgetModalHeader">
          <h4 className="BudgetModalTitle">New Item</h4>
        </div>
        <div className="BudgetModalBody">
          <label htmlFor="accountName">Item name: </label>
          <input
            type="text"
            name="accountName"
            id="accountName"
            autoComplete="off"
            autoFocus
            onChange={handleItem}
          />

          <label htmlFor="category">Select Category: </label>
          <select
            name="category"
            id="category"
            list="options"
            autoComplete="off"
            autoFocus
            onChange={handleGetCategory}
          >
            {dataOptions.map((item, index) => {
              return (
                <option key={index} value={item.displayValue}>
                  {item}
                </option>
              );
            })}
          </select>

          <button
            className={
              isAddCategoryOpen ? "RedButton" : "NewBudgetAccountButton"
            }
            onClick={handleOpenExtension}
          >
            {buttontext}
          </button>

          {isAddCategoryOpen && (
            <AddCategory
              isAddCategoryOpen={isAddCategoryOpen}
              setIsAddCategoryOpen={setIsAddCategoryOpen}
              defaultOptions={defaultOptions}
              setDataOptions={setDataOptions}
              dataOptions={dataOptions}
              addedCategory={addedCategory}
              setAddedCategory={setAddedCategory}
            />
          )}

          <label htmlFor="amount">Enter value: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            autoComplete="off"
            autoFocus
            onChange={handleValue}
          />
        </div>
        <div className="BudgetModalFooter">
          <button className="NewBudgetAccountButton" onClick={handleAddItem}>
            Add Item
          </button>
          <button className="BudgetCancelButton" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewItemModal;
