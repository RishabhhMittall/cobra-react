import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ContestDetails.css"; // Import CSS file for component-specific styles

const ContestDetails = () => {
  const { contestId } = useParams();
  const navigate = useNavigate();
  const [contest, setContest] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContestDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3001/api/v1/contests/seeContests/${contestId}`
        );

        if (response.data.success) {
          setContest(response.data.data);
          setQuestions(response.data.data.questions_list);
        } else {
          throw new Error("Invalid data format received from server");
        }
      } catch (error) {
        console.error("Error fetching contest details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    if (contestId) {
      fetchContestDetails();
    }
  }, [contestId]);

  const handlePlayQuestion = (questionId) => {
    // Navigate to the QuestionDetails route with the selected questionId
    navigate(`/contest/${contestId}/question/${questionId}`);
  };

  if (loading) {
    return <p className="loading-text">Loading contest details...</p>;
  }

  if (!contest) {
    return <p className="error-text">No contest details found.</p>;
  }

  return (
    <div className="contest-details-main">
      <div className="contest-details-container">
        <h1 className="contest-title">{contest.name}</h1>

        <h2 className="questions-heading">Questions</h2>
        <div className="question-list">
          {questions.map((question) => (
            <div key={question._id} className="question-item">
              <h3 className="question-title-contest">{question.title}</h3>
              <button
                className="play-button"
                onClick={() => handlePlayQuestion(question._id)}
              >
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
