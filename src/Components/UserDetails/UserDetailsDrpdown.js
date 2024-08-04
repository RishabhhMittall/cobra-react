import React from "react";
import { Link } from "react-router-dom";
import "./UserDetailsDropdown.scss";

const UserDetailsDropdown = ({ isOpen, onClose, onLogout }) => {
  return (
    <div className={`user-details-dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-content">
        <p>
          Name: &nbsp;&nbsp;<span>John Doe</span>
        </p>
        <p>
          Email: &nbsp;&nbsp;<span>john@example.com</span>
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button onClick={onLogout} className="header-logout">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetailsDropdown;
