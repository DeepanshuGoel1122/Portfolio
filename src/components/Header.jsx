import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home">
          <div>
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2>Deepanshu Goel</h2>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-primary" href="https://drive.google.com/file/d/18f5oQrXxi5Na7rJX-TVKiAZmgjfV2UcE/view?usp=sharing">
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

