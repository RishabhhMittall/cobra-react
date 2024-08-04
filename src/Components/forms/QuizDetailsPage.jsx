import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Container,
  Divider,
  Button,
} from "@mui/material";
import axios from "axios";
import ResultDetails from "./ResultDetails";

const QuizDetailsPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const params = useParams();

  const getQuiz = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/v1/quiz/abc/${params.id}`
      ); // Replace with your API endpoint
      setQuiz(res.data);
      setAnswers(new Array(res.data.questions_list.length).fill(""));
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    setShowResult(true);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <>
      {showResult ? (
        <ResultDetails answers={answers} />
      ) : (
        quiz && (
          <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
            <Typography variant="h3" align="center" gutterBottom>
              {quiz.name}
            </Typography>
            <List sx={{ p: 0 }}>
              {quiz.questions_list &&
                quiz.questions_list.map((question, index) => (
                  <Paper key={question.id} elevation={3} sx={{ mb: 3, p: 2 }}>
                    <ListItem>
                      <ListItemText
                        primary={`${index + 1}. ${question.question}`}
                        primaryTypographyProps={{ variant: "h6" }}
                      />
                    </ListItem>
                    <Divider />
                    <RadioGroup
                      aria-label={`options-${question._id}`}
                      name={`options-${question._id}`}
                      value={answers[index]}
                      onChange={(event) =>
                        handleOptionChange(index, event.target.value)
                      }
                    >
                      {question.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={optionIndex.toString()}
                          control={<Radio />} // Use Radio instead of Checkbox
                          label={option}
                          sx={{ ml: 1, my: 1 }}
                        />
                      ))}
                    </RadioGroup>
                  </Paper>
                ))}
            </List>
            <Button variant="outlined" onClick={handleSubmitQuiz}>
              Submit Quiz
            </Button>
          </Container>
        )
      )}
    </>
  );
};

export default QuizDetailsPage;
