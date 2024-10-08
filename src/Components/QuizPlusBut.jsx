import React from "react";
import { Link } from "react-router-dom";
const QuizPlusBut = () => {
  return (
    <div className="plus-button">
      <Link to="/createquiz" style={{ textDecoration: "none" }}>
        <button>
          + <br /> Build a Quiz
        </button>
      </Link>
    </div>
  );
};

export default QuizPlusBut;
