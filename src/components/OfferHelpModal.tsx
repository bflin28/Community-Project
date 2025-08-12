import React, { useState } from 'react';
import './Modal.css';

interface OfferHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (offer: HelpOffer) => void;
}

export interface HelpOffer {
  skills: string[];
  availability: string;
  description: string;
  categories: string[];
}

const OfferHelpModal: React.FC<OfferHelpModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [skills, setSkills] = useState('');
  const [availability, setAvailability] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    'automotive',
    'home-repair',
    'technology',
    'moving',
    'gardening',
    'cooking',
    'childcare',
    'elderly-care',
    'tutoring',
    'other'
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!skills || selectedCategories.length === 0) {
      alert('Please fill in your skills and select at least one category');
      return;
    }

    onSubmit({
      skills: skills.split(',').map(s => s.trim()),
      availability,
      description,
      categories: selectedCategories
    });

    // Reset form
    setSkills('');
    setAvailability('');
    setDescription('');
    setSelectedCategories([]);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>🤝 Offer Help</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="skills">What skills do you offer? *</label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., Car repair, Plumbing, Cooking (separate with commas)"
              required
            />
            <small>Separate multiple skills with commas</small>
          </div>

          <div className="form-group">
            <label>Categories you can help with: *</label>
            <div className="checkbox-grid">
              {categories.map(category => (
                <label key={category} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="checkbox-label">
                    {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="availability">When are you available?</label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="">Select availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="evenings">Evenings</option>
              <option value="flexible">Flexible schedule</option>
              <option value="emergency">Emergency availability</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Tell us more about yourself</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Share your experience, any specialties, or additional info..."
              rows={3}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Register as Helper
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferHelpModal;
