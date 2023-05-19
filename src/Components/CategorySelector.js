import React, { useState } from "react";

function prettifyCategoryName(category) {
  let prettyCategoryName = category.substring(0, 1).toUpperCase();
  for (let i = 1; i < category.length; i += 1) {
    if (category.charAt(i) === category.charAt(i).toUpperCase()) {
      prettyCategoryName += " ";
    }
    prettyCategoryName += category.charAt(i);
  }
  return prettyCategoryName;
}

function CategorySelector(props) {
  const { CATEGORIES, handleClick } = props;
  const [selectedCategory, setSelectedCategory] = useState("all");

  function changeSelectedCategory(category) {
    if (category === selectedCategory) {
      setSelectedCategory("all");
      if (category !== "all") handleClick("all");
      return;
    }
    setSelectedCategory(category);
    handleClick(category);
  }

  return (
    <div className="category-buttons">
      <button
        key="categoryall"
        type="button"
        onClick={() => changeSelectedCategory("all")}
        className={`category-button ${
          selectedCategory === "all" ? "selected" : ""
        }`}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={`category${category}`}
          type="button"
          onClick={() => changeSelectedCategory(category)}
          className={`category-button ${
            selectedCategory === category ? "selected" : ""
          }`}
        >
          {prettifyCategoryName(category)}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;
