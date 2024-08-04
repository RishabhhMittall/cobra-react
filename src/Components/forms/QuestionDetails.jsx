import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./QuestionDetails.css"; // Import CSS file for component-specific styles
import Comipler from "./Compiler";

const QuestionDetails = () => {
  const { contestId, questionId } = useParams(); // Extract contestId and questionId from route params
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestionDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/contests/seeContests/${contestId}`
        );
        if (response.data.success) {
          const contest = response.data.data;
          const matchingQuestion = contest.questions_list.find(
            (q) => q._id === questionId
          );
          if (matchingQuestion) {
            setQuestion(matchingQuestion);
          } else {
            throw new Error("Question not found in the contest");
          }
        } else {
          throw new Error("Failed to fetch contest details");
        }
      } catch (error) {
        setError("Error fetching question details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionDetails();
  }, [contestId, questionId]); // Fetch question details whenever contestId or questionId changes

  if (loading) {
    return <p className="loading-text">Loading question details...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (!question) {
    return <p className="error-text">No question details found.</p>;
  }

  return (
    <div className="question-details-main">
      <div className="question-details-container">
        <h3 className="question-title">{question.title}</h3>
        <p className="question-description">
          Description:&nbsp;<br></br>
          {question.desc}
        </p>
        <div className="question-info">
          <p className="info-item">{question.difficulty}</p>
        </div>
        {question.testcases && question.testcases.length > 0 ? (
          <div className="test-cases-container">
            <h4 className="test-cases-heading">Test Cases</h4>
            <ul className="test-cases-list">
              {question.testcases.map((testcase, index) => (
                <li key={index} className="test-case-item">
                  <strong>Input:</strong> {testcase.input} <br />
                  <strong>Output:</strong> {testcase.output} <br />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="no-test-cases">
            No test cases available for this question.
          </p>
        )}
      </div>
      <Comipler />
    </div>
  );
};

export default QuestionDetails;
