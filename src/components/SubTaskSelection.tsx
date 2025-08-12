import React from 'react';
import SubTaskCard from './SubTaskCard';
import { SubTask } from '../data/subTasks';
import './CategoryCard.css'; // Reuse existing styles

interface SubTaskSelectionProps {
  categoryName: string;
  categoryIcon: string;
  subTasks: SubTask[];
  onSubTaskSelect: (subTask: SubTask) => void;
  onBack: () => void;
}

const SubTaskSelection: React.FC<SubTaskSelectionProps> = ({
  categoryName,
  categoryIcon,
  subTasks,
  onSubTaskSelect,
  onBack
}) => {
  return (
    <div className="category-selection">
      <div className="selection-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Categories
        </button>
        <div className="header-content">
          <div className="header-icon">{categoryIcon}</div>
          <h1 className="selection-title">{categoryName} - Choose a Task</h1>
          <p className="selection-subtitle">
            Select the specific type of help you need in this category
          </p>
        </div>
      </div>
      
      <div className="cards-grid subtasks-grid">
        {subTasks.length > 0 ? (
          subTasks.map((subTask) => (
            <SubTaskCard
              key={subTask.id}
              subTask={subTask}
              onClick={onSubTaskSelect}
            />
          ))
        ) : (
          <div className="no-subtasks">
            <p>🚧 More specific tasks for {categoryName} are coming soon!</p>
            <p>In the meantime, you can still request help through the general category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubTaskSelection;
