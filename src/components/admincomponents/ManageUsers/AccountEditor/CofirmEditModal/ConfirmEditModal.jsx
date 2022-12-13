import { isEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ConfirmEditModal.css";

const emailValidation = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
};

function ConfirmEditModal({
  accounts,
  setAccounts,
  selectedAccount,
  formRef,
  isConfirmEditOpen,
  setIsConfirmEditOpen,
  editDetails,
  setSelectedAccount,
  setSearchTerm,
  searchRef,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEdit, seterrorEdit] = useState({
    isAcctNoInvalid: false,
    isEmailInvalid: false,
    isPasswordInvalid: false,
    isEmpty: false,
  });
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setErrorMessage({
      isAcctNoInvalid: false,
      isEmailInvalid: false,
      isPasswordInvalid: false,
      isEmpty: false,
    });
    const filteredAccounts = accounts.filter(
      (acct) => acct.accountNumber !== selectedAccount.accountNumber
    );
    if (
      isNaN(parseFloat(editDetails.accountNumber)) ||
      `${editDetails.accountNumber}`.length !== 9 ||
      filteredAccounts.some(
        (acct) => acct.accountNumber === editDetails.accountNumber
      )
    ) {
      seterrorEdit((prevState) => {
        return {
          ...prevState,
          isAcctNoInvalid: true,
        };
      });
    } else if (
      !emailValidation(editDetails.email) ||
      editDetails.email === "" ||
      filteredAccounts.some((acct) => acct.email === editDetails.email)
    ) {
      seterrorEdit((prevState) => {
        return {
          ...prevState,
          isEmailInvalid: true,
        };
      });
    } else if (
      `${editDetails.password}`.length < 8 ||
      editDetails.password === ""
    ) {
      seterrorEdit((prevState) => {
        return {
          ...prevState,
          isPasswordInvalid: true,
        };
      });
    } else if (
      editDetails.accountNumber === selectedAccount.accountNumber &&
      editDetails.email === selectedAccount.email &&
      editDetails.name === selectedAccount.name &&
      editDetails.password === selectedAccount.password
    ) {
      seterrorEdit((prevState) => {
        return {
          ...prevState,
          isEmpty: true,
        };
      });
    } else {
      seterrorEdit({
        isAcctNoInvalid: false,
        isEmailInvalid: false,
        isPasswordInvalid: false,
        isEmpty: false,
      });
      setIsEditable(true);
    }
  }, [editDetails]);

  const handleEdit = () => {
    const updatedAccounts = accounts.map((account) => {
      if (selectedAccount.email === account.email) {
        const updatedDetails = {
          ...account,
          name: editDetails.name,
          accountNumber: editDetails.accountNumber,
          email: editDetails.email,
          password: editDetails.password,
          balance: editDetails.balance,
        };
        return updatedDetails;
      } else {
        return account;
      }
    });
    setAccounts(updatedAccounts);
    alert(`Edit successful`);
    setSelectedAccount(accounts[0]);
    setSearchTerm("");
    handleCloseModal();
  };

  const editModal = () => {
    console.log("edit");
    /*  return (
      <div className="ModalBody">
        <span>Are you sure you want to apply changes to this account?</span>
        <span>{`${selectedAccount.name} to ${editDetails.name}`}</span>
        <span>{`${selectedAccount.accountNumber} to ${editDetails.accountNumber}`}</span>
        <span>{`${selectedAccount.email} to ${editDetails.email}`}</span>
        <span>{`${selectedAccount.password} to ${editDetails.password}`}</span>

        <button className="ConfirmButton" onClick={handleEdit}>
          Confirm Edit
        </button>
        <button className="CancelButton" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    ); */
  };

  const alertModal = () => {
    console.log(errorEdit);
    const successModal = (
      <div className="ModalBody">
        <span>Are you sure you want to apply changes to this account?</span>
        <span>{`${selectedAccount.name} to ${editDetails.name}`}</span>
        <span>{`${selectedAccount.accountNumber} to ${editDetails.accountNumber}`}</span>
        <span>{`${selectedAccount.email} to ${editDetails.email}`}</span>
        <span>{`${selectedAccount.password} to ${editDetails.password}`}</span>

        <button className="ConfirmButton" onClick={handleEdit}>
          Confirm Edit
        </button>
        <button className="CancelButton" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    );

    const errorEmail = (
      <div className="ModalBody">
        <span>Invalid email! Input proper email format.</span>
        <button className="CancelButton" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    );

    const errorEmpty = (
      <div className="ModalBody">
        <span>No edit iput!</span>
        <button className="CancelButton" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    );

    const errorAcctNo = (
      <div className="ModalBody">
        <span>
          Invalid Account Number! Either Account number already exists or not in
          proper format.
        </span>
        <button className="CancelButton" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    );

    const errorPassword = (
      <div className="ModalBody">
        <span>Invalid Password! Password must have at least 8 characters.</span>
        <button className="CancelButton" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    );
    if (errorEdit.isAcctNoInvalid) {
      return errorAcctNo;
    } else if (errorEdit.isEmailInvalid) {
      return errorEmail;
    } else if (errorEdit.isPasswordInvalid) {
      return errorPassword;
    } else if (errorEdit.isEmpty) {
      return errorEmpty;
    } else {
      return successModal;
    }
  };

  const handleCloseModal = () => {
    setIsConfirmEditOpen(false);
    formRef.current.reset();
  };

  return (
    <div className="Modal">
      <div className="Container">{alertModal()}</div>
    </div>
  );
}

export default ConfirmEditModal;
