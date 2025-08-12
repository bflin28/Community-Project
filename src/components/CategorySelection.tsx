import React from 'react';
import CategoryCard from './CategoryCard';
import { Category } from '../data/categories';
import './CategoryCard.css';

interface CategorySelectionProps {
  title: string;
  subtitle: string;
  categories: Category[];
  onCategorySelect: (category: Category) => void;
  onBack?: () => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
  title,
  subtitle,
  categories,
  onCategorySelect,
  onBack
}) => {
  return (
    <div className="category-selection">
      <div className="category-header">
        {onBack && (
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
        )}
        <h2 className="category-title">{title}</h2>
        <p className="category-subtitle">{subtitle}</p>
      </div>
      
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onCategorySelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
