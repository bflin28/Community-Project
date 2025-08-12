import React from 'react';
import { SubTask } from '../data/subTasks';
import './SubTaskCard.css';

interface SubTaskCardProps {
  subTask: SubTask;
  onClick: (subTask: SubTask) => void;
}

const SubTaskCard: React.FC<SubTaskCardProps> = ({ subTask, onClick }) => {
  return (
    <div 
      className={`subtask-card`}
      onClick={() => onClick(subTask)}
    >
      <div className="subtask-icon">
        {subTask.icon}
      </div>
      <div className="subtask-content">
        <h3 className="subtask-title">{subTask.name}</h3>
        <p className="subtask-description">{subTask.description}</p>
        <div className="subtask-meta">
          {subTask.estimatedTime && (
            <span className="subtask-time">
              ⏱️ {subTask.estimatedTime}
            </span>
          )}
          {subTask.difficulty && (
            <span className={`subtask-difficulty difficulty-${subTask.difficulty}`}>
              {subTask.difficulty === 'easy' && '🟢'}
              {subTask.difficulty === 'medium' && '🟡'}
              {subTask.difficulty === 'hard' && '🔴'}
              {subTask.difficulty}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubTaskCard;
