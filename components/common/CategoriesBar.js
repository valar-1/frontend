import React, { useState } from 'react';

export default function CategoriesBar({ title, items, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <>
      <div className="highlighted-categories">
        <div className="highlight-lists d-flex mt-4">
          <div
            className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            📚 All
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`category-item ${selectedCategory === item.value ? 'active' : ''}`}
              onClick={() => handleCategoryClick(item.value)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
