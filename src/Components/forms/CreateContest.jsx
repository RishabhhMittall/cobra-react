import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";

function CreateContestForm() {
  const navigate = useNavigate();

  const [contestName, setContestName] = useState("");
  const [questions, setQuestions] = useState([
    {
      title: "",
      desc: "",
      difficulty: "",
      testcases: [{ input: "", output: "" }],
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value,
    };
    setQuestions(updatedQuestions);
  };

  const handleTestCaseChange = (qIndex, tIndex, field, value) => {
    const updatedQuestions = [...questions];
    const updatedTestCases = [...updatedQuestions[qIndex].testcases];
    updatedTestCases[tIndex] = {
      ...updatedTestCases[tIndex],
      [field]: value,
    };
    updatedQuestions[qIndex] = {
      ...updatedQuestions[qIndex],
      testcases: updatedTestCases,
    };
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        title: "",
        desc: "",
        difficulty: "",
        testcases: [{ input: "", output: "" }],
      },
    ]);
  };

  const handleAddTestCase = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].testcases.push({ input: "", output: "" });
    setQuestions(updatedQuestions);
  };

  const handleCreate = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const newContest = {
        name: contestName,
        questions_list: questions,
      };

      const response = await axios.post(
        "http://localhost:3001/api/v1/contests/",
        newContest
      );
      console.log("Contest created:", response.data);

      // Reset form fields after successful submission
      setContestName("");
      setQuestions([
        {
          title: "",
          desc: "",
          difficulty: "",
          testcases: [{ input: "", output: "" }],
        },
      ]);

      navigate("/contest"); // Navigate to the contest page after successful submission
    } catch (error) {
      console.error("Error creating contest:", error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: "#f0f0f0", padding: "20px", marginTop: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Create Contest
      </Typography>
      <form onSubmit={handleCreate}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Contest Name"
              variant="outlined"
              fullWidth
              value={contestName}
              onChange={(e) => setContestName(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">Questions:</Typography>
          </Grid>

          {questions.map((question, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={8}>
                <TextField
                  label="Question Title"
                  variant="outlined"
                  fullWidth
                  value={question.title}
                  onChange={(e) => handleInputChange(index, "title", e.target.value)}

                  required
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id={`difficulty-label-${index}`}>Difficulty</InputLabel>
                  <Select
                    labelId={`difficulty-label-${index}`}
                    value={question.difficulty}
                    onChange={(e) => handleInputChange(index, "difficulty", e.target.value)}
                    label="Difficulty"
                    required
                  >
                    <MenuItem value="Easy">Easy</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Hard">Hard</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {question.testcases.map((testcase, i) => (
                <React.Fragment key={i}>
                  <Grid item xs={6}>
                    <TextField
                      label={`Input ${i + 1}`}
                      variant="outlined"
                      fullWidth
                      value={testcase.input}
                      onChange={(e) => handleTestCaseChange(index, i, "input", e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label={`Output ${i + 1}`}
                      variant="outlined"
                      fullWidth
                      value={testcase.output}
                      onChange={(e) => handleTestCaseChange(index, i, "output", e.target.value)}
                      required
                    />
                  </Grid>
                </React.Fragment>
              ))}
              <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleAddTestCase(index)}
                sx={{margin: 2}}>
                  Add Test Case
                </Button>
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddQuestion}>
              Add Question
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Create Contest
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CreateContestForm;
