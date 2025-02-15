import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import FacebookInfo from './FacebookInfo';
import GoogleAdsInfo from './GoogleAdsInfo';

const App: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);
  const [showGoogleAds, setShowGoogleAds] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowContact(!showContact);
    setShowFacebook(false);
    setShowGoogleAds(false);
  };

  const handleFacebookClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowFacebook(!showFacebook);
    setShowContact(false);
    setShowGoogleAds(false);
  };

  const handleGoogleAdsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowGoogleAds(!showGoogleAds);
    setShowContact(false);
    setShowFacebook(false);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
          <li><a href="#facebook" onClick={handleFacebookClick}>Facebook</a></li>
          <li><a href="#google-ads" onClick={handleGoogleAdsClick}>Google Ads</a></li>
        </ul>
      </nav>
      <div>
        <p>React app with TypeScript</p>
        {showContact && <ContactInfo />}
        {showFacebook && <FacebookInfo />}
        {showGoogleAds && <GoogleAdsInfo />}
      </div>
    </div>
  );
};

export default App;