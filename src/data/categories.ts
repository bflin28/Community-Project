// Category interface
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal';
}

export const NEED_HELP_CATEGORIES: Category[] = [
  {
    id: 'car-help',
    name: 'Car Help',
    icon: '🚗',
    description: 'Need assistance with your vehicle? From tire changes to jump starts.',
    color: 'blue'
  },
  {
    id: 'tutoring',
    name: 'Tutoring',
    icon: '📚',
    description: 'Get help with studies, homework, or learning new skills.',
    color: 'purple'
  },
  {
    id: 'bike-help',
    name: 'Bike Help',
    icon: '🚲',
    description: 'Bicycle repairs, maintenance, or riding assistance.',
    color: 'green'
  },
  {
    id: 'community-cleanup',
    name: 'Community Cleanup',
    icon: '🧹',
    description: 'Organize or join community cleaning and beautification efforts.',
    color: 'teal'
  },
  {
    id: 'yard-work',
    name: 'Yard Work',
    icon: '🌱',
    description: 'Gardening, lawn care, landscaping, and outdoor maintenance.',
    color: 'orange'
  }
];

export const OFFER_HELP_CATEGORIES: Category[] = [
  {
    id: 'car-help',
    name: 'Car Help',
    icon: '🚗',
    description: 'I can help with vehicle maintenance and repairs.',
    color: 'blue'
  },
  {
    id: 'tutoring',
    name: 'Tutoring',
    icon: '📚',
    description: 'I can teach and help others learn new skills.',
    color: 'purple'
  },
  {
    id: 'bike-help',
    name: 'Bike Help',
    icon: '🚲',
    description: 'I know about bicycle maintenance and repairs.',
    color: 'green'
  },
  {
    id: 'community-cleanup',
    name: 'Community Cleanup',
    icon: '🧹',
    description: 'I\'m available to help clean and improve our community.',
    color: 'teal'
  },
  {
    id: 'yard-work',
    name: 'Yard Work',
    icon: '🌱',
    description: 'I have experience with gardening and outdoor work.',
    color: 'orange'
  }
];
