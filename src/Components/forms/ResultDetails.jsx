import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ResultDetails.scss";
import Result from "../Result page/Result";

const ResultDetails = ({ answers }) => {
  const [answersObj, setAnswersObj] = useState({});
  const [score, setScore] = useState(0);
  const params = useParams();
  const [totalMarks, setTotalMarks] = useState(0);
  const [finalMarks, setFinalMarks] = useState(0);
  const [showResult, setShowResult] = useState(false); // State to toggle showing result

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/v1/quiz/abc/${params.id}`
      );
      setAnswersObj(res.data.answers);
      setTotalMarks(res.data.answers.length * 2);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const calScore = () => {
    let newScore = 0;
    for (const key in answersObj) {
      if (answersObj.hasOwnProperty(key)) {
        const answerIndex = parseInt(key);
        if (parseInt(answers[answerIndex]) === parseInt(answersObj[key]) - 1) {
          newScore += 2;
        }
      }
    }
    setScore(newScore);
    setFinalMarks(newScore);
    setShowResult(true); // Show the result after calculating the score
  };

  return (
    <div className="result-details-main">
      <h1>Yay!!! You Completed the Quiz Successfully</h1>
      <button className="result-button-score" onClick={calScore}>
        Click here to View your Score
      </button>
      {showResult && (
        <>
          <Result totalMarks={totalMarks} scoredMarks={finalMarks} />
          <p>Score: {score}</p>
        </>
      )}
    </div>
  );
};

export default ResultDetails;
