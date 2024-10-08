import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Quiz.scss";
import quizimg from "../Components/utils/quiz.jpg";
import PlusButton from "./QuizPlusBut.jsx";
import Footer from "./Footer.jsx";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  const getQuizQuestions = async () => {
    const response = await fetch("http://localhost:3001/api/v1/quiz/quizzess");
    const res = await response.json();
    setQuizzes(res);
  };

  useEffect(() => {
    getQuizQuestions();
  }, []);

  // Calculate the height of the page based on the number of quiz cards
  const pageHeight = Math.max(100, 350 + quizzes.length * 200); // Minimum height is 350vh

  return (
    <div className="quiz-main" style={{ height: `${pageHeight}px` }}>
      <div className="main-container">
        <div className="quiz-content">
          <h1>QuiZone</h1>
          <h3>
            Dive Into a World of Knowledge and Fun with Our Engaging Quizzes!
          </h3>
        </div>
      </div>

      <div className="quiz-container">
        {quizzes.map((quiz) => (
          <div className="quiz-card" key={quiz._id}>
            <div className="quiz-image">
              <img src={quizimg} alt={quiz.name} />
            </div>
            <div className="quiz-details">
              <h3>{quiz.name}</h3>
              <div className="quiz-buttons">
                <Link to={`/quiz/${quiz._id}`}>
                  <button className="participate-btn" >Play</button>
                </Link>
              </div>
            </div>
            <div className="quiz-details-hover">
              <h3>{quiz.name}</h3>
            </div>
          </div>
        ))}
      <PlusButton />
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

export default Quiz;
