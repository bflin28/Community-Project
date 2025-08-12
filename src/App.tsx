import React, { useState } from 'react';
import './App.css';
import NeedHelpModal, { HelpRequest } from './components/NeedHelpModal';
import OfferHelpModal, { HelpOffer } from './components/OfferHelpModal';
import CategorySelection from './components/CategorySelection';
import SubTaskSelection from './components/SubTaskSelection';
import { Category, NEED_HELP_CATEGORIES, OFFER_HELP_CATEGORIES } from './data/categories';
import { SubTask, getSubTasksByCategory } from './data/subTasks';

type ViewState = 'home' | 'need-help-categories' | 'offer-help-categories' | 'need-help-subtasks' | 'offer-help-subtasks';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubTask, setSelectedSubTask] = useState<SubTask | null>(null);
  const [isNeedHelpModalOpen, setIsNeedHelpModalOpen] = useState(false);
  const [isOfferHelpModalOpen, setIsOfferHelpModalOpen] = useState(false);

  const handleNeedHelp = () => {
    setCurrentView('need-help-categories');
  };

  const handleOfferHelp = () => {
    setCurrentView('offer-help-categories');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory(null);
    setSelectedSubTask(null);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    const subTasks = getSubTasksByCategory(category.id);
    
    if (subTasks.length > 0) {
      // Navigate to sub-tasks if they exist
      setCurrentView(currentView === 'need-help-categories' ? 'need-help-subtasks' : 'offer-help-subtasks');
    } else {
      // If no sub-tasks, show alert (fallback for categories without sub-tasks)
      alert(`Selected ${category.name}! This will open the request form soon.`);
    }
  };

  const handleBackToCategories = () => {
    setSelectedSubTask(null);
    if (currentView === 'need-help-subtasks') {
      setCurrentView('need-help-categories');
    } else if (currentView === 'offer-help-subtasks') {
      setCurrentView('offer-help-categories');
    }
  };

  const handleSubTaskSelect = (subTask: SubTask) => {
    setSelectedSubTask(subTask);
    alert(`Selected ${subTask.name}! This will open the specific request form soon.`);
  };

  const handleNeedHelpSubmit = (request: HelpRequest) => {
    console.log('New help request:', request);
    alert('Your help request has been posted! 🎉');
    setIsNeedHelpModalOpen(false);
    handleBackToHome();
  };

  const handleOfferHelpSubmit = (offer: HelpOffer) => {
    console.log('New help offer:', offer);
    alert('Thank you for offering to help! 🤝 Your profile has been created.');
    setIsOfferHelpModalOpen(false);
    handleBackToHome();
  };

  // Render different views based on current state
  if (currentView === 'need-help-categories') {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">🌟 Community Project 🌟</h1>
          <p className="subtitle">Where neighbors help neighbors</p>
        </header>
        <CategorySelection
          title="What do you need help with?"
          subtitle="Choose a category to find the right kind of assistance"
          categories={NEED_HELP_CATEGORIES}
          onCategorySelect={handleCategorySelect}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  if (currentView === 'offer-help-categories') {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">🌟 Community Project 🌟</h1>
          <p className="subtitle">Where neighbors help neighbors</p>
        </header>
        <CategorySelection
          title="How can you help others?"
          subtitle="Select the areas where you can offer your skills and expertise"
          categories={OFFER_HELP_CATEGORIES}
          onCategorySelect={handleCategorySelect}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  if (currentView === 'need-help-subtasks' && selectedCategory) {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">🌟 Community Project 🌟</h1>
          <p className="subtitle">Where neighbors help neighbors</p>
        </header>
        <SubTaskSelection
          categoryName={selectedCategory.name}
          categoryIcon={selectedCategory.icon}
          subTasks={getSubTasksByCategory(selectedCategory.id)}
          onSubTaskSelect={handleSubTaskSelect}
          onBack={handleBackToCategories}
        />
      </div>
    );
  }

  if (currentView === 'offer-help-subtasks' && selectedCategory) {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">🌟 Community Project 🌟</h1>
          <p className="subtitle">Where neighbors help neighbors</p>
        </header>
        <SubTaskSelection
          categoryName={selectedCategory.name}
          categoryIcon={selectedCategory.icon}
          subTasks={getSubTasksByCategory(selectedCategory.id)}
          onSubTaskSelect={handleSubTaskSelect}
          onBack={handleBackToCategories}
        />
      </div>
    );
  }

  // Default home view
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">🌟 Community Project 🌟</h1>
        <p className="subtitle">Where neighbors help neighbors</p>
      </header>
      
      <main className="main-content">
        <div className="welcome-section">
          <h2>Welcome to our community!</h2>
          <p>
            Build meaningful connections by trading favors and earning social credits. 
            Help someone today, and someone will help you tomorrow.
          </p>
        </div>

        <div className="action-buttons">
          <button 
            className="action-btn need-help-btn"
            onClick={handleNeedHelp}
          >
            <span className="btn-icon">🙋‍♂️</span>
            <span className="btn-text">Need Help</span>
            <span className="btn-description">Request assistance from the community</span>
          </button>

          <button 
            className="action-btn offer-help-btn"
            onClick={handleOfferHelp}
          >
            <span className="btn-icon">🤝</span>
            <span className="btn-text">Offer Help</span>
            <span className="btn-description">Share your skills and earn credits</span>
          </button>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <span className="stat-number">127</span>
            <span className="stat-label">Active helpers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">89</span>
            <span className="stat-label">Favors completed</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">34</span>
            <span className="stat-label">Open requests</span>
          </div>
        </div>
      </main>

      {/* Modals */}
      <NeedHelpModal
        isOpen={isNeedHelpModalOpen}
        onClose={() => setIsNeedHelpModalOpen(false)}
        onSubmit={handleNeedHelpSubmit}
      />
      
      <OfferHelpModal
        isOpen={isOfferHelpModalOpen}
        onClose={() => setIsOfferHelpModalOpen(false)}
        onSubmit={handleOfferHelpSubmit}
      />
    </div>
  );
}

export default App;