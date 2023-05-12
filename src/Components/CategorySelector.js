import React from "react";

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

  return (
    <div>
      <button
        key="categoryall"
        type="button"
        onClick={() => handleClick("all")}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={`category${category}`}
          type="button"
          onClick={() => handleClick(category)}
        >
          {prettifyCategoryName(category)}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;
