import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import ContactInfo from './ContactInfo';
import FacebookInfo from './FacebookInfo';
import GoogleAdsInfo from './GoogleAdsInfo';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div>
      <h1>Marketing App</h1>
      <nav>
        <ul>
          <li><a href="#home" onClick={handleNavClick('home')}>Home</a></li>
          <li><a href="#contact" onClick={handleNavClick('contact')}>Contact</a></li>
          <li><a href="#facebook" onClick={handleNavClick('facebook')}>Facebook</a></li>
          <li><a href="#google-ads" onClick={handleNavClick('google-ads')}>Google Ads</a></li>
        </ul>
      </nav>
      <div>
        {activeSection === 'home' && <Home />}
        {activeSection === 'contact' && <ContactInfo />}
        {activeSection === 'facebook' && <FacebookInfo />}
        {activeSection === 'google-ads' && <GoogleAdsInfo />}
      </div>
    </div>
  );
};

export default App;