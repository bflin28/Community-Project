import React from 'react';
import './CategoryCard.css';
import { Category } from '../data/categories';

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div 
      className={`category-card ${category.color}`}
      onClick={() => onClick(category)}
    >
      <div className="card-icon">
        {category.icon}
      </div>
      <h3 className="card-title">{category.name}</h3>
      <p className="card-description">{category.description}</p>
      <div className="card-arrow">→</div>
    </div>
  );
};

export default CategoryCard;
