import React, { useEffect, useState } from "react";
import logo from "../Components/utils/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.scss";
import UserDetailsDropdown from "../Components/UserDetails/UserDetailsDrpdown";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle authentication logic here (e.g., login, logout)
  const handleLogin = () => {
    // Simulated login logic (e.g., setting isAuthenticated to true after successful login)
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic (e.g., clear authentication token)
    setIsAuthenticated(false);
    setIsDropdownOpen(false); // Close the dropdown on logout
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update showNavbar based on isAuthenticated and current pathname
    if (
      location.pathname === "/Signin" ||
      location.pathname === "/Login"
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location, isAuthenticated]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    showNavbar && (
      <nav className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="left">
          <img src={logo} alt="Logo" />
          <Link to="/AfterLog">COBRA</Link>
        </div>

        {isAuthenticated && (
          <div className="center">
            <Link to="/quiz">Quiz</Link>
            <Link to="/contest">Contest</Link>
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        )}

        <div className="right">
          {isAuthenticated ? (
            <div className="head-user-details">
              <button onClick={toggleDropdown}>
                <AccountCircleIcon
                  style={{ cursor: "pointer", color: "white", fontSize: 35 }}
                />
                {isDropdownOpen && (
                  <UserDetailsDropdown
                    isOpen={isDropdownOpen}
                    onClose={closeDropdown}
                    onLogout={handleLogout}
                  />
                )}
              </button>
            </div>
          ) : (
            <>
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <button className="login" onClick={handleLogin}>
                  LogIn
                </button>
              </Link>
              <Link to="/Signin" style={{ textDecoration: "none" }}>
                <button className="signup">SignUp</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    )
  );
};

export default Header;
