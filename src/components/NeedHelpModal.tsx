import React, { useState } from 'react';
import './Modal.css';

interface NeedHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (request: HelpRequest) => void;
}

export interface HelpRequest {
  title: string;
  description: string;
  category: string;
  urgency: 'low' | 'medium' | 'high';
  estimatedTime: string;
}

const NeedHelpModal: React.FC<NeedHelpModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high'>('medium');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !category) {
      alert('Please fill in all required fields');
      return;
    }

    onSubmit({
      title,
      description,
      category,
      urgency,
      estimatedTime
    });

    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
    setUrgency('medium');
    setEstimatedTime('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>🙋‍♂️ Request Help</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="title">What do you need help with? *</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Change a car tire"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="automotive">Automotive</option>
              <option value="home-repair">Home Repair</option>
              <option value="technology">Technology</option>
              <option value="moving">Moving & Transport</option>
              <option value="gardening">Gardening</option>
              <option value="cooking">Cooking</option>
              <option value="childcare">Childcare</option>
              <option value="elderly-care">Elderly Care</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide more details about what you need help with..."
              rows={4}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="urgency">Urgency</label>
              <select
                id="urgency"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low - Whenever convenient</option>
                <option value="medium">Medium - This week</option>
                <option value="high">High - ASAP</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input
                type="text"
                id="estimatedTime"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
                placeholder="e.g., 1 hour"
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Post Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NeedHelpModal;
