import React from "react";

function AddCategory({
  defaultOptions,
  addedCategory,
  setAddedCategory,
  dataOptions,
  setDataOptions,
  isAddCategoryOpen,
  setIsAddCategoryOpen,

}) {
  const handleCategoryChange = (e) => {
    setAddedCategory(e.target.value);
  };

  const handleClearCategory = () => {
    setDataOptions(defaultOptions);
  };

  const handleAddCategory = () => {
    setDataOptions((prevState) => {
      return [...prevState, addedCategory];
    });
    setAddedCategory("");
  };

  return (
    <div className="EditCategoryContainer">
      <label htmlFor="newCategory">New Category: </label>
      <input
        type="text"
        name="newCategory"
        id="newCategory"
        autoComplete="off"
        value={addedCategory}
        autoFocus
        onChange={handleCategoryChange}
      />
      <button className="NewBudgetAccountButton" onClick={handleAddCategory}>
        Add Category
      </button>
      <button className="NewBudgetAccountButton" onClick={handleClearCategory}>
        Clear Custom Categories
      </button>
    </div>
  )
}

export default AddCategory;
