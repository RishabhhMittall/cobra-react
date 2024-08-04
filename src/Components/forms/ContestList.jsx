import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ContestLists.scss";
import ContestPlusBut from "../ContestPlusBut.jsx";
import quizimg from "../utils/quiz.jpg";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContestList = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/contests/seeContests"
        );
        if (response.data.success && Array.isArray(response.data.data)) {
          setContests(response.data.data);
        } else {
          throw new Error("Invalid contests data format");
        }
      } catch (error) {
        setError("Error fetching contests");
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  const handlePlayClick = (contestId) => {
    // Handle play button click by navigating to ContestDetails
    navigate(`/contest/${contestId}`);
  };

  const handleCreateContest = () => {
    // Handle play button click by navigating to ContestDetails
    navigate(`/createcontest`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching contests: {error}</p>;
  }

  const pageHeight = Math.max(100, 350 + contests.length * 450);

  return (
    <div className="quiz-main" style={{ height: `${pageHeight}px` }}>
      <div className="main-container">
        <div className="quiz-content">
          <h1>Contests</h1>
          <h3>
            Dive Into a World of Knowledge and Fun with Our Engaging Contests!
          </h3>
        </div>
      </div>

      <div className="quiz-container">
        {contests.map((contest) => (
          <div className="quiz-card" key={contest._id}>
            <div className="quiz-image">
              <img src={quizimg} alt={contest.name} />
            </div>

            <div className="quiz-details">
              <h3>{contest.name}</h3>
              <button className="participate-btn" onClick={() => handlePlayClick(contest._id)}>Play</button>
            </div>
            <div>
              
            </div>
          </div>
        ))}
        <button onClick={() => handleCreateContest()}>
              </button>
        <ContestPlusBut />
      </div>

      <div className="quiz-footer">
        <div className="info">
          <div>
            <BusinessOutlinedIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
              }}
            />
            <p>323 Rohini, New Delhi, India</p>
          </div>
          <div>
            <EmailIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
              }}
            />
            <p>cobra_team@gmail.com</p>
          </div>
          <div className="phone">
            <LocalPhoneIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
              }}
            />
            <p>7987987980</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="social">
          <p>
            Follow us on social media to keep up to date with the latest
            developments in the coding space.
          </p>
          <div className="soc-icons">
            <InstagramIcon style={{ cursor: "pointer" }} />
            <FacebookIcon style={{ cursor: "pointer" }} />
            <LinkedInIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestList;
