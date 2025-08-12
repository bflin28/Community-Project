import React, { useState } from 'react';
import './App.css';
import NeedHelpModal, { HelpRequest } from './components/NeedHelpModal';
import OfferHelpModal, { HelpOffer } from './components/OfferHelpModal';

function App() {
  const [isNeedHelpModalOpen, setIsNeedHelpModalOpen] = useState(false);
  const [isOfferHelpModalOpen, setIsOfferHelpModalOpen] = useState(false);

  const handleNeedHelp = () => {
    setIsNeedHelpModalOpen(true);
  };

  const handleOfferHelp = () => {
    setIsOfferHelpModalOpen(true);
  };

  const handleNeedHelpSubmit = (request: HelpRequest) => {
    console.log('New help request:', request);
    // TODO: Send to backend/database
    alert('Your help request has been posted! 🎉');
    setIsNeedHelpModalOpen(false);
  };

  const handleOfferHelpSubmit = (offer: HelpOffer) => {
    console.log('New help offer:', offer);
    // TODO: Send to backend/database
    alert('Thank you for offering to help! 🤝 Your profile has been created.');
    setIsOfferHelpModalOpen(false);
  };

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
