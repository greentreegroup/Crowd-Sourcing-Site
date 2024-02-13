// Header.js
import React from 'react';
import './Header.css';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
const Header = ({ onSignInClick, onSignUpClick }) => {
  return (
    <header className="header">
      <img src="/img/logo.png" alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src="/img/logo-bbc.png" alt="Seen on logo 1" />
        <img src="/img/logo-forbes.png" alt="Seen on logo 2" />
        <img src="/img/logo-techcrunch.png" alt="Seen on logo 3" />
        <img src="/img/logo-bi.png" alt="Seen on logo 4" />
      </div>
      <div className="header-buttons">
        <SignInButton onClick={onSignInClick} />
        <SignUpButton onClick={onSignUpClick} />
      </div>
    </header>
  );
};

export default Header;