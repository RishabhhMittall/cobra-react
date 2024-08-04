import React, { useState, useEffect } from "react";
import "./Result.scss";

const Result = ({ totalMarks, scoredMarks }) => {
  console.log(totalMarks, scoredMarks);
  const [percentage, setPercentage] = useState(0);
  const [cssPercentage, setCssPercentage] = useState(0);

  useEffect(() => {
    const calculatedPercentage = (scoredMarks / totalMarks) * 100;
    setPercentage(calculatedPercentage);
    setCssPercentage(calculatedPercentage);
  }, [totalMarks, scoredMarks]);

  return (
    <div className="result-container">
      <div className="result-header">
        <h2>Your Score</h2>
      </div>
      <div className="result-big-box">
        <div className="result-marks-details">
          <p>
            Total Marks: <span>{totalMarks}</span>
          </p>
          <p>
            Scored Marks: <span>{scoredMarks}</span>
          </p>
        </div>
        <div className="result-main" style={{ "--percentage": cssPercentage }}>
          <div className="result-skill">
            <div className="result-outer">
              <div className="result-inner">
                <div id="result-number">{percentage.toFixed(2)}%</div>
              </div>
            </div>
            <svg
              className="result-svg"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 440,
                  strokeDashoffset: (440 * (100 - cssPercentage)) / 100,
                  stroke: "url(#GradientColor)",
                  strokeWidth: "20px",
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
