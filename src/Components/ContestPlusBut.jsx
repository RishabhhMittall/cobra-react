import React from "react";
import { Link } from "react-router-dom";
const ContestPlusBut = () => {
  return (
    <div className="plus-button">
      <Link to="/createcontest" style={{ textDecoration: "none" }}>
        <button>
          + <br /> Create Contest
        </button>
      </Link>
    </div>
  );
};

export default ContestPlusBut;
