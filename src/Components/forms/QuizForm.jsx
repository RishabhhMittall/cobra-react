import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuizForm = () => {
  const [quizData, setQuizData] = useState({
    name: "",
    questions_list: [
      {
        question_number: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  });

  const handleChange = (e, index, field, optionIndex) => {
    const { value } = e.target;
    const updatedQuizData = { ...quizData };
    if (field === "options") {
      updatedQuizData.questions_list[index][field][optionIndex] = value;
    } else if (field === "answer" && /^[0-3]$/.test(value)) {
      updatedQuizData.questions_list[index][field] = value;
    } else {
      updatedQuizData.questions_list[index][field] = value;
    }
    setQuizData(updatedQuizData);
  };

  const handleAddQuestion = () => {
    setQuizData((prevState) => ({
      ...prevState,
      questions_list: [
        ...prevState.questions_list,
        {
          question_number: prevState.questions_list.length + 1,
          question: "",
          options: ["", "", "", ""],
          answer: "",
        },
      ],
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const answers = quizData.questions_list.map(
        (question) => question.answer
      );

      if (answers.some((answer) => answer === "")) {
        console.error("Please provide an answer for each question.");
        return;
      }

      const res = await axios.post("http://localhost:3001/api/v1/quiz/", {
        ...quizData,
        answers: answers,
      });
      navigate("/quiz");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Create Quiz
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Quiz Name"
          variant="outlined"
          fullWidth
          value={quizData.name}
          onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
          required
          margin="normal"
        />

        {quizData.questions_list.map((question, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom>
              Question {question.question_number}:
            </Typography>
            <TextField
              label="Question"
              variant="outlined"
              fullWidth
              value={question.question}
              onChange={(e) => handleChange(e, index, "question")}
              required
              margin="normal"
            />

            <Typography variant="subtitle1" gutterBottom>
              Options:
            </Typography>
            {question.options.map((option, optionIndex) => (
              <TextField
                key={optionIndex}
                label={`Option ${optionIndex + 1}`}
                variant="outlined"
                fullWidth
                value={option}
                onChange={(e) => handleChange(e, index, "options", optionIndex)}
                required
                margin="normal"
              />
            ))}

            <Typography variant="subtitle1" gutterBottom>
              Answer:
            </Typography>
            <Select
              value={question.answer}
              onChange={(e) => handleChange(e, index, "answer")}
              required
              fullWidth
              variant="outlined"
              margin="normal"
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </div>
        ))}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginTop: "10px",
              }}
              onClick={handleAddQuestion}
            >
              Add Question
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginTop: "10px",
              }}
            >
              Create Quiz
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default QuizForm;
