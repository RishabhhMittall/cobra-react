import React, { useEffect, useState } from 'react';
import logo from "../Components/utils/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './Header.scss';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle authentication logic here (e.g., login, logout)
  const handleLogin = () => {
    // Perform login logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  const handleQuizRoute = () => {
    navigate("/quiz");
  }

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

  useEffect(() => {
    if (location.pathname === '/Signin' || location.pathname === '/Login') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    showNavbar && (
      <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className='left'>
          <img src={logo} alt="" />
          <Link to="/">COBRA</Link>
        </div>
        <div className='center'>
          <Link to="/quiz">Quiz</Link>
          <Link to="/contest">Contest</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className='right'>
          {!isAuthenticated ? (
            <>
              <Link to="/Login" style={{ textDecoration: 'none' }}>
                <button className='login' onClick={handleLogin}>LogIn</button>
              </Link>
              <Link to="/Signin" style={{ textDecoration: 'none' }}>
                <button className='signup'>SignUp</button>
              </Link>
            </>
          ) : (
            <Link to= "/" style={{ textDecoration: 'none' }}>

              <button onClick={handleLogout} className='header-logout'>Logout</button>
            </Link>
          )}
        </div>
      </nav>
    )
  );
};

export default Header;