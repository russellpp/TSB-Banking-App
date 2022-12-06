import React from "react";
import { useState } from "react";





function NewItemModal({setIsAddItemModalOpen, isAddItemModalOpen}){

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
        "Others"
    ]
    const [dataOptions, setDataOptions] = useState(defaultOptions);
    let [itemName, setItemName] = useState();
    let [itemValue, setItemValue] = useState();
    let [itemCategory, setItemCategory] = useState();
    let [addedCategory, setAddedCategory] = useState();

    
    function CloseModal(){
        setIsAddItemModalOpen(false);
        console.log(isAddItemModalOpen)
    }

    function getItem(e){
        setItemName(e.target.value)

    }

    function getValue(e){
        setItemValue(e.target.value)

    }

    function getCategory(e){
        setItemCategory(e.target.value)
    }

    function getNewCategory(e){
        setAddedCategory(e.target.value)
        addedCategory = e.target.value
        console.log(addedCategory)
        
    }

    
    function AddCategory(){
        const newDataOptions = defaultOptions
        newDataOptions.push(addedCategory)
        console.log(newDataOptions)
    }
    
    function AddItem(){
    
    
    }

    return(
    <div className = "ItemModal">
        <div className="BudgetModalContent">
            <div className="BudgetModalHeader">
                <h4 className='BudgetModalTitle'>New Item</h4>
            </div>
            <div className="BudgetModalBody">
                <label htmlFor="accountName">Item name: </label>
                <input type="text" name='accountName' id='accountName' autoComplete='off' autoFocus onChange={getItem}/>
            
                
                <label htmlFor="category">Select Category: </label>
                <select name='category' id='category' list="options" autoComplete='off' autoFocus onChange={getCategory}>
                    
                        {dataOptions.map((item,index) => {
                            return(
                                <option key={index} value={item.displayValue}>{item}</option>
                                )}
                                )}
                </select>
                
                <label htmlFor="newCategory">New Category: </label>
                <input type="text" name='newCategory' id='newCategory' autoComplete='off' autoFocus onChange={getNewCategory}/>
                <button className="NewBudgetAccountButton" onClick={AddCategory}>Add Category</button>

                                
                <label htmlFor="amount">Enter value: </label>
                <input type="number" name='amount' id='amount' autoComplete='off' autoFocus onChange={getValue}/>
                
            </div>
            <div className="BudgetModalFooter">
                <button className="NewBudgetAccountButton" onClick={AddItem}>Add Item</button>
                <button className="BudgetCancelButton" onClick={CloseModal}>Cancel</button>
            </div>
        </div>  
    </div>

    )
}

export default NewItemModal;