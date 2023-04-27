import React from "react";

function CategorySelector(props) {
  const { CATEGORIES, handleClick } = props;

  return (
    <div>
      <button
        key="categoryall"
        type="button"
        onClick={() => handleClick("all")}
      >
        all
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={`category${category}`}
          type="button"
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;
