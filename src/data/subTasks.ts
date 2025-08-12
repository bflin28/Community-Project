// SubTask interface for specific tasks within categories
export interface SubTask {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string; // References the parent category id
  estimatedTime?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

// Sub-tasks for Car Help category
export const CAR_HELP_SUBTASKS: SubTask[] = [
  {
    id: 'flat-tire',
    name: 'Flat Tire',
    icon: '🛞',
    description: 'Need help changing a flat tire or getting roadside assistance',
    category: 'car-help',
    estimatedTime: '30-45 mins',
    difficulty: 'medium'
  }
];

// Sub-tasks for Tutoring category (placeholder for future expansion)
export const TUTORING_SUBTASKS: SubTask[] = [
  // Future sub-tasks will go here
];

// Sub-tasks for Bike Help category (placeholder for future expansion)
export const BIKE_HELP_SUBTASKS: SubTask[] = [
  // Future sub-tasks will go here
];

// Sub-tasks for Community Cleanup category (placeholder for future expansion)
export const COMMUNITY_CLEANUP_SUBTASKS: SubTask[] = [
  // Future sub-tasks will go here
];

// Sub-tasks for Yard Work category (placeholder for future expansion)
export const YARD_WORK_SUBTASKS: SubTask[] = [
  // Future sub-tasks will go here
];

// Helper function to get sub-tasks by category
export const getSubTasksByCategory = (categoryId: string): SubTask[] => {
  switch (categoryId) {
    case 'car-help':
      return CAR_HELP_SUBTASKS;
    case 'tutoring':
      return TUTORING_SUBTASKS;
    case 'bike-help':
      return BIKE_HELP_SUBTASKS;
    case 'community-cleanup':
      return COMMUNITY_CLEANUP_SUBTASKS;
    case 'yard-work':
      return YARD_WORK_SUBTASKS;
    default:
      return [];
  }
};
