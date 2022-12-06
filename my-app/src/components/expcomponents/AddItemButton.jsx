import React from "react";
import { useState } from "react";
import imgAdd from "../assets/add-icon.svg";
import NewItemModal from "./NewItemModal";

function AddItemButton(){

    const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)

    function OpenModal(){
        setIsAddItemModalOpen(true)
    }

    
return(
    <div className="AddItemButtonContainer">
        <button className="AddItemButton" onClick={OpenModal}>
                <img src={imgAdd} />
                New Item
        </button>
        {isAddItemModalOpen && <NewItemModal isAddItemModalOpen={isAddItemModalOpen} setIsAddItemModalOpen={setIsAddItemModalOpen} />}
    </div>
    
)

}

export default AddItemButton;