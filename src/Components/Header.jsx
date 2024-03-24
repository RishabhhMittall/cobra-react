import React, { useEffect, useState } from 'react';
import logo from "../Components/utils/logo.png";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='left'>
        <img src={logo} alt="" />
        <h2>COBRA</h2>
      </div>

      <div className='center'>
          
        <Link to="/tvshows">Quiz</Link>
        <Link to="/Movies">Contest</Link>
        <Link to="/recentlyAdd">About Us</Link>
        <Link to="/MyList">FAQ</Link>
      </div>

      <div className='right'>
        <button>SignUp</button>
      </div>
    </nav>
  );
};

export default Header;
