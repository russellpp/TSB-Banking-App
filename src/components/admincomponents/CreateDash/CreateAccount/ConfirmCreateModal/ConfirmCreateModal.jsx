import React from "react";
import "./ConfirmCreateModal.css";

function ConfirmCreateModal({
  accounts,
  setAccounts,
  formRef,
  isConfirmCreateModal,
  setIsConfirmCreateModal,
  newDetails,
}) {
  const handleCreate = () => {

    setAccounts((prevState) => {
      return [
        ...prevState,
        newDetails
      ]
    })
    handleCloseModal()
  };
  const handleCloseModal = () => {
    setIsConfirmCreateModal(false);
    formRef.current.reset();
  };

  return (
    <div className="Modal">
      <div className="Container">
        <div className="ModalBody">
          <span>{`Account Name: ${newDetails.name}`}</span>
          <span>{`Account Number: ${newDetails.accountNumber}`}</span>
          <span>{`Email: ${newDetails.email}`}</span>
          <span>{`Password: ${newDetails.password}`}</span>
          <span>{`Initial balance: ${newDetails.balance}`}</span>

          <button className="ConfirmButton" onClick={handleCreate}>
            Create Account
          </button>
          <button className="CancelButton" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCreateModal;
